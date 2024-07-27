import { products } from '../backend/products.js';
import { formatCurrency } from '../script/utils.js';

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-card bg-white shadow-sm shadow-black p-3 rounded-md js-product-grid flex flex-col">
        <div class="flex justify-center h-48">
        <img src="${product.image}" class="w-full h-auto rounded-md">
        </div>

        <div class="pInfo mt-4 flex flex-col flex-grow justify-between">    

            <div class="px-3 text-lg text-black">
                ${product.name}
            </div>

            <div class="ratings mx-3 flex items-center">
                <img src="images/ratings/rating-${product.rating.stars * 10}.png" class="h-6">
                <div class="text-blue-500 mx-2">
                    ${product.rating.count}
                </div>
            </div>
            <div class="price mx-3 font-bold text-black">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container mx-3">
                <select class="rounded-md">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <button class="bg-yellow-500 font-bold text-white px-4 py-2 w-full rounded-full hover:bg-yellow-600 mt-8 mb-5 bottom-5" data-product-id="${product.id}">
                Add To Cart
            </button>

        </div>
    </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;
