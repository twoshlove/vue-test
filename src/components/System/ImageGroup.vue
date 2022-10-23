<template>
  <div class="border border-danger p-3">
    <h2>ImageGroup</h2>
    <div>internalImages</div>
    <div>{{internalImages}}</div>
    <div class="mt-3">
			<div v-for="(image, index) in internalImages" :key="image.key">
				<BInput v-model="internalImages[index].value" class="mb-3" />
			</div>
    </div>
		<div class="mt-5">
			<div v-for="(image, index) in images" :key="image.key">
				<BInput v-model="images[index].value" class="mb-3" />
			</div>
		</div>

  </div>
</template>
<script>
import { cloneDeep } from 'lodash-es'

export default {
	name: 'ImageGroup',
	props: {
		images: {
			type: Array,
			default: () => []
		}
	},
	watch: {
		images: {
			deep: true,
			handler(newValue) {
				console.log('[watch images]')
				this.internalImages = cloneDeep(newValue)
				// this.internalImages = newValue
				// this.internalImages = this.images
			}
		}
	},
	data() {
		return {
			internalImages: []
		}
	}
}
</script>
<style>

</style>
