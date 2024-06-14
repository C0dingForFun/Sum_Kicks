
let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'))
let tbody = document.querySelector('tbody');
console.log(purchasedKicks);
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    tbody.innerHTML += `
                <tr ">
                    <td><img src="${item.image}" id="cart"</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
            `
}
