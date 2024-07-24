<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import 'video.js/dist/video-js.css';
import ListVideos from "~/components/ListVideos.vue";

const route = useRoute();
const files = ref([]);
const componentIndex = ref(0);

const getFiles = async () => {
	const {data} = await axios.get('/api/files', {
		params: {
			folder: route.query.q
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
		<div class="ga-4 text-[14px]">
			<ListVideos
				:key="componentIndex"
				:files="files"
				@update-files="(val) => { files = val }"
			></ListVideos>
		</div>
	</div>
</template>

<style>

</style>
