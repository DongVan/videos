<script setup lang="ts">

import _ from 'lodash';
import Video from "~/components/Video.vue";

const props = defineProps({
	files: Object
});
const emit = defineEmits(['updateFiles']);

const updateFiles = (index, newName) => {
	let result = _.cloneDeep(props.files);
	result[index]['name'] = newName;
	emit('updateFiles', result);
}

</script>

<template>
	<template v-for="(file , index) in files">
		<div v-if="file.name.includes('.mp3')">
			<audio controls>
				<source :src="`/files/${file['name']}`" type="audio/mp4"/>
			</audio>
		</div>
		<Video
			:file="file" v-else-if="file['name'].includes('.mp4')"
			@update-file="(newName) => updateFiles(index, newName)"
		></Video>
	</template>
</template>

<style scoped>

</style>
