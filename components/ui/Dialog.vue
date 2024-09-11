<script setup lang="ts">
import Video from "~/components/Video.vue";

const dialog = defineModel('dialog');
defineProps({
	item: Object
});
</script>

<template>
	<v-dialog
		v-model="dialog"
		transition="dialog-bottom-transition"
		fullscreen
	>
		<v-card class="position-relative">
			<v-btn
				class="position-absolute top-0 right-0 z-1000 bg-[rgba(255,255,255,0.1)]"
				icon="mdi-close"
				variant="icon"
				@click="dialog = false"
				color="#fff"
			></v-btn>

			<v-card-text
				class="p-0"
				v-if="item && item.path"
			>
				<template v-if="item.path.indexOf('.mp4') !== -1">
					<Video
						:file="item"
						:setting="{
					        height: 600
						}"
					></Video>
				</template>
				<template v-else>
					<v-img
						width="100%"
						aspect-ratio="16/9"
						cover
						:src="`/files/${item['name']}`"
					></v-img>
				</template>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<style scoped>
	.p-0 {
		padding: 0 !important;
	}

	.z-1000 {
		z-index: 1000 !important;
	}
</style>