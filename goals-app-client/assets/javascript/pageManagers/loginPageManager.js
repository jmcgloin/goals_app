class LoginPageManager extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new LoginForm()
		this.adapter = new LoginAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('login-form')
		this.inOutLink = document.getElementById('in-out-link')
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
			.then(r => r.json())
			.then(rj => {
				if(rj.errors || rj.error) return;
				this.inOutLink.innerHTML = "Log Out"
				if(rj) new HomePageManager(this.container, this.baseAdapter)
		})
	}
}
