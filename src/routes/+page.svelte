<script lang="ts">
    import KPredictionPlot from "$lib/plot/helios/KPredictionPlot.svelte"
    import * as tf from "@tensorflow/tfjs"
    import { model } from "$lib/alphapredict/model"

    console.log(model.predict(tf.tensor2d([20], [1, 1])).dataSync());
</script>

<KPredictionPlot sampleSize=60/>