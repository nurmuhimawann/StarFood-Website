import 'regenerator-runtime'; /* for async await transpile */
import '../styles/root.css';
import '../styles/main.css';
import '../styles/responsive.css';


// Fetching Data
import("../DATA.json").then(({ default: jsonData }) => {
    let datas = jsonData["restaurants"];
    let dataList = "";
    datas.forEach(function (data) {
        dataList += `
        <div class="restaurant" tabindex="0">
            <div class="restaurant-image__container">
                <picture>
                    <img
                        class="restaurant-image__img lazyload"
                        src="${data["pictureId"]}"
                        alt="${data["name"]}"
                        tabindex="0" />
                </picture>
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-title" tabindex="0">${data["name"]}</h3>
                <div class="restaurant-meta">
                    <div class="restaurant-location" tabindex="0">
                        <span>
                            <i
                                class="fa fa-location-dot restaurant-location__icon"
                                alt="location icon">
                            </i>
                            ${data["city"]}
                        </span>
                    </div>
                    <div class="restaurant-rating" tabindex="0">
                        <span>
                            <i
                                class="fa fa-star checked restaurant-rating__icon"
                                alt="rating icon">
                            </i>
                            ${data["rating"]}
                        </span>
                    </div>
                </div>
                <p class="restaurant-description" tabindex="0">${data["description"]}</p>
            </div>
        </div>`;
    });
    document.querySelector("#restaurantList").innerHTML = dataList;
});


//  Sticky Header & Back to top button
const header = document.querySelector("[data-navbar]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


// Hamburger Menu
const button = document.querySelector('.navbar-mobile__btn');
const drawer = document.querySelector('.mobile-menu');
const content = document.querySelector('#mainContent');

function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
}

function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
}

button.addEventListener('click', (event) => {
    _toggleDrawer(event, drawer);
});

content.addEventListener('click', (event) => {
    _closeDrawer(event, drawer);
});
