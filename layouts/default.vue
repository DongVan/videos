<script setup lang="ts">

</script>

<template>
	<div class="wrapper-box">
		<div class="shadow-sm">
			<div class="container flex p-6 ga-12 leading-[42px] m-auto">
				<NuxtLink to="/">HOME</NuxtLink>
				<NuxtLink to="/about">ABOUT</NuxtLink>
				<NuxtLink to="/about">ARTICLE</NuxtLink>
			</div>
		</div>
		<div class="main">
			<slot/>
		</div>
	</div>
</template>

<style scoped>

</style>
