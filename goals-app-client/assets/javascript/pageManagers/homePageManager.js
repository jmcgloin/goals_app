class HomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.userProfile = null
		this.content = null
		this.adapter = new HomeAdapter(baseAdapter)
		this.handleGetUserProfile()
	}

	bindDOMElements() {
		this.goals = document.getElementsByClassName('goal')
		this.newGoalButton = document.getElementById('new-goal-button')
		this.markCompletedChecks = document.getElementsByClassName('completed-check')
		this.newGoalForm = document.getElementById('new-goal-form')
		this.showAllGoals = document.getElementById('show-all-goals')
		this.goalDisplay = document.getElementById('goal-display')
	}

	bindEventListeners() {
		Array.from(this.markCompletedChecks).forEach(check => check.addEventListener('click', this.handleMarkStepCompleted.bind(this)))
		this.newGoalButton.addEventListener('click', this.handleShowNewGoalForm.bind(this))
		// this.newGoalForm.addEventListener('submit', handleCreateNewGoal)
		// this.showAllGoals.addEventListener('click', handleShowAllGoals)
	}

	handleCreateNewGoal() {
		//will POST new goal 
	}

	handleShowNewGoalForm() {
		this.goalDisplay.innerHTML = this.content.newGoalForm
	}

	// handleShowAllGoals() {

	// }

	// handleMarkStepCompleted() {

	// }

	handleGetUserProfile() {
		const res = this.adapter.getUserProfile()
			.then(res => res.json())
			.then(rj => {
				this.baseAdapter.userProfile = rj
				console.log("hpm res: ", rj)
				this.content = new HomePage(this.baseAdapter.userProfile)
				this.render()
			})
	}
}