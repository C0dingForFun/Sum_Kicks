
let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'))
let cart = document.querySelector('#cart');
console.log(purchasedKicks);
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    cart.innerHTML += `
                        <img src="${item.image}" 
                        <p>Product Name: ${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price Of Item: ${item.price}</p>
            `
})
