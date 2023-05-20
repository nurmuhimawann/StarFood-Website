import 'regenerator-runtime'; /* for async await transpile */

import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/root.css';
import '../styles/main.css';
import '../styles/detail-restaurant.css';
import '../styles/favorite.css';
import '../styles/responsive.css';

const app = new App({
  button: document.querySelector('.navbar-mobile__btn'),
  drawer: document.querySelector('.mobile-menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

//  Back to top button
const backTopBtn = document.querySelector('[data-back-top-btn]');

backTopBtn.addEventListener('click', () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
});
