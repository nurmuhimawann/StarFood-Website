/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.favorite-restaurants__empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/');

  I.waitForElement('.restaurant');
  const firstRestaurant = locate('.restaurant-info .restaurant-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click('.restaurant-card__button');

  I.seeElement('#likeButtonContainer');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.favorite-restaurants__empty');

  I.amOnPage('/#/');

  I.waitForElement('.restaurant');
  I.click('.restaurant-card__button');

  I.seeElement('#likeButtonContainer');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant');
  const firstRestaurantButton = locate('.restaurant-card__button').first();
  I.click(firstRestaurantButton);

  I.seeElement('#likeButtonContainer');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurants__empty');
  I.dontSeeElement('.restaurant');
  I.dontSeeElement('.restaurant-info .restaurant-title');
});
