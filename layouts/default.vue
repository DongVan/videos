<script setup lang="ts">

import MobileIcon from "~/components/layouts/MobileIcon.vue";
</script>

<template>
	<div class="wrapper-box">
		<div class="shadow-sm">
			<div class="relative container flex p-2 ga-12 leading-[42px] m-auto">
<!--				<MobileIcon></MobileIcon>-->
				<NuxtLink to="/" class="m-auto">
					<v-img src="/photos/icon.png" width="40" height="40"></v-img>
				</NuxtLink>
			</div>
		</div>
		<div class="main">
			<slot/>
		</div>
	</div>
</template>

<style scoped>

</style>
