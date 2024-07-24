<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import 'video.js/dist/video-js.css'
const route = useRoute()
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
<div>
	123
</div>
</template>

<style scoped>

</style>
