class InfoDisplay {
	constructor(message, type) {
		this.container = document.getElementById('info-container')
		this.content = new InfoBanner(message, type)
	}

	render() {
		this.container.innerHTML = this.content.pageHTML
		setTimeout(() => this.container.innerHTML = "", 5000)
	}
}