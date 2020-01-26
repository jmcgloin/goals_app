class SignupPageManager extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new SignupForm()
		this.adapter = new SignupAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('signup-form')
		this.inOutLink = document.getElementById('in-out-link')
	}

	bindEventListeners() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this))
	}

	handleSubmit() {
		event.preventDefault()
		const data = new FormData(event.target)
		this.adapter.signup(
			{user:
				{username: data.get("username"), email: data.get("email"), password: data.get("password")}
			}
		)
		.then(r => r.json())
		.then(rj => {
			if(rj.errors) return;
			this.inOutLink.innerHTML = "Log Out"
			new HomePageManager(this.container, this.baseAdapter)
		})
	} 
}