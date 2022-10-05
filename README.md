# Setup Cypress testing suite on your machine

## Pre-requisites
### You must
- [x] have access to the repository on [github](https://github.com/opencolleges/oc-e2e-tests).
- [x] have [setup your machine's SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

***

## Steps to follow

- ### Clone the repository
  ```
  git clone git@github.com:Open-Colleges/OCA.git
  ```

- ### Install node modules
	```
	npm i
	```

- ### Create an environment variable file
	This creates an environment variable file named `cypress.env.json` that contains all the passwords to the users specified `cypress/fixtures/login_credentials.json`. Contact one of the developers if you do not have the password.
	```
	echo '{
  	"password_mich": "<password for the user>"
	}' > cypress.env.json
	```

- ### Add second remote to this repository (Only if you are going to push new code) 
  ```bash
  git remote set-url --add --push origin git@bitbucket.org:opencollegeseduau/oc-e2e-tests.git 
  ```

***
**You should be able to run Cypress on your local machine**.

You can start runnning Cypress by running the following
```
npm run cypress
```

:tada: Happy Testing!! :tada: