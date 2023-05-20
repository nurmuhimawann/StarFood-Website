import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
  <div class="restaurant-detail" tabindex="0">
    <div class="restaurant-detail__header">
      <div class="restaurant-detail__image-container">
        <picture>
          <img
            class="restaurant-detail__image lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}"
            alt="${restaurant.name}"
            tabindex="0"
          />
        </picture>
      </div>
      <div class="restaurant-detail__content">
        <h3 class="restaurant-detail__title" tabindex="0">${restaurant.name}</h3>
        <div class="restaurant-detail__meta">
          <div class="restaurant-detail__rating" tabindex="0">
            <i class="fa fa-star checked restaurant-detail__rating-icon" alt="rating icon"></i>
            <span class="restaurant-detail__rating-score">${restaurant.rating}</span>
          </div>
          <div class="restaurant-detail__location" tabindex="0">
            <i class="fa fa-location-dot restaurant-detail__location-icon" alt="location icon"></i>
            <span class="restaurant-detail__location-address">${restaurant.city}</span>
          </div>
        </div>
        <p class="restaurant-detail__description" tabindex="0">
        ${restaurant.description}
        </p>
      </div>
      <div class="restaurant-detail__info">
        <div class="restaurant-detail__address">
          <h4 class="restaurant-detail__address-title" tabindex="0">Address</h4>
          <p class="restaurant-detail__address-text" tabindex="0">${restaurant.address}</p>
        </div>
        <div class="restaurant-detail__categories">
          <h4 class="restaurant-detail__categories-title" tabindex="0">Categories</h4>
          <ul class="restaurant-detail__categories-list">
            ${restaurant.categories.map((category) => `
              <li class="restaurant-detail__categories-item" tabindex="0">${category.name}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="restaurant-detail__menu">
      <div class="restaurant-detail__menu-food">
        <h4 class="restaurant-detail__menu-title" tabindex="0">Foods</h4>
        <ul class="restaurant-detail__menu-list">
          ${restaurant.menus.foods.map((food) => `
            <li class="restaurant-detail__menu-item" tabindex="0">${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__menu-drink">
        <h4 class="restaurant-detail__menu-title" tabindex="0">Drinks</h4>
        <ul class="restaurant-detail__menu-list">
          ${restaurant.menus.drinks.map((drink) => `
            <li class="restaurant-detail__menu-item" tabindex="0">${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>
    <div id="customerReview" class="customer-review" tabindex="0">
      <h3 class="customer-review__title" tabindex="0">Customer Reviews</h3>
      ${restaurant.customerReviews.map((customerReview) => `
      <div class="customer-review__item" tabindex="0">
        <div class="customer-review__image-container">
          <picture>
            <img
              class="customer-review__image lazyload"
              data-src="./images/customers.png"
              alt="customer review"
              tabindex="0"
            />
          </picture>
        </div>
        <div class="customer-review__body">
          <div class="customer-review__name" tabindex="0">${customerReview.name}</div>
          <div class="customer-review__date" tabindex="0">${customerReview.date}</div>
          <div class="customer-review__content" tabindex="0">${customerReview.review}</div>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantCard = (restaurant) => `
  <div class="restaurant" tabindex="0">
    <div class="restaurant-image__container">
      <picture>
        <img
          class="restaurant-image__img lazyload"
          data-src="${restaurant.pictureId
            ? `${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`
            : './images/loading.gif'
          }"
          alt="${restaurant.name}"
          tabindex="0"
        />
      </picture>
    </div>
    <div class="restaurant-info">
      <h3 class="restaurant-title" tabindex="0">${restaurant.name}</h3>
      <div class="restaurant-meta">
        <div class="restaurant-location" tabindex="0">
          <span>
            <i class="fa fa-location-dot restaurant-location__icon" alt="location icon"></i>
            ${restaurant.city}
          </span>
        </div>
        <div class="restaurant-rating" tabindex="0">
          <span>
            <i class="fa fa-star checked restaurant-rating__icon" alt="rating icon"></i>
            ${restaurant.rating}
          </span>
        </div>
      </div>
      <p class="restaurant-description" tabindex="0">
        ${restaurant.description}
      </p>
      <a href="#/restaurant/${restaurant.id}" class="restaurant-link">
        <button class="restaurant-card__button" aria-label="look at this restaurant" id="detailButton" data-id="${restaurant.id}">
          Read More
        </button>
      </a>
    </div>
  </div>
`;

const createLikeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetail,
  createRestaurantCard,
  createLikeButton,
  createUnlikeButton,
};