<script setup lang="ts">

import _ from 'lodash';
import Video from "~/components/Video.vue";

const props = defineProps({
	files: Object
});
const emit = defineEmits(['updateFiles']);
const search = ref('');

const headers = [{
	key: 'name',
}]

const updateFiles = (index, newName) => {
	let result = _.cloneDeep(props.files);
	result[index]['name'] = newName;
	emit('updateFiles', result);
}

</script>

<template>
	<div>
		<div class="p-3 bg-white">
			<div class="float-left">
				<span class="text-[30px] font-bold">VIDEOS</span>
			</div>
			<div class="float-right w-[300px]">
				<v-text-field
					v-model="search"
					label="Search ..."
					prepend-inner-icon="mdi-magnify"
					variant="outlined"
					hide-details
					single-line
					density="comfortable"
				></v-text-field>
			</div>
			<div class="clear-both"></div>
		</div>

		<v-data-table
			v-model:search="search"
			:headers="headers"
			:items="files"
			class="videos-table w-full"
			:items-per-page="9"
			hide-default-header
		>
			<template v-slot:item.name="{ item, index }">
				<v-card class="my-2" elevation="2" rounded>
					<Video
						:file="item"
						:setting="{
					        height: '200px'
						}"
						@update-file="(newName) => updateFiles(index, newName)"
					></Video>
				</v-card>
			</template>
		</v-data-table>
	</div>
</template>

<style>
.videos-table table tbody {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;
}

.videos-table table tbody tr {
	display: flex;
	height: 100%;
}

.videos-table table tbody tr.v-data-table-rows-no-data {
	width: 300%;
}

.videos-table table tbody tr.v-data-table-rows-no-data td {
	padding: 32px !important;
}

.videos-table table tbody tr td {
	width: 100%;
	height: 100% !important;
	border: 0 !important;
	padding: 0 !important;
	margin-bottom: 16px !important;
}

.videos-table table tbody tr td .v-card {
	box-shadow: unset !important;
	border-radius: 0 !important;
	margin: 0 !important;
}
</style>
