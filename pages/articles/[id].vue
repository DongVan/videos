<script setup lang="ts">
import {ref} from "vue";
import 'video.js/dist/video-js.css'
import Video from "~/components/Video.vue";
import axios from "axios";

const route = useRoute()

const folder = ref(route.params.id);
const param = ref(route.query.q);

const file = ref([]);

const getFile = async () => {
	const {data} = await axios.get('/api/files', {
		params: {
			folder: folder
		}
	});
	file.value = data.find(record => record['name'] === param);
};

onMounted(() => {
	getFile();
});

</script>

<template>
	<div>
		<Video
			:file="file"
		></Video>
	</div>
</template>

<style scoped>

</style>
