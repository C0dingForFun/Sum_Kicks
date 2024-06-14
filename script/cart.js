
let purchasedKicks = JSON.parse(localStorage.getItem('nikeKicks'))
let tbody = document.querySelector('tbody');
console.log(purchasedKicks);
localStorage.setItem('cart', JSON.stringify(purchasedKicks))

purchasedKicks.forEach(item => {
    tbody.innerHTML += `
<<<<<<< HEAD
                <tr>
                <td>${item.image}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                </tr>                 
            `
});
=======
                <tr ">
                    <td><img src="${item.image}" id="cart"</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
            `
}
>>>>>>> b2ac6e58cc9672e5b1cb31a972598e8fe4de139c
