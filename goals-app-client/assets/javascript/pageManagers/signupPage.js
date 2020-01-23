class SignupPage {
	constructor(container){
		this.container = container
		this.content = new SignupForm()
	}

	render() {
		this.container.innerHTML = this.content.pageHTML()
	}
}