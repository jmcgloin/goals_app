class RegistrationsController < Devise::RegistrationsController
	respond_to :json

	def create
		begin
			super
		rescue ActiveRecord::RecordInvalid => invalid
			binding.pry()
			render_resource(e.record)
		rescue ActiveRecord::RecordNotUnique => e
			err = Openstruct.new(errors: {user: 'Already exists'})
			validation_error(err)
		rescue ActiveRecord::Rollback => e
			binding.pry()

			
		end
	end
end