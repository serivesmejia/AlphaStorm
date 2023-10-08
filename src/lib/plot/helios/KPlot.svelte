<script lang="ts">
    import { getHourFromNOAADate, getHourFromUTCDate, utcHourMinus } from '$lib/api/noaa/date';
    import { fetchKpLatest3h, type NOAAKpData } from '$lib/api/noaa/kp';

    import LinePlot from '$lib/plot/LinePlot.svelte';
    import type { ChartData } from 'chart.js/auto';

    export let sampleSize = 10

    var data: ChartData
    var resolved = false

    fetchKpLatest3h((kpData: NOAAKpData[]) => {
        var sample: NOAAKpData[] = []

        for(let i = 0 ; i < sampleSize ; i++) {
            sample.push(kpData[i])
        }

        data = {
            labels: sample.map((x) => getHourFromNOAADate(x.time_tag)),
            datasets: [{
                label: "K Index",
                data: sample.map((x) => x.Kp),
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