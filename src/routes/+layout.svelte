<script>
	import { base } from '$app/paths';
</script>

<div class="cover">
	<nav class="nav">
		<a href={`${base}/`}>Home</a>
		<a href={`${base}/learn`}>Learn</a>
		<a href={`https://github.com/LonelyCpp/url-visualizer`} target="_blank">Github</a>
	</nav>
	<slot></slot>
</div>

<style>
	.cover {
		font-family: Arial, Helvetica, sans-serif;
	}
	.nav {
		display: flex;
		align-items: center;
		padding: 1rem;
		background-color: #fafff5;
	}

	.nav a {
		padding: 0.5rem;
		text-decoration: none;
		color: black;
		text-decoration: underline;
		text-underline-offset: 8px;
	}
</style>
