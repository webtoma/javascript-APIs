/* ECOMMERCE ITEMS */
// Getting the information from JsonPlaceHolder
/* async function fetchProductData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const products = await response.json();
        console.log(products);
        return products.slice(0, 6);  // Limiting to 6 products for this example
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
} */

// Inserting the data from the JSON file into the HTML.
/* function createProductCards(products) {
    const productContainer = document.getElementById('product-container');
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="col, mb-5">
        <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${product.url}" alt="Product Image">
                <!-- Product details-->
                <div class="card-body p-4">
                <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${product.title}</h5>
                        <!-- Product price-->
                        $${(index + 1) * 20}.00
                    </div>
                    </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                    </div>
                    </div>
                    </div>
                    `;
                    
                    productContainer.appendChild(card);
                });
            }
;
 */
/* FEATURED ARTICLE */
// Getting the information from JsonPlaceHolder
/* async function fetchFeaturedPostData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const featuredPost = await response.json();
        console.log(featuredPost);
        return featuredPost.slice(0, 1);  // Limiting to 1 product for this example
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
}

function createFeaturedPost(featuredPost) {
    const featuredPostDivs = document.getElementsByClassName('featuredPost-div');

    // Loop through each element with the class and create the content
    Array.from(featuredPostDivs).forEach((featuredPostDiv) => {
        featuredPostDiv.innerHTML = `
            <a href="#!"><img class="card-img-top"
                src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg">
                <div class="card-body">
                    <div class="small text-muted">January 1, 2023</div>
                    <h2 class="card-title">${featuredPost[0].title}</h2>
                    <p class="card-text">${featuredPost[0].body}</p>
                    <a class="btn btn-primary" href="#!">Read more →</a>
                </div>
            </a>`;
    });
}; */


/* LEFT ROW OF ARTICLES */
// Getting the information from JsonPlaceHolder
/* async function fetchPostData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
        return posts.slice(1, 3);  // Limiting to 2 product for this example
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
} */
/* 
function createPosts(posts) {
    const postsDivs = document.getElementById('posts-parent');

    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('card', 'mb-4');
        postDiv.innerHTML = `
        <a href="#!"><img class="card-img-top"
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                alt="..."></a>
        <div class="card-body">
            <div class="small text-muted">January 1,
                2023</div>
            <h2 class="card-title h4">${post.title}</h2>
            <p class="card-text">${post.body}</p>
            <a class="btn btn-primary" href="#!">Read
                more →</a>
        </div>
        `;
        // Append to the appropriate posts-parent element
        postsDivs.appendChild(postDiv);
    });
} */

/* RIGHT ROW OF ARTICLES */
// Getting the information from JsonPlaceHolder
/* async function fetchPostData2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
        return posts.slice(3, 5);  // Limiting to 2 product for this example
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
} */
/* 
function createPosts2(posts2) {
    const postsDivs2 = document.getElementById('posts-parent2');

    posts2.forEach((post2) => {
        const postDiv2 = document.createElement('div');
        postDiv2.classList.add('card', 'mb-4');
        postDiv2.innerHTML = `
        <a href="#!"><img class="card-img-top"
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                alt="..."></a>
        <div class="card-body">
            <div class="small text-muted">January 1,
                2023</div>
            <h2 class="card-title h4">${post2.title}</h2>
            <p class="card-text">${post2.body}</p>
            <a class="btn btn-primary" href="#!">Read
                more →</a>
        </div>
        `;
        // Append to the appropriate posts-parent element
        postsDivs2.appendChild(postDiv2);
    });
}
 */
/* EXECUTING THE FUNCTIONS ON WINDOWLOAD */
/* window.addEventListener('load', async () => {
    const featuredPost = await fetchFeaturedPostData();
    createFeaturedPost(featuredPost);
    const products = await fetchProductData();
    createProductCards(products);
    const posts = await fetchPostData();
    createPosts(posts);
    const posts2 = await fetchPostData2();
    createPosts2(posts2);
}); */

/* 
async function fetchSingleArticle() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    article = await response.json();
    console.log(article);

    let mainImage = document.getElementById('mainImage');
    mainImage.src = article.image;

    let articleTitle = document.getElementById('articleTitle');
    articleTitle.innerHTML = `${article.title} <br> Category: ${article.category}`;

    let description = document.getElementById('description');
    description.innerHTML = article.description;

    let rating = document.getElementById('rating');
    rating.innerHTML = article.rating.rate;
    
    let count = document.getElementById('count');
    count.innerHTML = article.rating.count;
    
    let price = document.getElementById('price');
    price.innerHTML = article.price;
    
}

fetchSingleArticle()


async function fetchOtherProductsSinglePage() {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const articles = await response.json();

    const similarItems = document.getElementById('similarItems');

    articles.forEach((article) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('d-flex', 'mb-3');
        productDiv.innerHTML = `
            <a href="#" class="me-3">
                <img src="${article.image}"
                     style="min-width: 96px; height: 96px;"
                     class="img-md img-thumbnail">
            </a>
            <div class="info">
                <a href="#" class="nav-link mb-1">
                   ${article.title} <br>
                    ${article.category}
                </a>
                <strong class="text-dark"> $ ${article.price}</strong>
            </div>
        `;
        similarItems.appendChild(productDiv);  // Append the productDiv to similarItems
    });
}

fetchOtherProductsSinglePage(); */

async function fetchUser()    {
    const response = await fetch('https://dummyjson.com/users/1');
    user = await response.json();
    
    console.log(user);

    let profilePhoto = document.getElementById('profilePhoto');
        profilePhoto.src = user.image;

    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');

    firstName.innerHTML = user.firstName;
    lastName.innerHTML = user.lastName;

    let jobTitle = document.getElementById('jobTitle');
    jobTitle.innerHTML = user.company.department;

    let jobAdress = document.getElementById('jobAdress');
    jobAdress.innerHTML = `${user.company.address.address} <br> ${user.company.address.city}`

    let userEmail = document.getElementById('userEmail');
    userEmail.innerHTML = user.email;


    let userPhone = document.getElementById('userPhone');
    userPhone.innerHTML = user.phone;
    let companyPhone = document.getElementById('companyPhone');
    companyPhone.innerHTML = user.ein;




}

fetchUser()