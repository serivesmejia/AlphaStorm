import * as tf from "@tensorflow/tfjs"
import { fetchPotsdamHistoricKP, type PotsdamKpData } from "$lib/api/potsdam/historic_kp"

export const model: tf.Sequential = tf.sequential()
model.add(tf.layers.dense({units: 1, inputShape: [1]}))

model.compile({loss: 'meanSquaredError', optimizer: "sgd"})

fetchPotsdamHistoricKP((data: PotsdamKpData[]) => {
    const xs = tf.tensor2d(data.map((potsdam) => potsdam.date), [data.length, 1])
    const ys = tf.tensor2d(data.map((potsdam) => potsdam.Kp), [data.length, 1])
    
    console.log("begin model trainin")

    model.fit(xs, ys, {
        epochs: 250,
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