# Contributing to `ember-styled-components`

Hi there! Thanks for your interest in `ember-styled-components`. This guide will help you get started contributing.

We want to ensure that `ember-styled-components` lives and continues to grow and evolve. The evolution of the library should never be blocked by any single person's time. One of the simplest ways of doing this is by encouraging a larger set of shallow contributors. Through this, we hope to mitigate the problems of a project that needs updates but there's no-one who has the power to do so.

## Project Structure

- `addon`: All addon code goes here.
  - `constructors`: All JS for ember component.
  - `models`: All handlebars for ember component.
  - `utils`
  - `vendor`: Third party code

## Developing locally

First, fork the repo to your GitHub account. Then clone your fork to your local
machine and make a new branch for your feature/bug/patch etc. It's a good idea to not develop directly on master so you can get updates.

```
git clone https://github.com/<YOUR_GITHUB_USERNAME>/ember-styled-components.git
cd ember-styled-components
git checkout -B <my-branch>
npm install
```

## Running

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

- `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Building

- `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Commands

TBD - Will be integrating eslint and prettier on precommit

### Updating your fork

When you want to pull down changes to your fork enter the following into your terminal:

```bash
git checkout master
git pull origin master
git checkout <my-branch>
git rebase master
```

## Why wasn't my PR merged?

I will do my best to write out my reasoning before closing a PR, but 80% of the time it falls under one of these...

- You did not read this document
- Your code breaks an internal application (I will be transparent about this)
- Your code conflicts with some future plans (I will be transparent about this too)
- You've said something inappropriate or have broken the Code of Conduct

## Getting help

Tweet / DM [@luistorres1423](https://twitter.com/luistorres1423)

## Credits

These contribution guidelines are based on the Styled Components `CONTRIBUTING.md` layout: https://github.com/styled-components/styled-components/
