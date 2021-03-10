# DataScience Hub Assessment Project

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Super-Linter](https://github.com/ash0x0/assessment-client-frontend/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Build](https://github.com/ash0x0/assessment-client-frontend/actions/workflows/build.yml/badge.svg)](https://github.com/ash0x0/assessment-client-frontend/actions/workflows/build.yml)
[![Build Status](https://travis-ci.com/ash0x0/assessment-client-frontend.svg?token=Xz1Ub1RsEKTAKSjys1gq)](https://travis-ci.com/ash0x0/assessment-client-frontend)

## Disclaimer

This project is part of a research effort in The Data Science Hub
under Dr. Nouri Sakr. Principal Investigators on this project are
Dr. Nouri Sakr and Dr. Sherif Aly. All work contained herein is
property of The Data Science Hub and The American University in Cairo
and under the supervision of the project PI's. If you haven't been
given permission by one of the PI's to work on this project, you
have no permission to view or use this code in any capacity.

## Contributing

### Development

The project uses [Yarn](https://yarnpkg.com/).
Installing all dependencies happens through `yarn install`.

The code uses
[AWS SDK](https://aws.amazon.com/sdk-for-javascript/),
[Sentry](https://sentry.io/welcome/),
[dotenv](https://github.com/motdotla/dotenv),
[RxDB](https://rxdb.info/),
[React](https://reactjs.org/),
[Create React App](https://github.com/facebook/create-react-app),
[Material UI](https://material-ui.com/).

Linting with [ESLint](https://eslint.org/) and code style is
[prettier](https://prettier.io/).

### Configuration

This repo is missing `.env` configuration. Find an example for
needed variables in `.env.example`. Make sure to fill out a
`.env` before starting or building.

### CI

Make sure to load all env variables in CI console before
triggering builds. The builds do not error if variables
are missing, a non-working binary will be produced.

