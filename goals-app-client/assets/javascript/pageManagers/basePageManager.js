class BasePageManager {
	constructor(container, baseAdapter){
		this.container = container
		this.baseAdapter = baseAdapter
		this.loginPageManager = null
		this.signupPageManager = null
		this.logoutPageManager = null
	}

	render() {
		this.container.innerHTML = this.content.pageHTML
		this.bindDOMElements()
		this.bindEventListeners()
	}

	// static set

	// static get loginPageManager() {
	// 	 return this.loginPageManager
	// }

	// static get signupPageManager() {
	// 	 return this.signupPageManager
	// }

	// static get logoutPageManager() {
	// 	 return tihs.logoutPageManager
	// }

}