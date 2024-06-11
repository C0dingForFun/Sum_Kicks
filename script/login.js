let user = document.querySelectorAll('input')[0];
let pass = document.querySelectorAll('input')[1];
let login = document.getElementsByClassName('login')[0]

function Login(username, password){
    this.username = username;
    this.password = password;
}

// const admin1 = new Login['Admin1', 'Admin101']
// const admin2 = new Login['Admin2', 'Admin102']
// const Admin = [admin1, admin2]


// Admin.forEach(item => {
//     login.addEventListener('click', ()=>{
//         if(user == `${item.username}` && pass == `${item.password}` ){
//             window.location.assign("/admin.html");
//         }
//     })
// });
