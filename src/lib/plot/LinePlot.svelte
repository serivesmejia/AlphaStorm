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

		console.log(data)
	})
</script>

<div style="width: ${width}px;"><canvas bind:this={canvas}></canvas></div>