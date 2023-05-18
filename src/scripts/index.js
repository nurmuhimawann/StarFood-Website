import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import swRegister from './utils/sw-register';
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/root.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/like.css';
import '../styles/favorite.css';

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
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

//  Sticky Header & Back to top button
const header = document.querySelector('[data-navbar]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
});
