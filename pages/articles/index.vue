<script setup>

import _ from 'lodash';
import {ref} from "vue";
import axios from "axios";
import 'video.js/dist/video-js.css';
import ListVideos from "~/components/ListVideos.vue";

const route = useRoute();
const files = ref([]);
const folders = ref([]);
const componentIndex = ref(0);
const categorySelected = ref('');

const records = computed(() => {
	return files.value.filter((record) => {
		return categorySelected.value === null || record.folder === categorySelected.value;
	});
});

const getFiles = async () => {
	const {data} = await axios.get('/api/files', {
		params: {
			folder: route.query.q
		}
	});
	files.value = data;
	folders.value = _.uniqBy(data, 'folder') || [];
};

const onSelectItem = (record) => {
	categorySelected.value = record.folder;
};

onMounted(() => {
	getFiles();
});

</script>

<template>
	<div class="container py-[15px]">

		<div class="p-3 text-center">
			<span class="d-inline-block px-4 mb-2 cursor-pointer underline"
			      @click="() => categorySelected = null"
			>All</span>

			<template v-for="record in folders">
				<span
					:class="{
						'd-inline-block px-4 mb-2 cursor-pointer': true,
						'text-[red]': categorySelected && record.folder === categorySelected
					}"
					@click="onSelectItem(record)"
				>{{ record.folder }}</span>
			</template>
		</div>

		<div class="ga-4 text-[14px]">
			<ListVideos
				:key="componentIndex"
				:files="records"
				@update-files="(val) => { files = val }"
			></ListVideos>
		</div>
	</div>
</template>

<style>

</style>
