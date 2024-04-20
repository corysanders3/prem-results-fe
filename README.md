# <p align="center">[⚽️ Premier Tally 🏟️](https://prem-results-fe.vercel.app/)</p>
<p align='center' >👆<b>Click the heading to visit the deploy link</b>👆</p>

<p align="center">Web application that is meant to provide knowledge on the English Premier League that includes historic league tables, top moments in the league, and features a game to learn about top goal scorers. It is designed with multiple screen sizes in mind, with responsiveness to accommodate all.</p>

## Preview:
<div align="center">
  <img src="premier-tally.gif" alt="app demo">
</div>
</br>
<p align="center">Technologies Used</p>
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="react badge">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" alt="typescript badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge" alt="css badge">
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge" alt="router badge">
  <img src="https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=for-the-badge" alt="cypress badge">
  <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=for-the-badge" alt="vercel badge">
</div>

## Installation Instructions:
- Visit the deployed [link](https://prem-results-fe.vercel.app/)
- OR run the following on command line to clone the repo and run the app locally:
    ```
    git clone git@github.com:corysanders3/prem-results-fe.git
    cd prem-results-fe
    npm install
    npm start
    ```
### Run Tests
- Ensure you're running the app locally (see Installation Instructions above)
- Run the following on command line to open Cypress: `npm run cypress`
- Click `E2E Testing`, then `Start E2E Testing` in desired browser
- Select `home_spec`, `about_spec`, `standings_spec`, or `game_spec` to run desired tests

## Context:
- ~40 hours to complete functionality, test suite, and responsiveness
- Goals
  ```
  - Successfully implement TypeScript into a solo project
  - Build e-2-e test suite with intercepted network requests
  - Ensure site is responsive for all screen sizes
  ```
- Wins
  ```
  - Functionality for goals game to determine a winning condition
  - Automatic deployments with Vercel
  - Using conditional logic for rendering components
  ```
- Challenges
  ```
  - Implementing sessionStorage to keep track of game wins if user navigates to a different page
  - Handrolling data for site and deploying server
  ```