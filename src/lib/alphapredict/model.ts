import * as tf from "@tensorflow/tfjs"
import { fetchPotsdamHistoricKP } from "$lib/api/potsdam/historic_kp"

fetchPotsdamHistoricKP((data) => {
    console.log(data[0])
})

export const model: tf.Sequential = tf.sequential()
model.add(tf.layers.dense({units: 1, inputShape: [1]}))

model.compile({loss: 'meanSquaredError', optimizer: "sgd"})

const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1])
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1])

await model.fit(xs, ys, {epochs: 250})