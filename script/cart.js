
let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'))
let cart = document.querySelector('#cart');
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    cart.innerHTML += `         
                <div style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top">
                </div>
                <div>
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">R${item.price}</p>     
                </div>
            
            `
});

