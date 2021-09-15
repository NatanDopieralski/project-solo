import {select, classNames} from './settings.js';
import general from './components/general.js';
import links from './components/links.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');
        // run thisApp.activatePage with that id
        thisApp.activatePage(id);

        // change URL hash
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){

      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initGeneral: function(){
    const thisApp = this;

    thisApp.widgetContainerGeneral = document.querySelector(select.containerOf.general);

    thisApp.general = new general(thisApp.widgetContainerGeneral);

  },

  initLinks: function(){
    const thisApp = this;

    thisApp.widgetContainerLinks = document.querySelector(select.containerOf.links);

    thisApp.Links = new links(thisApp.widgetContainerLinks);

  },

  menuControl: function(){
    document.querySelector(select.nav.haburger).addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(select.containerOf.menu).classList.toggle(classNames.nav.active);
    });

  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.menuControl();
  },
};

app.init();