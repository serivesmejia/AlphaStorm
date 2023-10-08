<script lang="ts">
    import KPredictionPlot from "$lib/plot/helios/KPredictionPlot.svelte"
    import * as tf from "@tensorflow/tfjs"
    import { model } from "$lib/alphapredict/model"
    import KPlot from "$lib/plot/helios/KPlot.svelte";

    var G1Visible = true
    var G1Visible = true
    var G2Visible = true
    var G3Visible = true
    var G4Visible = true
    var G5Visible = true

    function pepe() {
        G1Visible = false
    
    }
    
    function Leo() {
        G1Visible = false
        G2Visible = false
        G3Visible = false
        G4Visible = false
        G5Visible = false
    }
</script>

