/* =========================================================
   THIKA EATERIES - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("THIKA EATERIES APP.JS IS WORKING");


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });

        });
    }


    /* =========================================================
       HERO SLIDER - HOME PAGE
       ========================================================= */

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slider-dot");
    const prevBtn = document.querySelector(".hero-prev");
    const nextBtn = document.querySelector(".hero-next");

    let currentSlide = 0;
    let sliderInterval;


    function showSlide(index) {

        if (!slides.length) return;

        if (index >= slides.length) {
            currentSlide = 0;

        } else if (index < 0) {
            currentSlide = slides.length - 1;

        } else {
            currentSlide = index;
        }


        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        });


        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        });

    }


    function nextSlide() {
        showSlide(currentSlide + 1);
    }


    function previousSlide() {
        showSlide(currentSlide - 1);
    }


    function startSlider() {

        if (!slides.length) return;

        clearInterval(sliderInterval);

        sliderInterval = setInterval(() => {
            nextSlide();
        }, 5000);

    }


    if (slides.length) {

        showSlide(0);
        startSlider();

    }


    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();
            startSlider();

        });

    }


    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            previousSlide();
            startSlider();

        });

    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);
            startSlider();

        });

    });



    /* =========================================================
       EATERIES DATA
       ========================================================= */

    const eateries = [

        {
            name: "Thika Food House",
            location: "Thika CBD",
            cuisine: "Kenyan Food",
            rating: 4.8,
            status: "Open Now",
            image: "images/restaurant-1.jpg",
            description:
                "Enjoy delicious Kenyan meals prepared with fresh ingredients in a welcoming atmosphere."
        },

        {
            name: "Thika Coffee Spot",
            location: "Section 9",
            cuisine: "Coffee & Café",
            rating: 4.6,
            status: "Open Now",
            image: "images/restaurant-2.jpg",
            description:
                "A relaxing café for coffee, snacks, breakfast and casual conversations."
        },

        {
            name: "Thika Bites",
            location: "Makongeni",
            cuisine: "Fast Food",
            rating: 4.7,
            status: "Open Now",
            image: "images/restaurant-3.jpg",
            description:
                "Quick, tasty and affordable fast food perfect for lunch, dinner or a quick bite."
        },

        {
            name: "Savanna Grill",
            location: "Blue Post",
            cuisine: "African Cuisine",
            rating: 4.5,
            status: "Open Now",
            image: "images/food-1.jpg",
            description:
                "Experience flavorful African cuisine served in a comfortable environment."
        },

        {
            name: "Urban Pizza",
            location: "Thika CBD",
            cuisine: "Pizza",
            rating: 4.7,
            status: "Open Now",
            image: "images/food-2.jpg",
            description:
                "Freshly prepared pizzas with delicious toppings for every pizza lover."
        },

        {
            name: "Chicken Corner",
            location: "Landless",
            cuisine: "Chicken",
            rating: 4.4,
            status: "Closed",
            image: "images/gallery-1.jpg",
            description:
                "Enjoy tasty chicken meals prepared with flavorful spices and fresh ingredients."
        },

        {
            name: "Burger Station",
            location: "Thika CBD",
            cuisine: "Burgers",
            rating: 4.6,
            status: "Open Now",
            image: "images/gallery-2.jpg",
            description:
                "Juicy burgers, crispy sides and refreshing drinks in the heart of Thika."
        },

        {
            name: "Sweet Treats Café",
            location: "Section 9",
            cuisine: "Desserts",
            rating: 4.5,
            status: "Open Now",
            image: "images/gallery-3.jpg",
            description:
                "A sweet destination for cakes, desserts, pastries and refreshing drinks."
        }

    ];



    /* =========================================================
       DISPLAY EATERIES
       ========================================================= */

    const eateriesGrid =
        document.getElementById("eateriesGrid");

    const eaterySearch =
        document.getElementById("eaterySearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const locationFilter =
        document.getElementById("locationFilter");

    const noResults =
        document.getElementById("noResults");


    function displayEateries(data) {

        if (!eateriesGrid) return;

        eateriesGrid.innerHTML = "";


        if (data.length === 0) {

            if (noResults) {
                noResults.style.display = "block";
            }

            return;
        }


        if (noResults) {
            noResults.style.display = "none";
        }


        data.forEach(eatery => {

            const card = document.createElement("div");

            card.className = "eatery-card";


            card.innerHTML = `

                <div class="eatery-image">

                    <img
                        src="${eatery.image}"
                        alt="${eatery.name}"
                    >

                    <span class="eatery-status ${
                        eatery.status === "Open Now"
                            ? "open"
                            : "closed"
                    }">

                        ${eatery.status}

                    </span>

                </div>


                <div class="eatery-content">

                    <h3>${eatery.name}</h3>


                    <p class="eatery-location">

                        <i class="fas fa-location-dot"></i>

                        ${eatery.location}

                    </p>


                    <p class="eatery-cuisine">

                        ${eatery.cuisine}

                    </p>


                    <div class="eatery-rating">

                        <span>

                            <i class="fas fa-star"></i>

                            ${eatery.rating}

                        </span>

                    </div>


                    <p class="eatery-description">

                        ${eatery.description}

                    </p>


                    <button
                        class="view-details"
                        type="button"
                    >

                        View Details

                    </button>

                </div>

            `;


            eateriesGrid.appendChild(card);

        });

    }



    /* =========================================================
       EATERIES FILTERING
       ========================================================= */

    function filterEateries() {

        if (!eateriesGrid) return;


        const searchTerm =
            eaterySearch
                ? eaterySearch.value.toLowerCase().trim()
                : "";


        const selectedCategory =
            categoryFilter
                ? categoryFilter.value
                : "All";


        const selectedLocation =
            locationFilter
                ? locationFilter.value
                : "All";


        const filtered = eateries.filter(eatery => {

            const matchesSearch =
                eatery.name.toLowerCase().includes(searchTerm) ||
                eatery.cuisine.toLowerCase().includes(searchTerm) ||
                eatery.location.toLowerCase().includes(searchTerm);


            const matchesCategory =
                selectedCategory === "All" ||
                eatery.cuisine === selectedCategory;


            const matchesLocation =
                selectedLocation === "All" ||
                eatery.location === selectedLocation;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesLocation
            );

        });


        displayEateries(filtered);

    }


    if (eaterySearch) {

        eaterySearch.addEventListener(
            "input",
            filterEateries
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterEateries
        );

    }


    if (locationFilter) {

        locationFilter.addEventListener(
            "change",
            filterEateries
        );

    }


    if (eateriesGrid) {

        displayEateries(eateries);

    }



    /* =========================================================
       MENU DATA
       ========================================================= */

    const menuItems = [

        {
            name: "Kenyan Breakfast",
            category: "Breakfast",
            description:
                "A delicious Kenyan-style breakfast to start your day.",
            price: 350,
            restaurant: "Thika Food House",
            image: "images/food-1.jpg"
        },

        {
            name: "Pancakes & Coffee",
            category: "Breakfast",
            description:
                "Soft pancakes served with freshly prepared coffee.",
            price: 450,
            restaurant: "Thika Coffee Spot",
            image: "images/food-2.jpg"
        },

        {
            name: "Beef Stew & Ugali",
            category: "Lunch",
            description:
                "Tender beef stew served with traditional Kenyan ugali.",
            price: 550,
            restaurant: "Thika Food House",
            image: "images/restaurant-1.jpg"
        },

        {
            name: "Chicken & Chips",
            category: "Lunch",
            description:
                "Crispy chicken served with golden French fries.",
            price: 650,
            restaurant: "Chicken Corner",
            image: "images/gallery-1.jpg"
        },

        {
            name: "Grilled Chicken",
            category: "Dinner",
            description:
                "Juicy grilled chicken prepared with delicious spices.",
            price: 750,
            restaurant: "Savanna Grill",
            image: "images/restaurant-3.jpg"
        },

        {
            name: "Beef Burger",
            category: "Fast Food",
            description:
                "A juicy beef burger served with crispy fries.",
            price: 600,
            restaurant: "Burger Station",
            image: "images/gallery-2.jpg"
        },

        {
            name: "Chicken Burger",
            category: "Fast Food",
            description:
                "Crispy chicken burger with fresh vegetables and sauce.",
            price: 650,
            restaurant: "Thika Bites",
            image: "images/restaurant-3.jpg"
        },

        {
            name: "Margherita Pizza",
            category: "Fast Food",
            description:
                "Classic pizza topped with cheese and fresh tomato.",
            price: 900,
            restaurant: "Urban Pizza",
            image: "images/food-2.jpg"
        },

        {
            name: "Fresh Juice",
            category: "Drinks",
            description:
                "Refreshing fruit juice prepared from fresh fruits.",
            price: 250,
            restaurant: "Thika Coffee Spot",
            image: "images/gallery-3.jpg"
        },

        {
            name: "African Tea",
            category: "Drinks",
            description:
                "Traditional Kenyan tea served hot and fresh.",
            price: 180,
            restaurant: "Thika Coffee Spot",
            image: "images/restaurant-2.jpg"
        },

        {
            name: "Chocolate Cake",
            category: "Desserts",
            description:
                "Rich and moist chocolate cake for dessert lovers.",
            price: 350,
            restaurant: "Sweet Treats Café",
            image: "images/gallery-4.jpg"
        },

        {
            name: "Fruit Cake",
            category: "Desserts",
            description:
                "Freshly baked cake with delicious fruit toppings.",
            price: 400,
            restaurant: "Sweet Treats Café",
            image: "images/gallery-5.jpg"
        }

    ];



    /* =========================================================
       DISPLAY MENU
       ========================================================= */

    const menuGrid =
        document.getElementById("menuGrid");

    const menuNoResults =
        document.getElementById("menuNoResults");

    const menuFilters =
        document.querySelectorAll(".menu-filter");


    function displayMenu(category = "All") {

        if (!menuGrid) return;

        menuGrid.innerHTML = "";


        const filteredItems =
            category === "All"
                ? menuItems
                : menuItems.filter(
                    item => item.category === category
                );


        if (filteredItems.length === 0) {

            if (menuNoResults) {
                menuNoResults.style.display = "block";
            }

            return;
        }


        if (menuNoResults) {
            menuNoResults.style.display = "none";
        }


        filteredItems.forEach(item => {

            const menuCard =
                document.createElement("div");

            menuCard.className = "menu-card";


            menuCard.innerHTML = `

                <div class="menu-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                        class="menu-item-image"
                    >

                </div>


                <div class="menu-content">

                    <span class="menu-category">

                        ${item.category}

                    </span>


                    <h3>${item.name}</h3>


                    <p class="menu-description">

                        ${item.description}

                    </p>


                    <p class="menu-restaurant">

                        <i class="fas fa-store"></i>

                        ${item.restaurant}

                    </p>


                    <div class="menu-bottom">

                        <span class="menu-price">

                            KSh ${item.price.toLocaleString()}

                        </span>


                        <button
                            class="menu-view"
                            type="button"
                        >

                            View

                            <i class="fas fa-arrow-right"></i>

                        </button>

                    </div>

                </div>

            `;


            menuGrid.appendChild(menuCard);

        });

    }



    /* =========================================================
       MENU FILTER BUTTONS
       ========================================================= */

    menuFilters.forEach(button => {

        button.addEventListener("click", () => {

            menuFilters.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const category =
                button.getAttribute("data-category");


            displayMenu(category);

        });

    });


    if (menuGrid) {

        displayMenu("All");

    }



    /* =========================================================
       GALLERY + MENU IMAGE LIGHTBOX
       ========================================================= */

    /*
       IMPORTANT:
       The menu images are generated dynamically above.
       Therefore we use event delegation below instead of
       relying only on querySelectorAll at page load.

       This allows BOTH gallery images and menu images
       to open inside the lightbox.
    */


    let lightbox =
        document.querySelector(".lightbox");


    function createLightbox() {

        if (lightbox) return;


        lightbox =
            document.createElement("div");

        lightbox.className = "lightbox";


        lightbox.innerHTML = `

            <button
                class="lightbox-close"
                type="button"
                aria-label="Close image"
            >

                &times;

            </button>


            <img
                class="lightbox-image"
                src=""
                alt="Gallery image"
            >

        `;


        document.body.appendChild(lightbox);


        const closeButton =
            lightbox.querySelector(
                ".lightbox-close"
            );


        closeButton.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener(
            "click",
            event => {

                if (event.target === lightbox) {

                    closeLightbox();

                }

            }
        );

    }


    function openLightbox(
        imageSrc,
        imageAlt
    ) {

        createLightbox();


        const image =
            lightbox.querySelector(
                ".lightbox-image"
            );


        image.src = imageSrc;

        image.alt =
            imageAlt || "Gallery image";


        lightbox.classList.add("active");


        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove("active");


        document.body.style.overflow = "";

    }



    /* =========================================================
       GALLERY IMAGE CLICK
       ========================================================= */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img, .gallery-grid img"
        );


    galleryImages.forEach(image => {

        image.style.cursor = "pointer";


        image.addEventListener(
            "click",
            () => {

                openLightbox(
                    image.src,
                    image.alt
                );

            }
        );

    });



    /* =========================================================
       MENU IMAGE CLICK
       ========================================================= */

    /*
       Menu cards are generated dynamically by displayMenu().
       Event delegation ensures that every menu image works,
       including images shown after filtering.
    */

    if (menuGrid) {

        menuGrid.addEventListener(
            "click",
            event => {

                const image =
                    event.target.closest(
                        ".menu-image img"
                    );


                if (!image) return;


                openLightbox(
                    image.src,
                    image.alt
                );

            }
        );

    }



    /* =========================================================
       ESCAPE KEY FOR LIGHTBOX
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );



    /* =========================================================
       CONTACT FORM
       ========================================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById("name");


                const email =
                    document.getElementById("email");


                const phone =
                    document.getElementById("phone");


                const subject =
                    document.getElementById("subject");


                const message =
                    document.getElementById("message");


                if (
                    !name ||
                    !email ||
                    !phone ||
                    !subject ||
                    !message
                ) {

                    return;

                }


                if (
                    name.value.trim() === "" ||
                    email.value.trim() === "" ||
                    phone.value.trim() === "" ||
                    subject.value.trim() === "" ||
                    message.value.trim() === ""
                ) {

                    alert(
                        "Please fill in all the required fields."
                    );

                    return;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;

                }


                alert(
                    "Thank you, " +
                    name.value.trim() +
                    "! Your message has been received."
                );


                contactForm.reset();

            }
        );

    }



    /* =========================================================
       ACTIVE NAVIGATION LINK
       ========================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navAnchors =
        document.querySelectorAll(
            ".nav-links a"
        );


    navAnchors.forEach(link => {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });



    /* =========================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
       ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        targetId &&
                        targetId !== "#"
                    ) {

                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }

                }
            );

        });



    /* =========================================================
       VIEW DETAILS BUTTONS
       ========================================================= */

    document.addEventListener(
        "click",
        event => {

            if (
                event.target.classList.contains(
                    "view-details"
                ) ||
                event.target.closest(
                    ".view-details"
                )
            ) {

                const button =
                    event.target.closest(
                        ".view-details"
                    );


                const card =
                    button.closest(
                        ".eatery-card"
                    );


                if (!card) return;


                const name =
                    card.querySelector("h3");


                if (name) {

                    alert(
                        "More details about " +
                        name.textContent.trim() +
                        " will be available soon."
                    );

                }

            }

        }
    );



    /* =========================================================
       MENU VIEW BUTTONS
       ========================================================= */

    document.addEventListener(
        "click",
        event => {

            const menuButton =
                event.target.closest(
                    ".menu-view"
                );


            if (!menuButton) return;


            const menuCard =
                menuButton.closest(
                    ".menu-card"
                );


            if (!menuCard) return;


            const itemName =
                menuCard.querySelector("h3");


            if (itemName) {

                alert(
                    "More details about " +
                    itemName.textContent.trim() +
                    " will be available soon."
                );

            }

        }
    );



    /* =========================================================
       BACK TO TOP BUTTON
       ========================================================= */

    let backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (!backToTop) {

        backToTop =
            document.createElement(
                "button"
            );


        backToTop.className =
            "back-to-top";


        backToTop.innerHTML =
            '<i class="fas fa-arrow-up"></i>';


        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );


        document.body.appendChild(
            backToTop
        );

    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* =========================================================
       FINISHED
       ========================================================= */

    console.log(
        "Thika Eateries JavaScript loaded successfully."
    );

});