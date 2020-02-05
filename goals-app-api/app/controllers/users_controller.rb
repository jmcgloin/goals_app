class UsersController < ApplicationController
	def show
		user = User.find_by(email: user_params[:email])
		render json: user
	end

	def index
		render json: current_user
	end

	private

	def user_params
		params.require(:user).permit(:username, :email)
	end
end