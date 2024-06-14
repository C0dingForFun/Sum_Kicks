let items = JSON.parse(localStorage.getItem('nikeKicks'))
let tbody = document.querySelector('tbody');
console.log(purchasedKicks);
localStorage.setItem('cart', JSON.stringify(items))

purchasedKicks.forEach(item => {
    tbody.innerHTML += `
                <tr>
                    <td>${item.image}</td>
                    <td>${item.brand}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                </tr>                 
            `
});
