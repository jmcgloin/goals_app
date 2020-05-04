# Goals

Goal manager app.  Ruby api with JS front end.

## Getting Started

Clone and install gems:
```
git clone
bundle install
```

### Prerequisites

You will need the following

```
Rails  6+
Database (sqlite used)
The server hosting the front end  for the origin in CORS
```

### Installing

Migrate. You may need to setup your database depending on what db you're using.
```
rails db:migrate 
```
If migrations fail, you may need to comment out two options in `goals-app/goals-app-api/app/models/user.rb` then uncomment them after successful migration.  These options are
```
:jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
```
Set the BASEURL in `goals-app/goals-app-client/assets/javascript/components/app.js` to reflect the api server.

## Running the tests

Tests are run with Rspec.  Run in the terminal using `rspec`

## Deployment

Ensure CORS settings are appropriate for you servers.  The database may need to be changed as, for instance, Heroku doesn't use sqlite

## Built With
* [Rails 6](https://rubygems.org/gems/rails/versions/6.0.2.1) - The API framework used
* [Devise](https://rubygems.org/gems/devise/versions/4.7.1) - For authentication
* [Devise-JWT](https://rubygems.org/gems/devise-jwt/versions/0.6.0) - User authorization using web tokens
* [Rack-CORS](https://rubygems.org/gems/rack-cors/versions/1.1.1) - CORS Middleware
* [TailwindCSS](https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css) - CSS framework
* [SQLite3](https://rubygems.org/gems/sqlite3/versions/1.4.2) - Databse

## Contributing

Please visti (https://github.com/jmcgloin/goals_app) to contribute.


## Authors

* **Jason McGloin** - *The whole thing* - [My GitHub](https://github.com/jmcgloin/goals_app)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Michael Doherty
* Micah Shute
* Adam Mazur - [Blog post](https://medium.com/@mazik.wyry/rails-5-api-jwt-setup-in-minutes-using-devise-71670fd4ed03)
* Nandhogopal Ezhilmaran - [Blog post](https://medium.com/@nandhae/2019-how-i-set-up-authentication-with-jwt-in-just-a-few-lines-of-code-with-rails-5-api-devise-9db7d3cee2c0)
* Heartcombo and Devise docs - [Docs](https://github.com/heartcombo/devise)
* Waiting-for-dev and Devise-JWT docs - [Docs](https://github.com/waiting-for-dev/devise-jwt)
