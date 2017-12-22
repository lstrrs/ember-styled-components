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

# ember-styled-components

This README outlines the details of collaborating on this Ember addon.

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
export default = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

```handlebars
{{!-- Use them like any other React component – except they're styled! --}}
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

## Installation

* `git clone <repository-url>` this repository
* `cd ember-styled-components`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
