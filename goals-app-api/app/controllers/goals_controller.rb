class GoalsController < ApplicationController

		before_action :set_goal, only: [:show, :edit, :update, :destroy]
		
		def index
			@goals = Goal.all
		end
	
		def new
			@goal = Goal.new
		end
	
		def create
			@goal = Goal.create(goal_params)
			redirect_to goal_path(@goal)
		end
	
		def edit
			
		end
	
		def update
			@goal.update(goal_params)
			redirect_to goal_path(@goal)
		end
	
		def show
			
		end
	
		def destroy
			@goal.destroy
			redirect_to goals_path
		end
	
		private
	
		def goal_params
			params.require(:goal).permit(:goalname, :deadline, :importance)
		end
	
		def set_goal
			@goal = Goal.find_by_id(params[:id])
		end
	
end