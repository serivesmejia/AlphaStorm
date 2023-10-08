<script lang="ts">
    import * as tf from "@tensorflow/tfjs"
    import { AlphaPredictModelTrainer } from "$lib/alphapredict/model"

    var training = false
    var trainButtonText = "Train"

    var epoch: HTMLInputElement
    var batchSize: HTMLInputElement

    function startTraining() {
        const alpha = new AlphaPredictModelTrainer(parseInt(epoch.value), parseInt(batchSize.value))

        training = true
        trainButtonText = "Training..."

        alpha.train((model) => {
            model.save('downloads://alpha-predict')
            console.log(model.predict(tf.tensor2d([1.01], [1, 1])).dataSync())
        })
    }
</script>

<style>
    .inline {
        display: flex;
    }
</style>

<div class="inline">
    <p>Epoch:</p>
    <input type="number" bind:this={epoch} value="100"/>
</div>

<div class="inline">
    <p>Batch Size:</p>
    <input type="number" bind:this={batchSize} value="32"/>
</div>

<button on:click={startTraining} disabled={training}>
    {trainButtonText}
</button>