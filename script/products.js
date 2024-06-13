function myKicks(id, brand, name, image, description, quantity, price){
    this.id = id;
    this.name = name;
    this.name = name;
    this.brand = brand;
    this.image = image;
    this.description = description
    this.quantity = quantity;
    this.price = price;

    
// }

// const kicks1 = new myKicks(1, 'Nike', 'Air Force 1', 
//     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(White).png'
//     ,'A mash-up of Pegasus past, the Nike P-6000 delivers an early-2000s look with breathable mesh and synthetic overlays. Vibrant colours give it a modern look while its sporty aesthetic features foam cushioning for all-day comfort.', 
//     1,29.99);
// const kicks2 = new myKicks(2, 'Nike', 'KD17 Sunrise', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/KD17(Sunrise).png',
//      'Slim-fit denim jeans for men, made with premium cotton',1, 49.99);
// const kicks3 = new myKicks(3, 'Nike', 'Air Max', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Max(Yellow&Black).png', 
//     'Noise-canceling wireless beats headphones with up to 20 hours of battery life',1, 129.99);
// const kicks4 = new myKicks(4, '', 'Books', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
//      'The latest bestselling novel by a renowned author',1, 14.99);
// const kick5 = new myKicks(5, '', 'Clothing', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
//      'Very comfortable pink hoodie',1, 39.99);



//     let kicks = [kicks1, kicks2, kicks3, kicks4, kick5]
//     let products = document.querySelector('#products');
//     localStorage.setItem('items', JSON.stringify('kicks'));
    
//     kicks.forEach(item => {
//         products.innerHTML += `
//                                 <div class="card" style="width: 18rem;">
//                                     <img src="${item.image}" class="card-img-top">
//                                     <div class="card-body">
//                                         <h5 class="card-title">${item.name}</h5>
//                                         <p class="card-text">R${item.price}</p>
//                                         <button value="${item.id}" class="products">Add To Cart</button>
//                                     </div>    
//                                 </div>  
//                      `
//     });
    
//     let purcKicks = []
    
//     let purcBtns = document.querySelectorAll('.purchase');
//     function addTocart(id){
//         let [kicks] = kicks.filter(object => object.id === +id);
//         purcKicks.push(kicks);
//         localStorage.setItem('cart',JSON.stringify(purcKicks));
//     }
    
//     purcBtns.forEach(button =>{
//         button.addEventListener('click',(event)=>{
//             addTocart(event.target.value);
//         })
//     })

//Nike
function nikeKicks(id, brand, name, image, description, quantity, price){
  this.id = id;
  this.brand = brand;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const nMen1 = new nikeKicks(1, 'Nike', 'Air Force 1',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(White).png',
    'The radiance lives on in the Nike Air Force 1 07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.', 
    1,1500);
const nMen2 = new nikeKicks(1, 'Nike', 'KD17 Sunrise',
    'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/KD17(Sunrise).png',
     'While Kevin Durant all-timer status is already cemented, his hooper soul cannot be soothed unless he is on the court, perfecting his craft. Put in the work to be great in the KD17, a shoe for gym rats and those who insist on running it back. A forefoot Air Zoom unit enhances your first step. We combined it with Nike Air cushioning to fuel full-court sprints and defensive stops that can decide games. This special design pays homage to a pair of sneakers that KD adored as a kid, which helped instil his legendary work ethic.',
      1,1500);
const nMen3 = new nikeKicks(1, 'Nike', 'Air Max',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Max(Yellow&Black).png',
      'Lace up and feel the legacy in a champion running shoe that helped define the 90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Air cushioning keep the Air Max 90 alive and well.',
       1,1500);
const nWomen1 = new nikeKicks(1, 'Nike', 'Air Force',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/Air_Force(White).png',
      'hdjdbdjdh', 1,1500);
const nWomen2 = new nikeKicks(1, 'Nike', 'Air Max',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/Air_Max(Sail&White).png', 'hdjdbdjdh', 1,1500);
const nWomen3 = new nikeKicks(1, 'Nike', 'GT-Cut Cross',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/GT_Cut_Cross.png', 'hdjdbdjdh', 1,1500);

//Puma
function pumaKicks(id, brand, name, image, description, quantity, price){
  this.id = id;
  this.brand = brand;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const pMen1 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pMen2 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pMen3 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pWomen1 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pWomen2 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pWomen3 = new pumaKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);

//Addidas
function addidasKicks(id, brand, name, image, description, quantity, price){
  this.id = id;
  this.brand = brand;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const aMen1 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const aMen2 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const aMen3 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const aWomen1 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const aWomen2 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const aWomen3 = new nikeKicks(1, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);


    let nKicks = [nMen1, nMen2, nMen3, nWomen1, nWomen2, nWomen3]
    let products = document.querySelector('#products');
    localStorage.setItem('nKicks', JSON.stringify('nKicks')) || [];
    
    nKicks.forEach(nike => {
        products.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${nike.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${nike.name}</h5>
                                        <p class="card-text">R${nike.price}</p>
                                        <button value="${nike.id}" class="products">Add To Cart</button>
                                    </div>    
                                </div>  
                     `
<<<<<<< HEAD
    });
=======
    });
    
    let purcKicks = []
    
    let purcBtns = document.querySelectorAll('.purchase');
    function addTocart(id){
        let [kicks] = kicks.filter(object => object.id === +id);
        purcKicks.push(kicks);
        localStorage.setItem('cart',JSON.stringify(purcKicks));
    }
    
    purcBtns.forEach(button =>{
        button.addEventListener('click',(event)=>{
            addTocart(event.target.value);
        })
    })




>>>>>>> 610176c8563b71f51c5d620d2280cfd6036ea2fd
