# Johnny Magrippis Personal Site

[![CI](https://github.com/jmagrippis/magrippis/workflows/CI/badge.svg)](https://github.com/jmagrippis/magrippis/actions)

The personal website of software engineer Johnny Magrippis. Yours truly!

## Live Site

You can view the result of all this code at
[magrippis.com](https://magrippis.com).

## Notable tech used

- [React]
- [NextJS]

[react]: https://facebook.github.io/react/ "It's kind of a big deal"
[nextjs]: https://nextjs.org/ 'Isomorphic React framework'

## Questions & Contributions

The web is vast and technologies change all the time! This project once was a
frontend in Angular talking to a RESTful API written in php. Then a Apollo React frontend talking to a GraphQL backend! It's all in the version history 😁

Feel free to ask why a feature is implemented in a particular way, or push "Best
Practices" and request neat features!

## Coding Challenges

This repo also houses [jmagrippis’ Coding Challenges]! Visit the index, find one you like, and give it a whirl!

[jmagrippis’ coding challenges]: https://magrippis/com/coding-challenges 'Yep, that is me again'

### Prep

You will need a version of Node installed: it is recommended to use [nvm] for hassle-free node version management.

[Yarn v1] is recommended for installing this project's dependencies. [npm] which would have been installed alongside node should work almost just as well.

Assuming you went with yarn, go to the root of the project and run:

```sh
yarn
```

... and everything you need to run this project and its tests will be downloaded for you. Prep complete!

[nvm]: https://github.com/nvm-sh/nvm 'bash script to manage multiple active node.js versions'
[yarn v1]: https://classic.yarnpkg.com/en/docs/install 'because they dropped the ball with v2'
[npm]: https://www.npmjs.com/ 'it once was THE javascript package manager'

### Starting the dev server

If you clone this project and go to the root directory, running:

```sh
yarn dev
```

Will spin up the dev server, running on port 3500. For example, visiting http://localhost:3500/coding-challenges/2020/cycling-element would get you to the spec for the Cycling Element challenge, and http://localhost:3500/coding-challenges/2020/cycling-element/playground where you could be trying to fulfil the spec.

### Running tests

Regardless if you’ve got the server running, the following command will start the test runner:

```sh
yarn test --watch
```

Tests will rerun when any code changes, so you may start adding `MyComponent.test.tsx` files with expectations and see turn from red to green as you fulfill the spec.

The testing framework of choice is [Jest] and [React Testing Library] is also setup, and heavily recommended for the UI testing.

[jest]: https://jestjs.io/ 'testing framework with a focus on simplicity'
[react testing library]: https://testing-library.com/ 'testing utilities that encourage good testing practices'

### License

For learning purposes, this repo is licensed under the [MIT license].

[mit license]: http://opensource.org/licenses/MIT "Everyone's favourite license"
