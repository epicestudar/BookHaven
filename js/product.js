document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn-card");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotalSpan = document.querySelector(".cart-total");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const cartAddButtons = document.querySelectorAll(".cart-add-button");

    cartAddButtons.forEach(cartButton => {
        cartButton.addEventListener("click", function () {
            cartSidebar.style.right = "0";
        });
    });

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = button.closest(".card");
            const productName = productCard.querySelector(".card-title").innerText;

           
            const productPriceText = button.innerText.replace("Comprar R$", "");
            const productPrice = parseFloat(productPriceText);

            const productImageSrc = productCard.querySelector(".card-img-top").getAttribute("src");

            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <div class="cart-item-content">
                    <img src="${productImageSrc}" alt="${productName}" class="cart-item-image">
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
});
