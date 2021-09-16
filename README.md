# Data Science Hub Assessment Project Page

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Super-Linter](https://github.com/DScienceHub/assessment/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Build](https://github.com/DScienceHub/assessment/actions/workflows/build.yml/badge.svg)](https://github.com/ash0x0/assessment-client-frontend/actions/workflows/build.yml)

# Description

The landing page for the Data Science Hub Assessment project (Dr. Proctor).

## Development

To get started install dependencies using `yarn install --dev`

Find an example for needed environment variables in `.env.example`. Make sure to fill out a
`.env` file before starting or building.

Also remember when adding or updating environment variables to make the changes
in [.github/workflows/build.yml] and add the proper secrets to the repository.
Make sure to load env variables in the action and add to secrets
before triggering builds. The builds do not error if variables
are missing. Instead, a non-working build will be produced.

This project uses the following frameworks/libraries:
- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Material UI](https://material-ui.com/) for UI components
- [Auto Rotating Carousel](https://github.com/TeamWertarbyte/material-auto-rotating-carousel)
for landing page carousel

And the following tools:
- [ESLint](https://eslint.org/) for linting 
- [prettier](https://prettier.io/) for code style
- [Winston](https://github.com/winstonjs/winston) for logging
- [Husky](https://github.com/typicode/husky) for git hooks
- [lint-staged](https://github.com/okonet/lint-staged) for git hook linting
- [dotenv](https://github.com/motdotla/dotenv) for environment variables

All related libraries and tools are installed with `yarn install --dev`

### Releasing

The project is set up with a CD release github action. To release a new version:
1. Increment the version in [package.json] to the desired version.
2. Create a tag with the desired version `git tag v*.*.*`.
3. Push the tag to remote `git push --tags`.

The github `build` action will automatically start building and publishing the specified
commit to github pages. Note that this action is triggered on tag only, no push or manual
invoke.

