# Setup Cypress testing suite on your machine

## Pre-requisites
### You must
- [x] have access to the repository on [github](https://github.com/opencolleges/oc-e2e-tests) or [bitbucket](https://bitbucket.org/opencollegeseduau/oc-e2e-tests/src/master/).
- [x] have set up your machine's SSH key with your prefered remote
	- [GitHub users](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
  - [Bitbucket users](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/).

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
	#### This creates an environment variable file named `cypress.env.json` that contains all the passwords to the users specified `cypress/fixtures/login_credentials.json`. Contact one of the developers if you do not have the password.
	```
	echo '{
  	"password_mich": "<password for the user>"
	}' > cypress.env.json
	```

- ### (Only if you are going to push new code) Add second remote to this repository 
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