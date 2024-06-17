let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'));
let cart = document.querySelector('#cart');
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    cart.innerHTML += `         
                <div>
                    <img src="${item.image}" class="img-resposive">
                </div>
                <div>
                <h5>${item.name}</h5>
                <p>R${item.price}</p>     
                </div>
            
            `
});

