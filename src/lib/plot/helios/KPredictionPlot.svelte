<script lang="ts">
    import { getHourFromUTCDate, utcHourMinus } from '$lib/api/noaa/date';
    import { fetchKpPredictionHourlyHistory, type KpPrediction, type KpPredictionHistory } from '$lib/api/noaa/kp_prediction';

    import LinePlot from '$lib/plot/LinePlot.svelte';
    import type { ChartData } from 'chart.js/auto';

    export let sampleSize = 10

    var data: ChartData
    var resolved = false

    fetchKpPredictionHourlyHistory((kpData: KpPrediction[]) => {
        var sample = []

        for(let i = 0 ; i < sampleSize ; i++) {
            sample.push(kpData[i])
        }

        data = {
            labels: sample.map((x) => getHourFromUTCDate(x.model_prediction_time)),
            datasets: [{
                label: "K Index",
                data: sample.map((x) => x.k),
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