class LoginPage extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new LoginForm()
		this.adapter = new LoginAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('login-form')
		this.loginLink = document.getElementById('signup-link')
		this.inOut = document.getElementById('in-out')

	}

	bindEventListeners() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this))
	}

	handleSubmit() {
		event.preventDefault()
		const data = new FormData(event.target)
		const res = this.adapter.login(
			{user:
				{email: data.get("email"), password: data.get("password")}
			}
		)
			.then(res => res.json())
			.then(resj => {
				this.handleChangeLinkToLogOut()
				if(res) (new HomePageManager(this.container, this.baseAdapter))
		})
	}

	handleChangeLinkToLogOut() {
		const link = this.loginLink.cloneNode(false)
		link.setAttribute('id', 'logout-link')
		link.innerHTML = 'Log Out'
		this.inOut.innerHTML = link.outerHTML
		this.loginLink = document.getElementById('logout-link')
		this.loginLink.addEventListener('click', this.handleLogout.bind(this));
		// this.loginLink.innerHTML = "Log Out"
		// this.loginLink.setAttribute('id', 'logout-link')
		// this.loginLink.addEventListener('click', this.handleLogout.bind(this))
	} 

	handleLogout() {
		this.adapter.logout()
		const welcome = new WelcomePageManager(this.container, this.baseAdapter)
		welcome.render()
	}
}