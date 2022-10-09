# Setup Cypress testing suite on your machine

**Note**: The following steps assumes that you are reading this on Github. If you are reading this on Bitbucket, please [head over to github](https://github.com/opencolleges/oc-e2e-tests) before you start the setup.

## Pre-requisites
### You must
- [x] have Node developement environment (> 14.x) setup on your machine.
- [x] have access to the [repository on github](https://github.com/opencolleges/oc-e2e-tests).
- [x] have [setup your machine's SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

***

## Steps to follow

- ### Clone the repository
	Clone the repository in location of your choice
  ```
  git clone git@github.com:opencolleges/oc-e2e-tests.git
  ```

- ### Installing node modules
	Switch to the root directory and install the dependencies
	```
	cd oc-e2e-tests/
	npm install
	```

- ### Create an environment variable file
	The following command creates an environment variable file named `cypress.env.json` (gitignored) that would contain the passwords to the users specified in [login_credentials.json](cypress/fixtures/login_credentials.json). Contact one of the developers if you do not have the password.
	```
	echo '{
	"password_mich": "<password for the user Mich>"
	}' > cypress.env.json
	```

- ### [Optional] Add second remote to this repository.
	This is an optional step that needs to be followed only if you contributing code to this repository. Ignore this step you are setting Cypress just to test locally.
  ```bash
  git remote set-url --add --push origin git@bitbucket.org:opencollegeseduau/oc-e2e-tests.git 
  ```

***
**You should now be able to run Cypress on your local machine by doing the following**
```
npm run cypress
```

:tada: Happy Testing!! :tada:
