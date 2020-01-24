class BasePageManager {
	constructor(container, baseAdapter){
		this.container = container
		this.baseAdapter = baseAdapter
	}

	render() {
		this.container.innerHTML = this.content.pageHTML
		this.bindDOMElements()
		this.bindEventListeners()
	}
}