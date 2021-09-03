export const select = {
  templateOf: {
    generalWidget: '#template-general',
    linksWidget: '#template-links',
  },
  containerOf: {
    pages: '#pages',
    general: '.general-wrapper',
    links: '.links-wrapper',
  },
  nav: {
    links: '.nav-link',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const templates = {
  pageGeneralWidget: Handlebars.compile(document.querySelector(select.templateOf.generalWidget).innerHTML),
  pageLinksWidget: Handlebars.compile(document.querySelector(select.templateOf.linksWidget).innerHTML),
};