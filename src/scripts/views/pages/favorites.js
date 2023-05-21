import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favorite-page">
      <h1 class="favorite-page__title" tabindex="0">Favorite Restaurants</h1>
      <section id="favoriteRestaurants" class="favorite-restaurants"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#favoriteRestaurants');
    const hero = document.querySelector('.hero');
    const title = document.querySelector('.favorite-page__title');
    const navbar = document.querySelector('#navbar');
    const backTopBtn = document.querySelector('[data-back-top-btn]');

    window.onscroll = null;
    navbar.classList.add('active');
    hero.style.display = 'none';
    title.style.display = 'none';

    window.onscroll = () => {
      if (window.scrollY >= 100) {
        backTopBtn.classList.add('active');
      } else {
        backTopBtn.classList.remove('active');
      }
    };

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length === 0) {
        restaurantsContainer.style.display = 'flex';
        restaurantsContainer.innerHTML = `
          <div class="favorite-restaurants__empty" style="height: 50vh;">
            <h1>Sorry, You don't have any favorite restaurants yet. Please add one.</h1>
          </div>
        `;
      } else {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
        });
      }
      title.style.display = 'flex';
    } catch (error) {
      console.error(error);

      restaurantsContainer.innerHTML = '<h1>Failed to load data</h1>';
    }
  },
};

export default Favorite;
