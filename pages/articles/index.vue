<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import 'video.js/dist/video-js.css';

const route = useRoute();

const files = ref([]);

const getFiles = async () => {
	const {data} = await axios.get('/api/files', {
		params: {
			folder: route.params.id
		}
	});
	files.value = data;
};

onMounted(() => {
	getFiles();
});
</script>

<template>
	<div class="container py-[15px]">
		<div class="grid grid-cols-3 ga-4 text-[14px]">
			<ListVideos
				:files="files"
				@update-files="(val) => files.value = val"
			></ListVideos>
		</div>
	</div>
</template>

<style scoped>

</style>
