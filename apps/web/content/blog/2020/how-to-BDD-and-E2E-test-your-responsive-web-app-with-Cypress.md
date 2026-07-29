---
title: How to BDD and E2E test your responsive web app with Cypress
snippet: Develop alongside Cypress for an accessible & SEO-friendly design, then automatically test against your Vercel deployments
publishedAt: 2020-11-14T12:59:30.456Z
tags:
  - UX
  - BDD
  - Frontend
  - Devops
---

## Agenda

In this article, we will:

- Write a meaningful test in Cypress
- Run that test against all devices we want to explicitly support
- Configure a Vercel deployment
- Configure a GitHub action to run our test against successful deploys

## Premise

I am a huge proponent of [Testing Library](https://testing-library.com/ 'Simple and complete testing utilities that encourage good testing practices'): when you use it in conjunction with [Jest](https://jestjs.io/ 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity'), you can start your implementation quickly by writing meaningful tests that will run blazing-fast and anywhere. None of the dreaded “it runs on my machine but breaks on CI”!

And, If you heavily leverage the `xByRole` selectors, you’ll be implementing with accessibility in mind as well 🥰

This is why I had a bit of a falling out with [Cypress](https://www.cypress.io/ 'Fast, easy and reliable testing for anything that runs in a browser'); It looks great, demos amazingly, but…

1. Cypress uses `mocha` as the test runner and `chai` as the assertion library. These tools had their day, but have been surpassed by Jest in functionality and popularity both.
2. Cypress uses a “jquery-inspired” API, and is indeed heavily using `jquery` behind the scenes. The j-word is a bit of an anathema in developer circles nowadays; let’s not go too deep into it and just say that… we’re quite _concerned_ with how easy jquery makes it to test implementation details and neglect accessibility.
3. Cypress can run on your machine just fine, but due to it being a huge executable, you need a bit of extra setup to get it running on your CI of choice. `yarn && yarn cypress run` doesn’t “just work”!

There are a few more drawbacks, but I feel they are offset by the increase in confidence Cypress gives you. Cypress may be slower to run, and **has to** run against your whole app. This makes it trickier to test specific edge-cases, that when you’re able to test individual components in isolation, as needed.

However, both of those things make it more likely that when you **do** have passing tests, your app **actually works**! Not a specific part of your app. Not when you’ve forced a situation with internal state manipulations that may or may not be physically possible to reproduce. If it passes in Cypress, your real deployed app will work when interacted with the described, realistic, user behaviour.

As for the three key drawbacks… This article is a guide to resolving them! Spoiler alert: 1 & 2 we’ll mostly handle with [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/ 'Simple and complete testing utilities that encourage good testing practices, for Cypress!'), and we’ll take care of number 3 with the [Cypress GitHub action](https://github.com/cypress-io/github-action 'GitHub Action for running Cypress end-to-end tests').

Strap in!

![](https://media.giphy.com/media/jZh1hRsLJJk6Q/giphy.gif)

## Setting up for BDD

Our end goal here is to run `yarn bdd` on a terminal and get the Cypress dashboard running, so we can develop with our test expectations and our app side by side.

![](/blog/2020/bdd-and-e2e-with-cypress/full-spec.jpg)

We won’t have this many specs and target devices to start with, but we’ll get there! And the first step is getting into our project’s directory and running:

```bash
yarn add -D cypress @testing-library/cypress
```

Which project should **you** `cd` into? That’s up to, well, you! For the screenshots, I’m in [this Next.js app using the Marvel API](https://github.com/jmagrippis/my-marvel 'My Marvel!'), which I’m live-streaming the creation of. But you can run this setup in a brand new [Create React App](https://create-react-app.dev/ 'Set up a modern web app by running one command'), an old-school [Next.js](https://nextjs.org/ 'The React Framework for Production') project from when Vercel were known as Zeit, or, hey, even an app made in Elixir with [Phoenix](https://www.phoenixframework.org/ 'Peace of mind from prototype to production')!

The beauty of what we’re configuring here is that **how** you’ve implemented your app doesn’t matter, so long as the spec is fulfilled!

That said, having our project be in [Typescript](https://www.typescriptlang.org/ 'Typed JavaScript at Any Scale') _would_ help, as that’s the basis for my examples; you’ll have to transpile them to different languages yourself 🤓

So, let’s get into our project and run the command above to add our two new dev dependencies. After it’s done, we should run whichever script gets our app running in local development mode; by default that would be `yarn dev` for Next.js, and `yarn start` for Create React App.

Finally, let’s open `package.json` to add this to the scripts section:

```json
"scripts": {
  // ...
  "bdd": "cypress open"
},
```

In a new terminal window, we are now able to run `yarn bdd` to get the initial Cypress configuration sorted; give that a go!

That command will generate tons of files in the `cypress` subdirectory, as well as a `cypress.json`. Let’s edit that to configure which address we should be running against locally, and also set up a new Cypress feature for “flaky test management”.

```json
{
	"baseUrl": "http://localhost:3000/",
	"retries": {
		"runMode": 2,
		"openMode": 0
	}
}
```

The `baseUrl` should be where our app is running locally, thanks to the command we’ve left running on our other terminal window. That’s commonly `http://localhost:3000/`, as that’s the default for most frameworks.

Personally, I like to dedicate a different port to each of my apps and services, so there won’t be conflicts if I happen to be running them in parallel; if you feel the same, make sure to update the address to reflect that!

In any case, let’s move on to the `cypress` directory where there are files to delete and amend! Let’s go through them in order:

```bash
cypress
├── fixtures
│   └── example.json
├── integration
│   └── examples
│       ├── actions.spec.js
│       ├── aliasing.spec.js
│       ├── assertions.spec.js
│       ├── connectors.spec.js
│       ├── cookies.spec.js
│       ├── cypress_api.spec.js
│       ├── files.spec.js
│       ├── local_storage.spec.js
│       ├── location.spec.js
│       ├── misc.spec.js
│       ├── navigation.spec.js
│       ├── network_requests.spec.js
│       ├── querying.spec.js
│       ├── spies_stubs_clocks.spec.js
│       ├── traversal.spec.js
│       ├── utilities.spec.js
│       ├── viewport.spec.js
│       ├── waiting.spec.js
│       └── window.spec.js
├── plugins
│   └── index.js
└── support
    ├── commands.js
    └── index.js
```

The `fixtures` directory is for mocking network requests via Cypress, which doesn’t even work with the probable way we’d be fetching data; I wish we could delete it, but Cypress will stubbornly keep recreating it, and the `example.json` file inside, no matter what. We’ll have to ignore it!

What we **will** delete is the `integration/examples` directory! The `integration` directory is indeed where we’ll be keeping our specs, but we won’t need any of the examples. If we need reference in the future, we’ll go straight [to the docs](https://docs.cypress.io/api/api/table-of-contents.html 'the Cypress API docs and guides'). So let’s nuke it!

```bash
rm -rf cypress/integration/examples
```

![](https://media.giphy.com/media/oQtO6wKK2q0c8/giphy.gif)

Next up is `plugins/index.js` which we’ll _kinda_ keep, but let’s switch it to Typescript. `mv cypress/plugins/index.js cypress/plugins/index.ts ` and open that file in your editor.

The Typescript config we’ll eventually add will be upset with using `module.exports` here, so let’s switch:

```js
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
}
```

to:

```ts
const pluginConfig: Cypress.PluginConfig = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
}

export default pluginConfig
```

Next up is a file we’ll actually have to do something meaningful in: `support/commands.js`. This is where we’ll be adding the selectors from Cypress Testing Library; using them is the way to stomach working with chai and sinon from drawback 1, and get around the jquery mindset of drawback 2!

So let’s switch the file to Typescript with: `mv cypress/support/commands.js cypress/support/commands.ts` and open it. It’s your choice to keep or nuke the comments in that file after reading them, but we definitely need to add:

```ts
import '@testing-library/cypress/add-commands'
```

Next is `support/index.js`, the file actually importing the `commands.ts` we were just finished with. We don’t need to change its insides, but let’s keep things “all-Typescript” by changing the file extension.

```bash
mv cypress/support/index.js cypress/support/index.ts
```

That’s it for deletions and amendments! Now let’s add our Typescript config by creating `cypress/tsconfig.json`, maybe via running `touch cypress/tsconfig.json` on the terminal, and putting inside:

```json
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["es5", "dom"],
		"types": ["cypress", "@testing-library/cypress"]
	},
	"include": ["**/*.ts"]
}
```

Cypress will also create some directories for screenshots and videos from our test runs. We don’t want to commit those to version control, so let’s add to our `.gitignore`:

```bash
# cypress
cypress/videos
cypress/screenshots
```

If you’re using `eslint`, which is a great idea and something you will be doing by default if you’re going with Create React App, you should also create a `cypress/.eslintrc` with this configuration:

```json
{
	"extends": ["react-app"],
	"env": {
		"jest": false,
		"mocha": true
	}
}
```

This will essentially switch to the appropriate warnings for any assertions we write in tests inside the `cypress` directory, by declaring we ain’t in Jest-land anymore: That directory is mocha & chai county.

With all these sorted, let’s create the file for our first test!

```bash
touch cypress/integration/home.spec.ts
```

If you followed the instructions so far, you should have a `cypress.json` and a `cypress` directory ready to go and looking like this:

```bash
cypress
├── integration
│   └── home.spec.ts
├── plugins
│   └── index.ts
├── support
│   ├── commands.ts
│   └── index.ts
└── tsconfig.json
cypress.json
```

## Writing our first test

Since we’re doing BDD, let’s start with the simplest thing, which is actually quite important for SEO reasons; let’s make sure we’ve got a heading with a semantically appropriate role!

```ts
describe('home', () => {
	it('shows the home page', () => {
		cy.visit('/')

		cy.findByRole('heading', {name: 'my Marvel'}).should('exist')
	})
})
```

Feel free to kill the previous `yarn bdd` process and run it again, to ensure we’re running with our latest config. Click “Run all specs”!

![](/blog/2020/bdd-and-e2e-with-cypress/cypress-open.jpg)

This gets us into a smaller and likely redder version of the first screenshot in this article! Which means that we can now finally do some **Behaviour-Driven Development using Cypress**!

We can keep making the tests green ✅, then extending them ❌, then writing our implementation to get us back to green and refactor ♻️, to our heart’s content! ❌ ✅ ♻️

![](https://media.giphy.com/media/l2Sqir5ZxfoS27EvS/giphy.gif)

## Testing across devices

I will be writing a dedicated article on creating meaningful tests when you’re doing BDD of mobile-first responsive designs… but, for now, I will share my hottest tip and move on to getting all of this running E2E. The idea is to have all the hard-work of the setup done, and really go deep on mobile-first responsive design next time!

So regardless of whether you’ve extended the `home.spec.ts` from above or not, it’s probably still only running for a single and kinda random layout. We can do better than that! `Cypress` does run on the browser, so it won’t get you the “actual device testing” that something like [Browserstack](https://www.browserstack.com/ 'App & Browser Testing Made Easy') will, but you can use its `viewport` configuration to simulate devices of various layouts, pixel ratios, and touch capabilities.

If we wanted to run the same test simulating an iPhone X, we can add:

```ts
describe('home', () => {
	it('shows the home page', () => {
		cy.viewport('iphone-x')
		// ...
	})
})
```

Which will immediately run our tests with, you guessed it, a configuration simulating an iPhone X! You can inspect `Cypress.ViewportPreset` to see what all the currently supported presets are. You may also provide your own custom configuration to the `viewport` method, but I do prefer sticking to the presets.

And what I **love** is creating an array with all the presets that I want to test against:

```ts
export const testedViewports: Cypress.ViewportPreset[] = [
	'iphone-x',
	'ipad-2',
	'macbook-13',
	'macbook-16',
]
```

Because in most situations my spec is the same across devices; it just **looks** a bit different. Maybe on one device the header is centred and list items are stacked, on another the header is to the left and list items are on a grid of 2 columns:

![](/blog/2020/bdd-and-e2e-with-cypress/figma.jpg)

Which means I can just repeat the specs for every device in `testedViewports` and have a snapshot of how things look on each. Which means that, instead of copy & pasting the block of tests and having to amend `n` blocks every time I want to add a spec, I can `forEach` through that array like so:

```ts
import {testedViewports} from '../testedViewports'

describe('home', () => {
	testedViewports.forEach((viewport) => {
		describe(`on ${viewport}`, () => {
			it('shows the home page', () => {
				cy.visit('/')

				cy.findByRole('heading', {name: 'my Marvel'}).should('exist')
			})
		})
	})
})
```

And Cypress will happily label and run your specs against your `n` viewports! `n` times the confidence, at `/n` times the work!

![](https://media.giphy.com/media/Vc5GabD7CnDaMB0VF5/giphy.gif)

## Running E2E

Having these tests running as we develop is great, but what gives you the most confidence “the app actually works ™” would be to run them against real deployments.

A very common mistake is to forget to set up a new environment variable in your production build. You’re hitting a new external api, you’re taking its secret api key from `process.env`, and you have indeed set up the relevant environment variable to a valid api key just fine locally. You’re getting results and the Cypress tests are green.

**But**, you deploy and you find that, in production, it’s all gone wrong! Debugging the problem, you quickly find you’re hitting that external api with `undefined` as the apiKey, but, the question is… Shouldn’t your automated tests have caught this?

They **should** and they _would_ have had, if you _were_ running them against your deployments… so let’s set that up meow!

![](https://i.giphy.com/media/o0vwzuFwCGAFO/giphy.webp)

GitHub actions make it surprisingly easy! You could have this as part of an existing GitHub workflow, but I like keeping it separate, so let’s create a dedicated file inside the GitHub workflows directory: `.github/workflows/e2e.yml`

I’ve based this on [Gleb Bahmutov’s extensive article](https://glebbahmutov.com/blog/develop-preview-test/ 'Test the Preview Vercel Deploys'); I’ve annotated inline and will elaborate on the key parts, but do check that article out for more on _why_ we’re ending up with a config like this:

```yaml
name: E2E

# This workflow will only run when
# GitHub gets pinged with a `deployment_status` event
on: deployment_status

jobs:
  e2e:
    # ... and we only run it when the deployment was
    # successful, since we want to test against it!
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Cypress 🌲
        uses: cypress-io/github-action@v2
        # you only need this if you wish to record your runs
        with:
          record: true
        env:
          CYPRESS_BASE_URL: ${{ github.event.deployment_status.target_url }}
          # you only need this if you record your runs,
          # so only if you've set `with.record: true` above
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
      # the cypress action will not automatically report
      # whether it failed or not! without these two steps,
      # it would stay stuck at forever "processing"!
      - name: ✅ Cypress ✅
        # report when job was successful 🥳!
        if: ${{ success() }}
        # ... using GitHub's commit status API
        # https://docs.github.com/en/rest/reference/repos#create-a-commit-status
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/statuses/${{ github.sha }} \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "context": "e2e",
            "state": "success",
            "description": "Cypress tests passed"
          }'

      - name: 🚨 Cypress 🚨
        # report when job was unsuccessful 😓!
        if: ${{ failure() }}
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/statuses/${{ github.sha }} \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "context": "e2e",
            "state": "failure",
            "description": "Cypress tests failed"
          }'
```

What makes this so easy is the [Cypress GitHub action](https://github.com/cypress-io/github-action 'GitHub Action for running Cypress end-to-end tests') I mentioned before, which we invoke with `uses: cypress-io/github-action@v2`, as well as deploying to Vercel, which shoots off the `deployment_status` event and gives us the URL our build was just deployed to, regardless whether it was a PR preview deployment, or a real production deployment after merging to the `main` branch.

We pass that URL in as an environment variable where we’re doing:

```yaml
env:
  CYPRESS_BASE_URL: ${{ github.event.deployment_status.target_url }}
```

Remember when we set the `baseUrl` in our `cypress.json` to point to our localhost? Cypress will override that setting when the `CYPRESS_BASE_URL` environment variable is set! This means whenever our Cypress action runs, it will visit wherever `github.event.deployment_status.target_url` specifies.

Deploying to Vercel is straightforward, especially for Next.js apps, so all we need to do is follow the [https://vercel.com/import](https://vercel.com/import) flow to link our GitHub repository, and we’ll be getting preview and real deployments after a few button presses!

If we **didn’t** want Cypress to be recording our runs, so if our `e2e.yml` does not have:

```yaml
with:
  record: true
env:
  CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```

Our E2E setup would already be complete! But let’s be extra and set up that neat feature as well; we’ll appreciate it when we do get failing tests, as we’ll be able to take a quick glance at what’s wrong, without even needing to open our terminal and checkout the repo.

Again, [Gleb’s article is very thorough on the process](https://glebbahmutov.com/blog/develop-preview-test/), but the short of it is that if we click the “Runs” tab on the main Cypress window, click “Connect to Dashboard” and follow that flow…

![](/blog/2020/bdd-and-e2e-with-cypress/cypress-dashboard-connect.jpg)

We’ll eventually end up with an automatically amended `cypress.json`, one that has a `projectId` set for us. So our final `cypress.json` for this article, will be something like:

```json
{
	"baseUrl": "http://localhost:3000/",
	"retries": {
		"runMode": 2,
		"openMode": 0
	},
	"projectId": "123abc"
}
```

Finishing the Cypress Dashboard integration will also give us a secret key to use as our `CYPRESS_RECORD_KEY`! We need to set that up as a secret in the GitHub settings for our repository. If you’re looking for a direct link, you can substitute the repo’s organisation and name in the following:

[https://github.com/ORG-NAME/REPO-NAME/settings/secrets/actions/new](https://github.com/jmagrippis/my-marvel/settings/secrets/actions/new)

Once there, we’ll add a new secret, with the name `CYPRESS_RECORD_KEY` and the value of what we got from the Cypress Dashboard. This will make the line from our `e2e.yml`:

```yaml
env:
  CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```

Actually work, bringing this article to a close!

![When devops sets up a new action for you](https://media.giphy.com/media/S9iMXx6Lqrr5mJoMxC/giphy.gif)

Raise a PR to see all the pieces fall into place! As a bonus, I’ve made [the Cypress Dashboard for the My Marvel app public](https://dashboard.cypress.io/projects/434y1o/runs "I'm hoping for all green when you visit"), so do have a look there: you can check out the screenshots and recordings of the latest runs!

And, as always, please do get in touch if you want me to elaborate further on any of these steps, or demonstrate something else that stumps or interests you 👩‍💻👨‍💻
