<template>
  <div class="border border-danger p-3">
    <h2>Form</h2>
    <div>internalModel</div>
    <div>{{internalModel}}</div>
    <div class="mt-3">
      <BInput v-model="internalModel.title" class="mb-3" />
      <BInput v-model="internalModel.description" class="mb-3" />
      <div class="p-5">
        <ImageGroup :images="internalModel.images" />
      </div>
    </div>

  </div>
</template>
<script>
import ImageGroup from '@/components/System/ImageGroup'
import { cloneDeep } from 'lodash-es'

export default {
	name: 'Form',
	components: {
		ImageGroup
	},
	props: {
		model: {
			type: Object,
			default: () => ({})
		}
	},
	watch: {
		model: {
			handler(newValue) {
				this.internalModel = cloneDeep(newValue)
			}
		}
	},
	data() {
		return {
			internalModel: {}
		}
	}
}
</script>
<style>

</style>
