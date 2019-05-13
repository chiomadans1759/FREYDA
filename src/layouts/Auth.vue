<template>
	<main id="auth-layout">
		<router-view />
	</main>
</template>

<script>
export default {
	name: "auth-layout"
}
</script>

<style scoped>
#auth-layout {
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	background-color: #578a8d;
}
</style>

