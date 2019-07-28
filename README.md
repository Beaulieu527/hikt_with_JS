hikt_with_js
A hikeing trail tracking web application with RESTful routes so you can keep track of all your favorite hikes.

Getting Started
Clone the repository down to your local environment using git clone <repo>

In terminal, do a bundle install command to install dependencies.

$ bundle install
Create the database using 'rake db:migrate' command.

$ rake db:migrate
Start up the app with rails s command

$ rails s
Navigate to http://localhost:3000 in your browser.

Create a user by signing up either with email and password or omniauth through your GitHub account.

$ rake db:seed
Seed data should now be displaying when you navigate to http://localhost:3000 in your browser.

Enjoy! 🙂

Built With
Ruby on Rails
ActiveRecord
devise
jQuery
Contributing

Authors
Justin Beaulieu - Initial work - https://github.com/beaulieu527

Contributing
Please read [CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

License
This project is licensed under the MIT License - see the LICENSE.md file for details