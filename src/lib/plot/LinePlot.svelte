<script lang="ts">
	import Chart, { type ChartData } from 'chart.js/auto'
    import { onMount } from 'svelte';

	export var data: ChartData
	export var width = '800px'

	let canvas: HTMLCanvasElement;

	onMount(() => {
		new Chart(canvas, {
      		type: 'line',
      		data: data
		});
	})
</script>

<style>
	.graph {
		width: 100%;
		height: 100%;
	}
</style>

<canvas class="graph" bind:this={canvas}/>