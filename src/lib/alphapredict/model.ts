import * as tf from "@tensorflow/tfjs"
import { fetchPotsdamHistoricKP, type PotsdamKpData } from "$lib/api/potsdam/historic_kp"

export const model: tf.Sequential = tf.sequential()
model.add(tf.layers.dense({units: 64, inputShape: [1], activation: 'relu'}))
model.add(tf.layers.dense({units: 1, activation: 'linear' }))

model.compile({loss: 'meanSquaredError', optimizer: "adam"})

fetchPotsdamHistoricKP((data: PotsdamKpData[]) => {
    let min = tf.scalar(data[0].date)
    let max = tf.scalar(data[data.length - 1].date)

    const xs = tf.tensor2d(data.map((potsdam) => {
      let date = potsdam.date + Number.EPSILON
      console.log(date)
      return date
    }), [data.length, 1])
    const ys = tf.tensor2d(data.map((potsdam) => potsdam.Kp), [data.length, 1])
    
    console.log(xs.arraySync()[10])

    const xsnorm = xs.sub(min).div(max.sub(min))

    console.log(xsnorm.arraySync()[10])

    console.log("begin model trainin")

    model.fit(xsnorm, ys, {
        epochs: 100,
        batchSize: 32,
        callbacks: {
            onTrainBegin: async () => {
              console.log("onTrainBegin")
            },
            onTrainEnd: async (epoch, logs) => {
              console.log("onTrainEnd" + epoch + JSON.stringify(logs))
            },
            onEpochBegin: async (epoch, logs) => {
              console.log("onEpochBegin" + epoch + JSON.stringify(logs))
            },
            onEpochEnd: async (epoch, logs) => {
              console.log("onEpochEnd" + epoch + JSON.stringify(logs))
            },
            onBatchBegin: async (epoch, logs) => {
              console.log("onBatchBegin" + epoch + JSON.stringify(logs))
            },
            onBatchEnd: async (epoch, logs) => {
              console.log("onBatchEnd" + epoch + JSON.stringify(logs))
            }
          }
    }).then((_out) => {
        model.save('downloads://alpha-predict')
        model.predict(tf.tensor2d([20], [1, 1])).dataSync()
    })
})