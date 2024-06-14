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
  
      let tProducts = document.querySelector('#trending');   
      let tKicks = [nMen1, nMen2, nMen3,]
      let kicks = [nMen1, nMen2, nMen3,,]
      
      localStorage.setItem('trending', JSON.stringify('trending'));
  
      tKicks.forEach(trend => {
          nProducts.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                      <img src="${trend.image}" class="card-img-top">
                                      <div class="card-body">
                                          <h5 class="card-title">${trend.name}</h5>
                                          <p class="card-text">R${trend.price}</p>
                                     </div>    
                                  </div>  
                              `;
          });
  