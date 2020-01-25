class HomePage {
	constructor(user) {
		this.username = user.username
		this.goals = user.goals
	}
	//this will show the user profile  and give  options to interact with goals and steps
	get pageHTML() {
		return `
			<div id="user-profile" class="mx-8">
				<h1>Welcome, ${this.username},</h1>
			</div>
			<div id="current-goals" class="mx-8">
				<div id="goal-display">
						${this.listGoals()}
				</div>
			</div>
		`
	}

	listGoals() {
		const goalListHTML = this.goals.map(goal => {
			return `<div class="mx-8 flex justify-around">
								<div data-goal-id=${goal.id} class="goal">${goal.goalname}</div>
								<div>${goal.deadline}</div>
								<div><input type="checkbox" data-goal-id=${goal.id} class="markCompletedChecks" /></div>
							</div>`
		}).join('')

		return `<h2>Here are your goals</h2>
						<div id="goals" class="flex-col">
							${goalListHTML}
						</div>
						<div id="goals-buttons" class="mx-8 flex justify-around">
							<button id="new-goal-button" class=".w-1/3">Add a New Goal</button>
						</div>
						`
	}

	get newGoalForm() {
		const goalPlaceholders = ['Learn to ...', 'Make a ...', 'Start writing ....', 'Finish doing ...']
		const goalPlaceholder = goalPlaceholders[Math.floor(Math.random() * goalPlaceholders.length)]
		console.log(goalPlaceholder)
		return `
			<div class="w-full">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="new-goal-form">
        <h2 class="block text-gray-700 text-md font-bold text-center">What's your goal?</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="goalname">
            Goal Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="goalname" name="goalname" type="text" placeholder=${goalPlaceholder} required autocomplete='off'>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="deadline">
            Deadline
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deadline" name="deadline" type="text" placeholder="2021-01-01" required autocomplete='off'>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="importance">
            Importance
          </label>
          ${this.importanceOptionList()}
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add It
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="new-goal-cancel-button">
            Cancel
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2019 GoalMinder All rights reserved.
      </p>
    </div>`

	}

	importanceOptionList() {
		const options = [...Array(10).keys()].map(num => `<option value="${num + 1}">${num + 1}</option>`).join('')
		return `<select name="importance" id="importance">
							${options}
						</select>`
	}
}