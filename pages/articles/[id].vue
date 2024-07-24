<script setup lang="ts">
import {ref} from "vue";
import 'video.js/dist/video-js.css'
import Video from "~/components/Video.vue";
import axios from "axios";

const route = useRoute()

const folder = ref(route.params.id);
const param = ref(route.query.q);

const file = ref([]);

const breadcrumbs =  [
	{
		title: 'Home',
		disabled: false,
		href: '/',
	},
	{
		title: 'Articles',
		disabled: false,
		href: `/articles`,
	},
	{
		title: param.value,
		disabled: true,
		href: '',
	},
];

const getFile = async () => {
	const {data} = await axios.get('/api/files', {
		params: {
			folder: folder.value
		}
	});

	file.value = data.find(record => record['sortName'] === param.value);
};

onMounted(() => {
	getFile();
});

</script>

<template>
	<div class="container">
		<v-breadcrumbs :items="breadcrumbs">
			<template v-slot:divider>
				<v-icon icon="mdi-menu-right"></v-icon>
			</template>
		</v-breadcrumbs>

		<Video
			class="w-full h-[400px]"
			:file="file"
			:setting="{
				hideLabel: true
			}"
		></Video>
	</div>
</template>

<style scoped>

</style>
