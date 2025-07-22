debugger    
async function getData(){
   let response = await fetch("https://dummyjson.com/products")
   let data = await response.json()
   let {products} = data
   let cardContainer = document.getElementById("cards")
   products.map((pro)=>{
    let {title, description, price, images} = pro
    cardContainer.innerHTML += `
    <div class="product-card">
            <div class="product-img">
                <img src="${images[0]}" alt=""  >
            </div>
            <div>
                <div class="produt-title">
                    <div class="title"> <span> ${title} </span> </div>
                    <div class="price"> <span> ${price} </span> </div>
                    
                </div>
                <div class="description">                    
                    <span> ${description} </span>
                </div>
                <div class="buy-now">Add to Cart</div>
            </div>
    </div>
    
    `
   })
   
    
}
getData()