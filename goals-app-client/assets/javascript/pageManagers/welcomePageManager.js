class WelcomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = new WelcomePage() //this will be a component w/ options to signup or login
	}

	bindDOMElements() {
		this.buttons = document.getElementsByTagName('button')
		console.log(this.buttons)
		this.loginLink = document.getElementById('login-link') || document.getElementById('signup-link')
	}

	bindEventListeners() {
		Array.from(this.buttons).forEach(button => {
			button.id == "signup-button" ? button.addEventListener('click', this.handleSignup.bind(this)) : button.addEventListener('click', this.handleLogin.bind(this))
		})
		this.loginLink.addEventListener('click', this.handleLogin.bind(this))
	}

	loadNextPage(page) {
		// const nextPage = event.target.id == "signup-button" || event.target ? new SignupPage(this.container, this.baseAdapter) : new LoginPage(this.container, this.baseAdapter)
		// nextPage.render()
		// if(["signup-button", "signup-link"].includes(even.target.id)) {
		// 	const nextPage = new SignupPage(this.container, this.baseAdapter)
		// } else {
		// 	const nextPage = new LoginPage(this.container, this.baseAdapter)
		// }
		const nextPage = new page(this.container, this.baseAdapter)
		nextPage.render()
		nextPage = null
	}

	handleSignup() {
		this.loginLink.removeEventListener('click', this.handleSignup.bind(this))
		this.loginLink.innerHTML = "Log In"
		this.loginLink.setAttribute('id', 'login-link')
		this.loginLink.addEventListener('click', this.handleLogin.bind(this))
		this.loadNextPage(SignupPage)
	}

	handleLogin() {
		this.loginLink.removeEventListener('click', this.handleLogin.bind(this))
		this.loginLink.innerHTML = "Sign Up"
		this.loginLink.setAttribute('id', 'signup-link')
		this.loginLink.addEventListener('click', this.handleSignup.bind(this))
		this.loadNextPage(LoginPage)
	}
}