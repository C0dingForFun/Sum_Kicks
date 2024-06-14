
let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'))
let main = document.querySelector('main');
console.log(purchasedKicks);
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    main.innerHTML += `
                    <div id="cart">
                        <img src="${item.image}" id="cart"</td>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                    </div>
            `
})
