class HomeController < ApplicationController
	before_action :authenticate_user!
	def index
		render json: { message: 'Reach you goals'}
	end

	def user_profile
		user = current_user
		render json: user, include: :goals
	end
end