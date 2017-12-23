import Ember from 'ember';
import domAttributes from '../utils/domAttributes';

// TODO: Have this as a util - objectFromMutableCells
/**
 * Attrs can have/be type of MutableCell
 * they have a value property
 */
const createPropsObject = obj => {
  const props = {};

  Object.keys(obj).forEach(key => {
    props[key] = obj[key].hasOwnProperty('value') ? obj[key].value : obj[key];
  });

  return props;
};

export default ComponentStyle => {
  const createStyledComponent = (target, rules) => {
    const isHtmlTag = target && typeof target === 'string';

    const styledComponent = {
      init() {
        this._super(...arguments);

        // We have to set the bindings otherwise if we are styling a
        // styled component we will get duplicate classes attached to the component
        this.set('classNameBindings', ['_generatedClassName']);

        // HTML elements support some attributes
        domAttributes[this.tagName] &&
          this.set('attributeBindings', domAttributes[this.tagName]);

        // this.set('rules', [...this.getWithDefault('rules', []), ...rules]);
        this.rules = [...(this.rules || []), ...rules];
        this.componentStyle = new ComponentStyle(this.rules);
      },

      didReceiveAttrs() {
        this.set('_generatedClassName', this.generateClassName());
      },

      generateClassName() {
        // const { attrs } = this;

        const componentProps = createPropsObject(this.attrs);
        return this.generateAndInjectStyles(componentProps);
      },

      generateAndInjectStyles(componentProps) {
        // const { componentStyle } = this;
        return this.componentStyle.generateAndInjectStyles(componentProps);
      },
    };

    // TODO: Allow the spread notation
    if (isHtmlTag) {
      // const comp = Object.assign({}, styledComponent, { tagName: target });
      // return Ember.Component.extend({ tagName: target, ...styledComponent });
      const comp = styledComponent;
      comp.tagName = target;
      return Ember.Component.extend(comp);
    } else {
      return target.extend(styledComponent);
      // return target.extend({ ...styledComponent });
    }
  };

  return createStyledComponent;
};
