function myKicks(id, brand, name, image, description, quantity, price){
    this.id = id;
    this.name = name;
    this.name = name;
    this.brand = brand;
    this.image = image;
    this.description = description
    this.quantity = quantity;
    this.price = price;
    
}

const kicks1 = new myKicks(1, 'Nike', 'Air Force 1', 
    'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(White).png'
    ,'A mash-up of Pegasus past, the Nike P-6000 delivers an early-2000s look with breathable mesh and synthetic overlays. Vibrant colours give it a modern look while its sporty aesthetic features foam cushioning for all-day comfort.', 
    1,29.99);
const kicks2 = new myKicks(2, 'Nike', 'KD17 Sunrise', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/KD17(Sunrise).png',
     'Slim-fit denim jeans for men, made with premium cotton',1, 49.99);
const kicks3 = new myKicks(3, 'Nike', 'Air Max', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Max(Yellow&Black).png', 
    'Noise-canceling wireless beats headphones with up to 20 hours of battery life',1, 129.99);
const kicks4 = new myKicks(4, '', 'Books', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
     'The latest bestselling novel by a renowned author',1, 14.99);
const kick5 = new myKicks(5, '', 'Clothing', 'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(Black).png',
     'Very comfortable pink hoodie',1, 39.99);
    
    let kicks = [kicks1, kicks2, kicks3, kicks4, kick5]
    let products = document.querySelector('#products');
    localStorage.setItem('items', JSON.stringify('kicks'));
    
    kicks.forEach(item => {
        products.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${item.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">R${item.price}</p>
                                        <button value="${item.id}" class="products">Add To Cart</button>
                                    </div>    
                                </div>  
                     `
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


