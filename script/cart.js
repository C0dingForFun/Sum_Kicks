
// let Kicks = JSON.parse(localStorage.getItem('Kicks'));
let purchased = JSON.parse(localStorage.getItem('cart'));
let tbody = document.querySelector('tbody')

    purchased.forEach(item => {
        tbody.innerHTML += `
                    <tr>
                        <td> <img src="${item.image}" ></td>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                    </tr>                 
                            `
});