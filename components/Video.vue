<script setup lang="ts">

import {VideoPlayer} from "@videojs-player/vue";
import axios from "axios";
import {ref} from "vue";

const props = defineProps({
	file: Object,
	setting: {
		default: () => {
			return {}
		},
		type: Object
	}
});

const emit = defineEmits(['updateFile', 'openDetails']);

const menu = ref(false);
const name = ref(props.file.name || '');

const rename = async () => {
	if (!props.file) return null;
	try {
		const {data} = await axios.post('/api/rename', {
			oldName: props.file.name,
			newName: name.value.includes('.mp4') ? name.value : `${name.value}.mp4`
		});

		if (data && data.success) {
			menu.value = false;
			emit('updateFile', name.value);
		}
	} catch (error) {
		console.log(error)
	}
};
</script>

<template>
	<div
		class="w-full mb-4"
		v-if="file && Object.keys(file).length > 0"
	>
		<video-player
			class="w-full min-h-[200px] max-h-[600px]"
			:src="`/files/${file['name']}`"
			poster="/photos/bg-image.jpg"
			controls
			:loop="true"
			:muted="true"
			:height="setting.height ? setting.height :  400"
		/>
		<template v-if="!setting || !setting.hideLabel">
			<p class="mt-2 mb-2 text-center truncate">{{ file['name'] }}</p>
			<p class="text-center">
				<v-menu
					v-model="menu"
					content-class="w-[500px]"
					:close-on-content-click="false"
				>
					<template v-slot:activator="{ props }">
						<v-btn
							class="mr-2"
							variant="outlined"
							flat
							@click="emit('openDetails', file)"
						>
							Details
						</v-btn>
						<v-btn
							color="primary"
							v-bind="props"
							variant="outlined"
							flat
						>
							Edit
						</v-btn>
					</template>
					<v-list>
						<v-list-item>
							<v-form @submit.prevent="rename">
								<v-text-field
									v-model="name"
									label="New value"
								></v-text-field>
								<v-btn flat class="mt-2" type="submit" color="primary" block>Submit</v-btn>
							</v-form>
						</v-list-item>
					</v-list>
				</v-menu>
			</p>
		</template>
	</div>
</template>

<style scoped>

</style>
