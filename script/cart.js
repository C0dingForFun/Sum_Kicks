let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks')) || [];
let cart = document.querySelector('#cart');
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    cart.innerHTML += `
                <div class="container-fluid">
                 <div class="cart-container">
                       <div class="card mb-2 mx-auto" style="max-width: 50vw;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${item.image}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            `
});
