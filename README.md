# Data Science Hub Assessment Project Page

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Super-Linter](https://github.com/ash0x0/assessment-client-frontend/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Build](https://github.com/ash0x0/assessment-client-frontend/actions/workflows/build.yml/badge.svg)](https://github.com/ash0x0/assessment-client-frontend/actions/workflows/build.yml)
[![Build Status](https://travis-ci.com/ash0x0/assessment-client-frontend.svg?token=Xz1Ub1RsEKTAKSjys1gq)](https://travis-ci.com/ash0x0/assessment-client-frontend)

# Description

This is the landing page for the Data Science Hub Assessment project.

### Development

Install all dependencies using `yarn install`.

The project uses [dotenv](https://github.com/motdotla/dotenv)
for configuration variables. Find an example for
needed variables in `.env.example`. Make sure to fill out a
`.env` before starting or building.

This project uses:
[React](https://reactjs.org/),
[Create React App](https://github.com/facebook/create-react-app),
[Material UI](https://material-ui.com/).

Linting with [ESLint](https://eslint.org/) and code style is
[prettier](https://prettier.io/).

### CI

Make sure to load env variables in CI console or build config
before triggering builds. The builds do not error if variables
are missing. Instead, a non-working build will be produced.

