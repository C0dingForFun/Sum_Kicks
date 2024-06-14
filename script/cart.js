let purchasedNikes = JSON.parse(localStorage.getItem('nikeKicks'))
let tbody = document.querySelector('tbody');


purchasedNikes.forEach(item => {
    tbody.innerHTML += `
                <tr>
                    <td><img src="${item.image}"</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                </tr>                 
                        `
});