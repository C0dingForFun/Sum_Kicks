let purchasedNikes = JSON.parse(localStorage.getItem('nikeKicks'))
let tbody = document.querySelector('tbody');
console.log(purchasedNikes);
localStorage.setItem('cart', JSON.stringify(purchasedNikes))

purchasedNikes.forEach(item => {
    tbody.innerHTML += `
                <tr ">
                    <td><img src="${item.image}" id="cart"</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                </tr>                 
                        `
});