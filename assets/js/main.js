async function getproducts() {
    try {
        const data = await fetch(
            "https://ecommercebackend.fundamentos-29.repl.co/"
        );

        const res = await data.json();
        window.localStorage.setItem("products",JSON.stringify(res));
    
        return res;
    
    } catch (error) {
        console.log(error);
    }     
}

function printProducts(db) {
    const productsHTML = document.querySelector(".products");

    let html = "";

    for (const product of db.products) {
        html += `
        <div class="product">
            <div class="product__img">
                <img src="${product.image}" alt="image"/>
            </div>

            <i class='bx bx-plus' id='${product.id}'></i>
            <div class="product__info">
            
                <h5>$${product.price}US  | <span><Stock</b>Stock ${product.quantity}</span>
                </h5>
                <h4>${product.name}
                </h4>
            </div>
        
        </div>
        
        `;
    }

    productsHTML.innerHTML = html;

    
}

async function main() {
    const db = {
        products: JSON.parse(window.localStorage.getItem("products")) || (await getproducts()),
        cart:{},
    } 
    printProducts(db)
    
    
};
main();