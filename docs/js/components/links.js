import {templates} from '../js/settings.js';

class Links {
  constructor(element){
    const thisLinks = this;

    thisLinks.render(element);
  }

  render(element){
    const thisLinks = this;

    const generatedHTML = templates.pageLinksWidget();

    thisLinks.dom = {};

    thisLinks.dom.wrapper = element;

    thisLinks.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Links;