let username = document.querySelectorAll('input')[0];
let password = document.querySelectorAll('input')[1];
let login = document.querySelector('button');

function Login(username, password){
    this.username = username;
    this.password = password;
}

const admin1 = new Login['Admin1', 'Admin101']
const admin2 = new Login['Admin2', 'Admin102']
const Admin = [admin1, admin2]

Admin.forEach(item => {
    login.addEventListener('click', ()=>{
        if(username == `${item.username}` && password == `${item.password}` ){
            window.location.replace = "https://www.w3schools.com";
        }
    })
});
