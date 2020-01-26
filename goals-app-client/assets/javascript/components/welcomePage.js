class WelcomePage {
	get pageHTML() {
		return `
			<div class="flex flex-col h-auto">
				<div class="text-center my-12">
					<h1 class="text-4xl">Welcome to GoalMinder!</h1>
				</div>
				<div class="flex text-center justify-around">
				  <div class="text-center px-4 py-2 m-2">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="login-button">Log In</button>
				  </div>
				  <div class="text-center px-4 py-2 m-2">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="signup-button">Sign Up</button>
				  </div>
			  </div>
			</div>
		`
	}
}