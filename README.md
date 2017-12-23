<p align="center">
    <a href="https://emberjs.com">
      <img width="300" src="https://raw.githubusercontent.com/emberjs/website/master/source/images/brand/ember_Ember-Light.png">   </a>
    <a href="https://www.styled-components.com">
      <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
    </a>
</p>

<br />

<div align="center">
  <strong>Visual primitives for the component age. A simple port of styled-components 💅 for Ember</strong>
</div>

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS allows you to write actual CSS code to style your components. It also removes the mapping between components and styles - using components as a low-level styling construct could not be easier!

*This is, not fully-featured, fork from styled-components made by [Glen Maddern](https://twitter.com/glenmaddern) and [Max Stoiber](https://twitter.com/mxstbr). Thank you for making this possible!*

## Installation

```
npm install ember-styled-components
```

## Example

<!-- prettier-ignore -->
```javascript
// wrapper-component.js
import styled from 'ember-styled-components';

/**
 * Create a wrapper component that renders a <section> with
 * some padding and a papayawhip background
 */
export default styled.section`
  padding: 4em;
  background: papayawhip;
`;
```

```javascript
// title-component.js
import styled from 'ember-styled-components';

/**
 * Create a title component that renders an <h1> which is
 * centered, palevioletred and sized at 1.5em
 */
export default styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

```handlebars
{{!-- Use them like any other Ember component – except they're styled! --}}
{{#wrapper-component}}
  {{#title-component}}Hello World, this is my first styled component!{{/title-component}}
{{/wrapper-component}}
```

This is what you'll see in your browser:

<div align="center">
  <a href="https://styled-components.com">
    <img alt="Screenshot of the above code ran in a browser" src="http://i.imgur.com/wUJpcjY.jpg" />
  </a>
</div>

## Contributing

If you want to contribute to `ember-styled-components` please see our [contributing and community guidelines](./CONTRIBUTING.md), they'll help you get set up locally and explain the whole process.

Please also note that the repository follows out [Code of Conduct](./CODE_OF_CONDUCT.md), make sure to review and follow it.

## License

Licensed under the MIT License, Copyright © 2017 Luis Torres.

See [LICENSE](./LICENSE) for more information.

## TODOs

- [ ] Tests
- [ ] Demo website

## Acknowledgements

This project builds on a long line of earlier work by clever folks all around the world.

* [Styled Components](https://github.com/styled-components/styled-components/)
* [Vue Styled Components](https://github.com/styled-components/vue-styled-components/)

## Credits

This document is based on the Styled Components `README.md` layout: https://github.com/styled-components/styled-components/
