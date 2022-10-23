import axios from 'axios'

export default {
	async getSystem({commit}) {
		try {
			// const response = await axios.get('https://dummyjson.com/products/1')
			const response = await axios.get('https://mocki.io/v1/df949989-c170-468d-9d26-63129d5b1791')
			const data = response.data
			commit('SET_SYSTEM', data)
			console.log('[response]', response)
		} catch (error) {
			console.log('error')
		}
	}
}
