<script lang="ts">
    import * as tf from "@tensorflow/tfjs"
    import { fetchAlphaPredictModel, } from "$lib/alphapredict/model";
    import type { ChartData } from "chart.js";
    import { parseToAlphaTimestamp, alphaTimestampToPDate, pDateHourStep, dateToAlphaTimestamp } from "$lib/api/potsdam/historic_kp";
    import LinePlot from "$lib/plot/LinePlot.svelte";

    const date = new Date(1900, 10 - 1, 8, 10)
    const testPDate = alphaTimestampToPDate(dateToAlphaTimestamp(date))

    export const hourStep = 1000
    export const sampleSize = 1000

    var data: ChartData
    var resolved = false

    fetchAlphaPredictModel((m: tf.LayersModel) => {
        let dataHourly = []
        
        for(var i = 0 ; i < sampleSize ; i++) {
            let pDate = testPDate + (pDateHourStep * (i * hourStep))
            console.log(pDate)

            dataHourly.push(m.predict(tf.tensor2d([pDate], [1, 1])).dataSync())
        }

        console.log(dataHourly)

        data = {
            labels: dataHourly.map((_value, index) => { 
                date.setUTCHours(date.getUTCHours() + (index * hourStep))
                return date.toDateString()
             }),
 
            datasets: [{
                label: "K Index",
                data: dataHourly.map((value: Float32Array) => value.at(0)),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }

        resolved = true
    })
</script>


{#if resolved}
    <LinePlot data={data}/>
{/if}