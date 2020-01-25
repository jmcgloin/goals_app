class WelcomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = new WelcomePage() //this will be a component w/ options to signup or login
	}

	bindDOMElements() {
		this.buttons = document.getElementsByTagName('button')
		this.loginLink = document.getElementById('login-link') || document.getElementById('signup-link')
		this.inOut = document.getElementById('in-out')
	}

	bindEventListeners() {
		Array.from(this.buttons).forEach(button => {
			button.id == "signup-button" ? button.addEventListener('click', this.handleSignup.bind(this)) : button.addEventListener('click', this.handleLogin.bind(this))
		})
		this.loginLink.addEventListener('click', this.handleLogin.bind(this))
	}

	loadNextPage(page) {
		let nextPage = new page(this.container, this.baseAdapter)
		nextPage.render()
		nextPage = null
	}

	handleLink(id, html, callback = null) {
		const link = this.loginLink.cloneNode(false)
		link.setAttribute('id', id)
		link.innerHTML = html
		this.inOut.innerHTML = link.outerHTML
		this.loginLink = document.getElementById(id)
		this.loginLink.addEventListener('click', callback);
	}

	handleSignup() {
		console.log('signup')
		this.handleLink('login-link', 'Log In', this.handleLogin.bind(this))
		this.loadNextPage(SignupPage)
	}

	handleLogin() {
		console.log('login')
		this.handleLink('signup-link', 'Sign Up', this.handleSignup.bind(this))
		this.loadNextPage(LoginPage)
	}
}