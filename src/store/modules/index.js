const requireModule = require.context('.', true, /^((?!\.unit\.).)*.index\.js$/)
const root = {modules: {}}

requireModule.keys().forEach(fileName => {
	if (fileName === './index.js') return
	const modulePath = fileName
		.replace(/^\.\//, '')
		.replace(/\.\w+$/, '')
		.split(/\//)[0]
	root.modules[modulePath] = requireModule(fileName).default
})

export default root.modules
