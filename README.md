# Divvy Homework Assignment

This repository provides a starting point for a basic React + GraphQL application.
All of the configuration boilerplate is complete so you can start by writing the code that you want us to see.

Please **fork** this repo to your GitHub account.

## Tasks Completed (Frontend) in `/webapp`
  * Wrote a basic user inerface that allows users to enter, edit, and remove transactions using `useState`.
    * Wrote basic tests for task using `React Testing Library`. Including a snapshot test and tests asserting DOM changes.
  * Provided a pie chart of the spend per category, respectively, interacting with transaction data relation with budget.
  * Added a user experience that showcases my abilities on the front end such as better navigation and improved styling using `emotion-js`.
  
## Project Setup
Install dependencies in root folder <br/>
cd into `/webapp` file, and install dependencies <br/>
**Node** version **11.15.0** is the version required for yarn start to successfully compile localhost. To change Node version, install **Node Version Manager** (`nvm`) by running these commands:
 * `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
 * `export NVM_DIR="$HOME/.nvm"` `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
 * `nvm use 11.15.0`
 
Review [nvm docs](https://github.com/nvm-sh/nvm/blob/master/README.md) for more detail.

Once Node **11.15.0** is setup, run `yarn start` to run localhost. <br/>
Run `yarn test` to run testing file for transactions.

## Instructions

See the [frontend instructions](frontend.md) for frontend focused instructions.

See the [backend instructions](backend.md) for backend focused instructions.


