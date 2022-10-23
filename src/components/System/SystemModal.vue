<template>
  <BModal v-model="isShow" title="SystemModal" size="xl" lazy scrollable no-close-on-backdrop>
    <template #default>
      <div class="border border-success p-3">
        <h2>Modal</h2>
        <div>{{model}}</div>
        <Form :model="model" class="m-3" />
      </div>
    </template>

    <template #modal-footer>
      <div class="align-right">
        <BButton variant="success" @click="hide">OK</BButton>
      </div>
    </template>
  </BModal>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { cloneDeep } from 'lodash-es'
import Form from '@/components/System/Form'

const systemModule = createNamespacedHelpers('system')

export default {
	name: 'SystemModal',
	components: {
		Form
	},
	computed: {
		...systemModule.mapGetters(['system'])
	},
	watch: {
		isShow: {
			immediate: true,
			handler(_isShow) {
				if (!_isShow) {
					// this.$log.debug('[ModalBan _isShow]', _isShow);
					this.model = {}
				}
			}
		},
		system: {
			handler(newValue) {
				this.model = cloneDeep(newValue)
			}
		}
	},
	data() {
		return {
			isShow: false,
			model: {}
		}
	},
	methods: {
		show() {
			this.isShow = true
		},
		hide() {
			this.isShow = false
		}
	}
}
</script>
<style>

</style>
