let purchasedNikes = JSON.parse(localStorage.getItem('purchNike'))
let tbody = document.querySelector('tbody');


purchasedNikes.forEach(item => {
    tbody.innerHTML += `
                <tr>
                <td>${item.image}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                </tr>                 
                        `
});