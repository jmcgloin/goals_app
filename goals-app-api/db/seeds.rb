# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jason = User.create(username: 'Jason', email: 'j@son.com', password: 'password')

proj = Goal.create(goalname: 'Project', deadline: '2020-01-24', importance: 10, user: jason)
step1 = Step.create(stepname: 'backend', step_number: 1, completed: 0, goal: proj)
step2 = Step.create(stepname: 'frontend', step_number: 2, completed: 0, goal: proj)
