import * as tf from "@tensorflow/tfjs"
import { fetchPotsdamHistoricKP, type PotsdamKpData } from "$lib/api/potsdam/historic_kp"

export class AlphaPredictModelTrainer {
    model: tf.Sequential

    epoch: number
    batchSize: number

    constructor(epoch: number, batchSize: number) { 
        this.model = tf.sequential()

        this.epoch = epoch
        this.batchSize = batchSize

        this.model.add(tf.layers.dense({units: 128, inputShape: [2], activation: 'relu'}))
        this.model.add(tf.layers.dense({units: 64, activation: 'relu'}))
        this.model.add(tf.layers.dense({units: 1, activation: 'linear' }))

        this.model.compile({loss: 'meanAbsoluteError', optimizer: "adam"})
    }

    train(callback: (m: tf.Sequential) => void) {
        fetchPotsdamHistoricKP((data: PotsdamKpData[]) => {
            let min = tf.scalar(data[0].date)
            let max = tf.scalar(data[data.length - 1].date)

            const xs = tf.tensor2d(data.map((potsdam) => potsdam.date), [data.length, 2])
            const ys = tf.tensor2d(data.map((potsdam) => potsdam.Kp), [data.length, 1])
    
            console.log(xs.arraySync())

            const xsnorm = xs.sub(min).div(max.sub(min))

            console.log(xsnorm.arraySync())

            console.log("begin model training")

            this.model.fit(xsnorm, ys, {
                epochs: this.epoch,
                batchSize: this.batchSize,
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
                callback(this.model)
            })
        })
    }

}

export function fetchAlphaPredictModel(callback: (m: tf.LayersModel) => void) {
    tf.loadLayersModel("/model/alpha-predict.json").then(callback)
}