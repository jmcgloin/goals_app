class HomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = null
		this.adapter = new HomeAdapter(baseAdapter)
		this.handleGetUserProfile()
	}

	bindDOMElements() {
		// this.goals = document.getElementsByClassName('goal')
		this.newGoalButton = document.getElementById('new-goal-button')
		this.markCompletedChecks = document.getElementsByClassName('completed-check')
		this.goalDisplay = document.getElementById('goal-display')
	}

	bindEventListeners() {
		Array.from(this.markCompletedChecks).forEach(check => check.addEventListener('click', this.handleMarkStepCompleted.bind(this)))
		this.newGoalButton.addEventListener('click', this.handleShowNewGoalForm.bind(this))
	}

	handleCreateNewGoal() {
		event.preventDefault()
		const data = new FormData(event.target)
		event.target.reset()
		// debugger
		const res = this.adapter.createNewGoal({
			goal: {
				goalname: data.get("goalname"),
				deadline: data.get("deadline"),
				importance: data.get("importance")
			}
		})
		.then(res => res.json())
		.then(resj => {
			this.baseAdapter.userProfile.goals = resj
			this.content.goals = resj
			// console.log(this)
			this.render()
		})
	}

	handleShowNewGoalForm() {
		this.goalDisplay.innerHTML = this.content.newGoalForm
		// this.newGoalForm = 
		document.getElementById('new-goal-form').addEventListener('submit', this.handleCreateNewGoal.bind(this))
		document.getElementById('new-goal-cancel-button').addEventListener('click', this.render.bind(this))
	}

	// handleMarkStepCompleted() {

	// }

	handleGetUserProfile() {
		const res = this.adapter.getUserProfile()
			.then(res => res.json())
			.then(rj => {
				this.baseAdapter.userProfile = rj
				this.content = new HomePage(this.baseAdapter.userProfile)
				this.render()
			})
	}
}