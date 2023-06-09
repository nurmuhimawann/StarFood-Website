import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantCard } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="home-page">
      <div id="main-content" class="main-content" tabindex="0">
        <h2 class="main-content__title">Explore Restaurant</h2>
        <section id="restaurantList" class="restaurant-list"></section>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurantList');
    const hero = document.querySelector('.hero');
    const mainContent = document.querySelector('#main-content');
    const navbar = document.querySelector('[data-navbar]');
    const backTopBtn = document.querySelector('[data-back-top-btn]');

    hero.style.display = 'none';
    mainContent.style.display = 'none';
    navbar.classList.remove('active');

    window.onscroll = () => {
      if (window.scrollY >= 100) {
        navbar.classList.add('active');
        backTopBtn.classList.add('active');
      } else {
        navbar.classList.remove('active');
        backTopBtn.classList.remove('active');
      }
    };

    try {
      const restaurants = await RestaurantSource.restaurantList();

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
      });

      hero.style.display = 'block';
      mainContent.style.display = 'flex';
    } catch (error) {
      console.error(error);

      hero.style.display = 'none';
      mainContent.style.display = 'none';
      restaurantsContainer.innerHTML = '<h1>Failed to load data</h1>';
    }
  },
};

export default Home;
