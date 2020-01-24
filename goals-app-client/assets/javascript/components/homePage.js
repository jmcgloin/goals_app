class HomePage {
	constructor(user) {
		console.log(user)
		this.username = user.username
	}
	//this will show the user profile  and give  options to interact with goals and steps
	get pageHTML() {
		return `
			<div id="user-profile" class="mx-8">
				<h1>Welcome, ${this.username},</h1>
			</div>
			<div id="current-goals" class="mx-8">
				<h2>Here are your goals</h2>
				<div id="goalDisplayTable">
					<div id="goals" class="flex-col">
						
					</div>
					<div id="checkboxes" class="flex-col">

					</div>
				</div>
			</div>
			<div id="goals-buttons" class="mx-8 flex justify-around">
				${this.viewAddGoals()}
			</div>
		`
	}

	listGoals() {
		
	}

	listCheckboxes() {

	}

	newGoalForm() {
		return `
			<div class="w-full">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="new-goal-form">
        <h2 class="block text-gray-700 text-md font-bold text-center">Welcome!</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="goalname">
            Goal Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="goalname" name="goalname" type="text" placeholder="Learn to ..." required autocomplete='off'>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="deadline">
            Deadline
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deadline" name="deadline" type="text" placeholder="2021-01-01" required autocomplete='off'>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" required>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2019 GoalMinder All rights reserved.
      </p>
    </div>`

	}

	viewAddGoals() {
		return `
			<button id="show-all-goals" class=".w-1/3">Show All Goals</button>
			<button id="new-goal-button" class=".w-1/3">Add a New Goal</button>
		`
	}


}


 // t.string "goalname"
 //    t.string "deadline"
 //    t.integer "importance"


	// this.goals = document.getElementsByClassName('goal')
	// 	this.newGoalButton = document.getElementById('new-goal-button')
	// 	this.markCompletedChecks = document.getElementsByClassName('completed-check')
	// 	this.newGoalForm = document.getElementById('new-goal-form')