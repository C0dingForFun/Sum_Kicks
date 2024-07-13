function trendingKicks(id, gender, name, image, description, quantity, price){
    this.id = id;
    this.gender = gender;
    this.name = name;
    this.image = image;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
        const nMen1 = new trendingKicks(1, 'Men', 'Air Force 1',
          'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Force1(White).png',
          'The radiance lives on in the Nike Air Force 1 07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.', 
          1,1700);
        const pMen2 = new trendingKicks(2, 'Men', 'Caven Mid',
          'https://c0dingforfun.github.io/kicksPics/Images/Puma/Men/Caven_Mid.png',
           'This design takes the throwback courtside cool of the Craven 2.0 up a notch with a fresh mid-height spin on the classic silhouette. Kick it like an ‘80s kid with a sleek shape and stacked sole. Step into the future with a beautiful blast from the past.',
           1,1300);
        const aWomen3 = new trendingKicks(3,'Women','Breaknet 2.0',
           'https://c0dingforfun.github.io/kicksPics/Images/Addidas/Women/Breaknet_2_0.png',
           'Whether you are headed to a weekend hangout or running daily errands, do it in style with these adidas shoes. The clean silhouette gives you a classic look that works with any outfit. A comfortable synthetic upper and grippy rubber outsole make this the go-to pair for all your moves. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',
           1,1520)
  
      let tProducts = document.querySelector('#trending');   
      let tKicks = [nMen1, pMen2, aWomen3,]
      let trending = [nMen1, pMen2, aWomen3]
      
      localStorage.setItem('trending', JSON.stringify('trending'));
  
      tKicks.forEach(trend => {
          tProducts.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                    <div class="w-100">
                                      <img src="${trend.image}" class="card-img-top">
                                    </div>
                                      <div class="card-body">
                                          <h5 class="card-title">${trend.name}</h5>
                                          <p class="card-text">${trend.gender}</p>
                                          <p class="card-text">R${trend.price}</p>
                                     </div>    
                                  </div>  
                              `
          });

function salesKicks(id, gender, name, image, description, quantity, price){
  this.id = id;
  this.gender = gender;
  this.name = name;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
        const pMen1 = new salesKicks(1, 'Men', 'Slipstream Leather(Men)',
        'https://c0dingforfun.github.io/kicksPics/Images/Puma/Men/Slipstream_Leather.png',
        'Back in 1987, the PUMA Slipstream Mid entered the scene as a basketball sneaker. A high-flying, slam-dunking, statement-making basketball sneaker. Now, it’s joined by the Slipstream – a rework of the original that brings an all-new energy to the game while staying true to the OG’s sporting roots.',
         1,1600);
          const aWomen2 = new salesKicks(2,'Women','NMD_W1T',
          'https://c0dingforfun.github.io/kicksPics/Images/Addidas/Women/NMD_W1.png',
          'The NMD W1 features a full-length drop in boost midsole, an upper composed of suede overlays and premium leather with mesh underlays and heel details.', 
          1,1340);
        const nMen3 = new salesKicks(3, 'Men', 'Air Max',
        'https://c0dingforfun.github.io/kicksPics/Images/Nike/Men/Air_Max(Yellow&Black).png',
        'Lace up and feel the legacy in a champion running shoe that helped define the 90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Air cushioning keep the Air Max 90 alive and well.',
        1,1300);
  
      let sProducts = document.querySelector('#sales');   
      let sKicks = [pMen1, aWomen2, nMen3]
      let sales = [pMen1, aWomen2, nMen3]
      
      localStorage.setItem('sales', JSON.stringify('sales'));
  
      sKicks.forEach(sales => {
          sProducts.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                    <div class="w-100">
                                      <img src="${sales.image}" class="card-img-top">
                                    </div>
                                      <div class="card-body">
                                          <h5 class="card-title">${sales.name}</h5>
                                          <p class="card-text">${sales.gender}</p>
                                          <p class="card-text">R${sales.price}</p>
                                     </div>    
                                  </div>  
                              `
          });
  