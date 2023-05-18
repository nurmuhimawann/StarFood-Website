import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favorite-page">
      <h2 class="favorite-page__title" tabindex="0">Favorite Restaurants</h2>
      <section id="favoriteRestaurants" class="favorite-restaurants"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#favoriteRestaurants');
    const hero = document.querySelector('.hero');
    const title = document.querySelector('.favorite-page__title');

    hero.style.display = 'none';
    title.style.display = 'none';

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = `
          <div class="favorite-restaurants__empty">
            <img src="./images/empty-page.png" alt="empty page image">
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
