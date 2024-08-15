<script setup lang="ts">
import BottomNavbar from "~/components/layouts/BottomNavbar.vue";
import TopNavbar from "~/components/layouts/TopNavbar.vue";
</script>

<template>
	<div class="wrapper-box">
		<TopNavbar></TopNavbar>

		<div class="main">
			<slot/>
		</div>

		<BottomNavbar></BottomNavbar>
	</div>
</template>

<style scoped>

</style>
