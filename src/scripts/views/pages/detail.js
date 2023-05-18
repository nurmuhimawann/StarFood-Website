import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="detail-page">
      <div id="likeButtonContainer"></div>
      <section id="restaurantDetail"></section>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hero = document.querySelector('.hero');
    const restaurantDetailContainer = document.querySelector('#restaurantDetail');

    hero.style.display = 'none';

    try {
      const restaurant = await RestaurantSource.restaurantDetail(url.id);
      restaurantDetailContainer.innerHTML += createRestaurantDetail(restaurant.restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          city: restaurant.restaurant.city,
          rating: restaurant.restaurant.rating,
        },
      });
    } catch (error) {
      console.log(error);
      restaurantDetailContainer.innerHTML = '<h1>Failed to load data</h1>';
    }
  },
};

export default Detail;
