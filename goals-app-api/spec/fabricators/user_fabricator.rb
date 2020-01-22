Fabricator(:user) do
	username Faker::Games::WorldOfWarcraft.hero
	email Faker::Internet.email
	password Faker::Games::Pokemon.name
end