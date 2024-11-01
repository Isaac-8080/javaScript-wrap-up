const getProductsContainer = document.querySelector('#productsContainer');
const getCartsContainer = document.querySelector('#cartsContainer');
const getCartsCounter = document.querySelector('#cartsCounter');
const getCartsBtns = document.querySelector('#cartBtn');
const hideCart = document.querySelectorAll('.hideCart');

const getCartItems = [];

let counter = 0;

const products = [
  {
    name: 'Apple AirPods',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80'
  },
  {
    name: 'Iphone 16 pro',
    price: 999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725567335931'
  },
  {
    name: 'Iphone 16',
    price: 799,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone16hero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1723234230295'
  },
  {
    name: 'Iphone 15',
    price: 699,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559'
  },
  {
    name: 'Iphone 14',
    price: 599,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654'
  },
  {
    name: 'Iphone SE',
    price: 429,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921'
  }

];


products.forEach(product => {
  
  const productsItem = (
    `
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[100%]">
      
      <div class="relative p-2.5 h-[250px] overflow-hidden rounded-xl bg-clip-border">
        <img
          src="${product.image}"
          alt="card-image"
          class="h-full w-full object-cover rounded-md"
        />
      </div>

      <div class="p-4">
        <div class="mb-2 flex items-center justify-between">
          <p class="text-slate-800 text-md font-semibold">
            ${product.name}
          </p>
          <p class="text-cyan-600 text-md font-semibold">
            $${product.price}
          </p>
        </div>
          <div class="flex flex-row items-center gap-2">
          <button class="rounded-md w-full mt-2 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none addCart" type="button" onClick='addToCart(${JSON.stringify(product)})'>
            Add To Cart
          </button>
          <button class="rounded-md w-full mt-2 bg-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-900 focus:shadow-none active:bg-slate-900 hover:bg-slate-900 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none removeCart" type="button" onClick='removeFromCart(${JSON.stringify(product)})'>
            Remove
          </button>
        </div>
      </div>

    </div>`
  );

  getProductsContainer.innerHTML += productsItem;

});


function addToCart(product) {

  getCartItems.push(product);

  displayCart();

  countCart();
  
}

function removeFromCart(product) {

  getCartItems.pop(product);

  displayCart();

  countCart();
  
}

// elements to display when array container is empty
if (getCartItems.length === 0) {

  getCartItems.length = 0;

  const display = (
    `
    <div class="flex flex-row absolute items-center text-center justify-center md:w-[100%] h-[100%]">
      <p class="font-semibold text-lg">Sorry, cart is empty...</p>
    </div>
    `
  )

  getCartsContainer.innerHTML = display;

}

// function that hold cart elements
function displayCart() {
  
  getCartsContainer.innerHTML = '';

  getCartItems.forEach(item => {
    
    const cartItem = (
      `
      <div class="flex flex-row items-center gap-2 h-fit bg-[#F2F2F2] p-3 rounded-md">
          
        <img
        src="${item.image}"
        class="h-[60px] w-[60px] object-cover rounded-md"
        />
                
        <div class="flex flex-col">
          <p class="text-slate-800 text-sm font-semibold">
            ${`Product : ${item.name}`}
          </p>
          <p class="text-slate-800 text-sm font-semibold">
            ${`Price : ${item.price}`}
          </p>
        </div>
          
      </div>
      `
    );
      
    getCartsContainer.innerHTML += cartItem;

  });
  
}

const countCart = () => {

  if (getCartItems.push) {
    
    getCartsCounter.textContent = getCartItems.length;

  } else if (getCartItems.pop){

    getCartsCounter.textContent = getCartItems.length - 1;

  }

}

getCartsBtns.addEventListener('click', () => {
  
  const cartWapper = document.querySelector('#cartWapper');

  if (cartWapper.classList.contains('hidden')) {
    cartWapper.classList.remove('hidden');
    cartWapper.classList.add('visible');
  }

});

// hide cart
hideCart.forEach(hide => {
  hide.addEventListener('click', () => {
    if (cartWapper.classList.contains('visible')) {
      cartWapper.classList.remove('visible');
      cartWapper.classList.add('hidden');
    }
  })
});