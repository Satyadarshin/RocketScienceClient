# Rocket Science Client
The presumption is that you are a professional Web developer familliar with basic CLI commands, Git, Node, and (a framework like) Vue.js, evaluating this project as a portfolio piece. 
 
In this document I'll describe how to set up the project locally, and how it is deployed to it&rsquo;s production environment on [Heroku](https://www.heroku.com/).

The **Rocket Science** project is in two parts. First, [Clone the RocketScience parent project](git@github.com:Satyadarshin/RocketScience.git). Change into the resulting `RocketScience` directory, run `npm install`, and then clone this RocketScienceClient repo. Rename the result `client` by running `mv RocketScienceClient/ client/`. You should then `cd client` and also run `npm install`. 

The parent project&rsquo;s .gitignore file specifically excludes the `/client` directory, so remember to commit your changes separately.

To run the project locally you need to do two things:

## Vue 
In `/client`, run `npm run serve`. The Vue project runs under port 8080, and has hot reload. 

## Express.js server
From `/client` you must `cd ../` into the parent directory and run `npm run dev` to activate the custom Express server. This is needed to pull in data from MongoDB. Logins for MongoDB have been redacted from the Git repo, so you will need to [contact me](satyadarshin.com/contact-me/) for the .env file (returned at my discretion).  

## Deployment
For obvious reasons, it&rsquo;s not possible for anyone else to deploy the project to Heroku, however you can run the build process for evaluation purposes if you wish. 

The production files are output by running `npm run build`, which deposits the results to a folder in the parent directory, `/build`. This needs to be committed to the RocketScience `master` branch. From within my Heroku control panel, I can then checkout `master` directly from GitHub, [et voilà](https://mercury-atlas.herokuapp.com/). 

## Unit tests
These are available on both parts of the project from their respective root. Run `npm run test:unit`.