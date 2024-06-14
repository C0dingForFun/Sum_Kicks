let purchasedNikes = localStorage.getItem('purchNike')
let tbody = document.querySelector('tbody');


purchasedNikes.forEach(nike => {
    tbody.innerHTML += `
                <tr>
                <td>${nike.image}</td>
                <td>${nike.price}</td>
                </tr>                 
                        `
});