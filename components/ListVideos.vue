<script setup lang="ts">

import _ from 'lodash';
import Video from "~/components/Video.vue";
import Dialog from "~/components/ui/Dialog.vue";

const props = defineProps({
	files: Object
});
const emit = defineEmits(['updateFiles']);
const search = ref('');

const headers = [{
	key: 'name',
}];

const updateFiles = (index, newName) => {
	let result = _.cloneDeep(props.files);
	result[index]['name'] = newName;
	emit('updateFiles', result);
};

const dialog = ref(false);
const selected = ref({});

const openDetail = (item) => {
	dialog.value = true;
	selected.value = item;
}

</script>

<template>
	<div>
		<div class="w-full mt-1 mb-3">
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

		<v-data-table
			v-model:search="search"
			:headers="headers"
			:items="files"
			class="videos-table w-full"
			:items-per-page="20"
			hide-default-header
			width="100%"
		>
			<template v-slot:item.name="{ item, index }">
				<v-card class="my-2">
					<template v-if="item.path.indexOf('.mp4') !== -1">
						<Video
							:file="item"
							:setting="{
						        height: 200
							}"
							@update-file="(newName) => updateFiles(index, newName)"
							@open-details="openDetail"
						></Video>
					</template>
					<template v-else>
						<v-img
							width="100%"
							aspect-ratio="16/9"
							cover
							:src="`/files/${item['name']}`"
							@click="openDetail(item)"
						></v-img>
					</template>
				</v-card>
			</template>
		</v-data-table>
	</div>

	<Dialog v-model:dialog="dialog" :item="selected"></Dialog>
</template>

<style>
.videos-table table tbody {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 12px;
}

.videos-table table tbody tr {
	display: flex;
	height: 100%;
}

.videos-table table tbody tr.v-data-table-rows-no-data {
	width: 200%;
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
