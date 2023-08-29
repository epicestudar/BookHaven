// Função para adicionar ouvintes de evento aos botões de rolagem
const addButtonListeners = (carousel, firstCardWidth) => {
    const arrowBtns = carousel.parentElement.querySelectorAll("i");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carouselProducts");
    const firstCardWidth = carousels[0].querySelector(".card").offsetWidth;

    carousels.forEach(carousel => {
        const carouselChildrens = [...carousel.children];

        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        addButtonListeners(carousel, firstCardWidth);

        const dragStart = (e) => {
            // ...
        }

        document.addEventListener("DOMContentLoaded", function () {
            const wrapper = document.querySelector(".wrapper");
            const carousel = document.querySelector(".carouselProducts");
            const firstCardWidth = carousel.querySelector(".card").offsetWidth;
            const arrowBtns = document.querySelectorAll(".wrapper i");
            const carouselChildrens = [...carousel.children];

            let isDragging = false,
                isAutoPlay = true,
                startX, startScrollLeft, timeoutId;

            let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

            carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });

            carouselChildrens.slice(0, cardPerView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });

            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");

            // Função para adicionar ouvinte de evento a um botão específico
            const addButtonListener = (btn) => {
                btn.addEventListener("click", () => {
                    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
                });
            }

            // Adicione os ouvintes de evento a todos os botões
            arrowBtns.forEach(addButtonListener);

            const dragStart = (e) => {
                isDragging = true;
                carousel.classList.add("dragging");
                startX = e.pageX;
                startScrollLeft = carousel.scrollLeft;
            }

            const dragging = (e) => {
                if (!isDragging) return;
                carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
            }

            const dragStop = () => {
                isDragging = false;
                carousel.classList.remove("dragging");
            }

            const infiniteScroll = () => {
                if (carousel.scrollLeft === 0) {
                    carousel.classList.add("no-transition");
                    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                    carousel.classList.remove("no-transition");
                } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                    carousel.classList.add("no-transition");
                    carousel.scrollLeft = carousel.offsetWidth;
                    carousel.classList.remove("no-transition");
                }

                clearTimeout(timeoutId);
                if (!wrapper.matches(":hover")) autoPlay();
            }

            const autoPlay = () => {
                if (window.innerWidth < 800 || !isAutoPlay) return;
                timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
            }
            autoPlay();

            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("scroll", infiniteScroll);
            wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.addEventListener("mouseleave", autoPlay);
        });

    });
});





document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".button-hover-background");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotalSpan = document.querySelector(".cart-total");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const cartAddButton = document.getElementById("openCartSideBar")

    cartAddButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (cartSidebar.style.right === "0px") {
            cartSidebar.style.right = "-300px";
        } else {
            cartSidebar.style.right = "0";
        }
    });

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = button.closest(".event-card");
            const productName = productCard.querySelector(".product-title").innerText;
            const productPrice = parseFloat(productCard.querySelector(".product-price").innerText.replace("R$", ""));
            const productImageSrc = productCard.querySelector(".product-image").getAttribute("data-img-src");
    
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <div class="cart-item-content">
                    <img src="${productImageSrc}" alt="${productName}" class="cart-item-image"> <!-- Adicione a classe "cart-item-image" -->
                    <div class="cart-item-details">
                        <span>${productName}</span>
                        <span>R$${productPrice.toFixed(2)}</span>
                        <button class="remove-from-cart">Remover</button>
                    </div>
                </div>
            `;

            cartItemsList.appendChild(cartItem);
            cartTotal += productPrice;
            cartTotalSpan.innerText = `R$${cartTotal.toFixed(2)}`;

            cartSidebar.style.right = "0";

            const removeButtons = cartItemsList.querySelectorAll(".remove-from-cart");
            removeButtons.forEach(removeButton => {
                removeButton.addEventListener("click", function () {
                    const itemToRemove = removeButton.closest(".cart-item");
                    const itemPrice = parseFloat(itemToRemove.querySelector("span:nth-child(2)").innerText.replace("R$", ""));

                    cartItemsList.removeChild(itemToRemove);
                    cartTotal -= itemPrice;
                    cartTotalSpan.innerText = `R$${cartTotal.toFixed(2)}`;

                    if (cartItemsList.children.length === 0) {
                        cartSidebar.style.right = "-300px";
                    }
                });
            });
        });
    });



    cartAddButton.forEach(cartButton => {
        cartButton.addEventListener("click", function () {
            cartSidebar.style.right = "0";
        })
    })















});