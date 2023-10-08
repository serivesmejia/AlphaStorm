<script lang="ts">
    import KPredictionPlot from "$lib/plot/helios/KPredictionPlot.svelte"
    import * as tf from "@tensorflow/tfjs"
    import { model } from "$lib/alphapredict/model"
    import KPlot from "$lib/plot/helios/KPlot.svelte";

    console.log(model.predict(tf.tensor2d([20], [1, 1])).dataSync());
</script>

<KPlot sampleSize=10/>