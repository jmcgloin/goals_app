# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

testUser = User.create(username: 'Test', email: 't@est.com', password: 'asdfasfd')

10.times {
	Goal.create(
		goalname: "Find #{Faker::JapaneseMedia::SwordArtOnline.item}",
		deadline: '2020-01-24',
		importance: rand(1..10),
		user: testUser
	)
}