import {templates} from '/js/settings.js';

class General {
  constructor(element){
    const thisGeneral = this;

    thisGeneral.render(element);
  }

  render(element){
    const thisGeneral = this;

    const generatedHTML = templates.pageGeneralWidget();

    thisGeneral.dom = {};

    thisGeneral.dom.wrapper = element;

    thisGeneral.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default General;