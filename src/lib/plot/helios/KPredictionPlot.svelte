<script lang="ts">
    import { fetchKpPredictionHourlyHistory, type KpPrediction, type KpPredictionHistory } from '$lib/api/noaa/kp';
    import LineXYPlot from '$lib/plot/LineXYPlot.svelte';
    import * as d3 from 'd3';
  
    export var sampleSize = 60;

    var x = d3.scaleOrdinal([0, sampleSize])
    var y = d3.scaleLinear([0, 9])
  
    fetchKpPredictionHourlyHistory((kpData: KpPredictionHistory) => {
        x.domain(kpData.predictions.map((d: KpPrediction) => d.model_prediction_time))

        var sample = []

        for(let i = 0 ; i < sampleSize ; i++) {
            sample.push(kpData.predictions[i])
        }

        y.domain(sample)
    })
</script>

<LineXYPlot x={x} y={y}/>