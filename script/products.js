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
const nMen1 = new nikeKicks(1, 'Nike', 'Air Force 1(Men)',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(White).png',
    'The radiance lives on in the Nike Air Force 1 07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.', 
    1,1700);
const nMen2 = new nikeKicks(2, 'Nike', 'KD17 Sunrise(Men)',
    'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/KD17(Sunrise).png',
     'While Kevin Durant all-timer status is already cemented, his hooper soul cannot be soothed unless he is on the court, perfecting his craft. Put in the work to be great in the KD17, a shoe for gym rats and those who insist on running it back. A forefoot Air Zoom unit enhances your first step. We combined it with Nike Air cushioning to fuel full-court sprints and defensive stops that can decide games. This special design pays homage to a pair of sneakers that KD adored as a kid, which helped instil his legendary work ethic.',
      1,1400);
const nMen3 = new nikeKicks(3, 'Nike', 'Air Max(Men)',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Max(Yellow&Black).png',
      'Lace up and feel the legacy in a champion running shoe that helped define the 90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Air cushioning keep the Air Max 90 alive and well.',
       1,1300);
const nWomen1 = new nikeKicks(4, 'Nike', 'Air Force 1(Women)',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/Air_Force(White).png',
      'hdjdbdjdh', 1,1500);
const nWomen2 = new nikeKicks(5, 'Nike', 'Air Max (Women)',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/Air_Max(Sail&White).png',
      'hdjdbdjdh', 1,1300);
const nWomen3 = new nikeKicks(6, 'Nike', 'GT-Cut Cross (Women)',
     'https://c0dingforfun.github.io/kicksPics/Images/Nike/Women/GT_Cut_Cross.png',
      'hdjdbdjdh', 1,1100);

// Puma
function pumaKicks(id, brand, name, image, description, quantity, price){
  this.id = id;
  this.brand = brand;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const pMen1 = new pumaKicks(1, 'Puma', 'Slipstream Leather(Men)',
     'https://c0dingforfun.github.io/kicksPics/Images/Puma/Men/Slipstream_Leather.png',
     'hdjdbdjdh', 1,1500);
const pMen2 = new pumaKicks(2, 'Puma', 'Caven Mid(Men)',
     'https://c0dingforfun.github.io/kicksPics/Images/Puma/Men/Caven_Mid.png', 'hdjdbdjdh', 1,1500);
const pMen3 = new pumaKicks(3, 'Puma', 'RBD Game(Men)',
     'https://c0dingforfun.github.io/kicksPics/Images/Puma/Men/RBD_Game.png', 'hdjdbdjdh', 1,1500);
const pWomen1 = new pumaKicks(4, 'Puma', 'Puma',
     'https://c0dingforfun.github.io/kicksPics/Images/Puma/Women/', 'hdjdbdjdh', 1,1500);
const pWomen2 = new pumaKicks(5, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);
const pWomen3 = new pumaKicks(5, 'Nike', 'Air Max', 'drjdjdhhdh', 'hdjdbdjdh', 1,1500);

// Addidas
function addidasKicks(id, brand, name, image, description, quantity, price){
  this.id = id;
  this.brand = brand;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const aMen1 = new addidasKicks(1,'Addidas','hjj',
    'hokhh','uevfuiev',1,1300)
const aMen2 = new addidasKicks(1,'Addidas','hjj','hokhh','uevfuiev',1,1300)
const aMen3 = new addidasKicks(1,'Addidas','hjj','hokhh','uevfuiev',1,1300)
const aWomen1 = new addidasKicks(1,'Addidas','hjj','hokhh','uevfuiev',1,1300)
const aWomen2 = new addidasKicks(1,'Addidas','hjj','hokhh','uevfuiev',1,1300)
const aWomen3 = new addidasKicks(1,'Addidas','hjj','hokhh','uevfuiev',1,1300)


    let nKicks = [nMen1, nMen2, nMen3, nWomen1, nWomen2, nWomen3]
    let view = document.querySelector('#view');
    let pKicks = [pMen1, pMen2, pMen3, pWomen1, pWomen2, pWomen3]
    // let aKicks = [aMen1, aMen2, aMen3, aWomen1, aWomen2, aWomen3]

    let nProducts = document.querySelector('#nike');
    let pProducts = document.querySelector('#puma');
    let aProducts = document.querySelector('#addidas');
    localStorage.setItem('nKicks', JSON.stringify('nKicks')) || [];
    // let modal = document.querySelector('#staticBackdrop');
    
    nKicks.forEach(nike => {
        nProducts.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${nike.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${nike.name}</h5>
                                        <p class="card-text">R${nike.price}</p>
                                        <button id="view" type="button" value="${nike.id}" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop${nike.id}">View product</button>
                                        <button value="${nike.id}" class="products">Add To Cart</button>
                                        <div class="modal fade" id="staticBackdrop${nike.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title text-center fs-5" id="staticBackdropLabel">${nike.name}</h1>
                                                </div>
                                                <div class="modal-body w-80 row ">
                                                    <div class="products-img">
                                                    <img src="${nike.image}" style="width:10rem;">
                                                    <p>${nike.description}</p>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                     </div>  
                                   </div>    
                                </div>  
                            `;

        // modal.innerHTML = `${nike.id}`

        });

    pKicks.forEach(puma => {
        pProducts.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${puma.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${puma.name}</h5>
                                        <p class="card-text">R${puma.price}</p>
                                        <button id="view" type="button" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1${puma.id}">View product</button>
                                        <button value="${puma.id}" class="products">Add To Cart</button>
                                        <div class="modal fade" id="staticBackdrop1${puma.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title text-center fs-5" id="staticBackdropLabel">${puma.name}</h1>
                                                </div>
                                                <div class="modal-body w-80 row">
                                                    <div class="products-img">
                                                    <img src="${puma.image}" style="width:10rem;">
                                                    <p>${puma.description}</p></div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                     </div>  
                                   </div>    
                                </div>  
                            `

        });

    aKicks.forEach(addidas => {
        aProducts.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${nike.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${nike.name}</h5>
                                        <p class="card-text">R${nike.price}</p>
                                        <button id="view" type="button" value="${nike.id}" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View product</button>
                                        <button value="${nike.id}" class="products">Add To Cart</button>
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title text-center fs-5" id="staticBackdropLabel">${nike.name}</h1>
                                                </div>
                                                <div class="modal-body w-80 row">
                                                    <div><img src="${nike.image}" style="width:10rem;">
                                                    <p>${nike.description}</p></div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                     </div>  
                                   </div>    
                                </div>  
                            `

        });

    
    // nKicks.forEach(button =>{
    //     button.addEventListener('click',(event)=>{
    //         viewKicks(event.target.value);
    //     })
    // })

    // function viewKicks(id){
    //         let [nKicks] = nKicks.filter(object => object.id === +id);
        
    // }
    // viewKicks();
    // function viewKicks() {
    //     try {
    //         const viewKicks = nKicks.id;
    //         // nKicks[index] = viewKicks;
    //         // localStorage.setItem('products', JSON.stringify(products));
    //         // adminContent(products);
    //     } catch (e) {
    //         alert('Cannot find shoe');
    //     }
    // }
    
//     let purcKicks = []
    
//     let purcBtns = document.querySelectorAll('.purchase');
    // function addTocart(id){
    //     let [kicks] = kicks.filter(object => object.id === +id);
    //     purcKicks.push(kicks);
    //     localStorage.setItem('cart',JSON.stringify(purcKicks));
    // }
    
//     purcBtns.forEach(button =>{
//         button.addEventListener('click',(event)=>{
//             addTocart(event.target.value);
//         })
//     })
// }
