let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'));
let cart = document.querySelector('#cart');
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    cart.innerHTML += `
                <div class="container-fluid">
                    <div class="cart-container">
                        <div>
                            <img src="${item.image}" class="img-responsive" style="width:10rem;" loading="lazy">
                        </div>
                        <div>
                            <h5>${item.name}</h5>
                            <p>R${item.price}</p>     
                        </div>
                    </div>
                </div>      
            
            `
});

