<template>
  <div class="border border-primary">
		<SystemModal
			ref="systemModal"
		/>
		<h1>List Page</h1>
		<BButton variant="primary" @click="onClickShowModal">
			Call
		</BButton>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import SystemModal from '@/components/System/SystemModal'

const systemModule = createNamespacedHelpers('system')

export default {
	name: 'List',
	components: {
		SystemModal
	},
	computed: {
		...systemModule.mapGetters(['system'])
	},
	data() {
		return {

		}
	},
	methods: {
		...systemModule.mapActions(['getSystem']),
		onClickShowModal() {
			this.getSystem()
			this.$nextTick(() => {
				this.$refs['systemModal'].show()
			})
		}
	}
}
</script>
<style>

</style>
