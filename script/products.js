function myKicks(id, name, category, image,description, quantity, price){
    this.id = id;
    this.name = name;
    this.category = category;
    this.image = image;
    this.description = description
    this.quantity = quantity;
    this.price = price;
    
}

const item1 = new myKicks(1, '', '', 
    'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png'
    ,'A mash-up of Pegasus past, the Nike P-6000 delivers an early-2000s look with breathable mesh and synthetic overlays. Vibrant colours give it a modern look while its sporty aesthetic features foam cushioning for all-day comfort.', 
    1,29.99);
const item2 = new myKicks(2, '', 'Clothing', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
     'Slim-fit denim jeans for men, made with premium cotton',1, 49.99);
const item3 = new myKicks(3, '', 'Electronics', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png', 
    'Noise-canceling wireless beats headphones with up to 20 hours of battery life',1, 129.99);
const item4 = new myKicks(4, '', 'Books', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
     'The latest bestselling novel by a renowned author',1, 14.99);
const item5 = new myKicks(5, '', 'Clothing', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
     'Very comfortable pink hoodie',1, 39.99);
    
    let items = [item1, item2, item3, item4, item5]
    let main = document.querySelector('main');
    localStorage.setItem('items', JSON.stringify('items'));
    
    items.forEach(item => {
        main.innerHTML += `
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="card products" style="width: 18rem;">
                                    <img src="${item.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">R${item.price}</p>
                                    <button value="${item.id}">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                     `
    });
    
    // let purcItems = []
    
    // let purcBtns = document.querySelectorAll('.purchase');
    
    // function addTocart(id){
    //     let [item] = items.filter(object => object.id === +id);
    //     purcItems.push(item);
    //     localStorage.setItem('cart',JSON.stringify(purcItems));
    // }
    
    // purcBtns.forEach(button =>{
    //     button.addEventListener('click',(event)=>{
    //         addTocart(event.target.value);
    //     })
    // })


