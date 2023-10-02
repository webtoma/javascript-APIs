/* Comment on top of my file */

function getFormattedProducts(products){
    let productsDisplay = ''
    products.forEach(product => {
        productsDisplay += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top"
                    src="${product.images[0]}"
                    alt="...">
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h6 class="fw-bolder">${product.brand}</h6>
                        <h5 class="fw-bolder">${product.title}</h5>
                        <!-- Product price-->
                        ${product.price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="single-product.html">View Product</a>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    return productsDisplay;
}
function getFormattedPosts(posts){
    let postsDisplay = ''
    posts.forEach(post => {
        postsDisplay += `
        <div class="col-lg-6">
            <div class="card mb-4">
                <a href="#!"><img class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."></a>
                <div class="card-body">
                    <div class="small text-muted">${post.tags[0]}</div>
                    <h2 class="card-title h4">${post.title}</h2>
                    <p class="card-text">${post.body}</p>
                    <a class="btn btn-primary" href="single-post.html">Read more →</a>
                </div>
            </div>
        </div>
        `
    })
    return postsDisplay;
}



function displayProducts(){
    
    let products = []
    products = fetch('https://dummyjson.com/products', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        productsDiv = getFormattedProducts(data.products)
        document.getElementById('products_list').innerHTML = productsDiv
    })
    .catch(error => console.log(error))
}
function displayPosts(){
    let posts = [];
    posts = fetch('https://dummyjson.com/posts', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        postsDiv = getFormattedPosts(data.posts)
        document.getElementById('posts_list').innerHTML = postsDiv
    })
    .catch(error => console.log(error))
}


displayProducts();
displayPosts();