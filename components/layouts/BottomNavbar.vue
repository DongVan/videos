<script setup lang="ts">

</script>

<template>
	<v-bottom-navigation grow :elevation="0">
		<v-btn class="w-[20%]" value="home">
			<v-icon>mdi-home</v-icon>

			<span class="text-[9px] tracking-normal font-bold">Trang chủ</span>
		</v-btn>

		<v-btn class="w-[20%]" value="favorite">
			<v-icon>mdi-heart-outline</v-icon>

			<span class="text-[9px] tracking-normal font-bold">Yêu thích</span>
		</v-btn>

		<v-btn class="w-[20%]" value="plus">
			<v-icon size="32">mdi-plus-circle-outline</v-icon>
		</v-btn>

		<v-btn class="w-[20%]" value="history">
			<v-icon>mdi-calendar</v-icon>

			<span class="text-[9px] tracking-normal font-bold">History</span>
		</v-btn>
		<v-btn class="w-[20%]" value="profile">
			<v-icon>mdi-account-circle</v-icon>

			<span class="text-[9px] tracking-normal font-bold">Profile</span>
		</v-btn>
	</v-bottom-navigation>
</template>

<style scoped>

</style>
