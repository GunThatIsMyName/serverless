const result = document.querySelector(".result");
const formatPrice = (price)=>{
    console.log(price,"price")
    const newPrice = new Intl.NumberFormat("en-US",{ style: 'currency', currency: 'USD' }).format(price)
    
    return newPrice
}

const singleProductUrl = "/api/3combine";

const fetchData = async () => {
    const query = window.location.search;
    try {
        const { data } = await axios.get(`${singleProductUrl}${query}`);
        console.log(data, "data");
        const {
            id,
            fields: { Name, desc, images, price },
        } = data;
        const image = images[0].url;
        result.innerHTML = `
        <h1 class="title">${Name}</h1>
  <article class="product">
    <img class="product-img"
    src=${image}
    alt=${Name}
    />
    <div class="product-info">
      <h5 class="title">${Name}</h5>
      <h5 class="price">${formatPrice(price)}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
    } catch (error) {
        result.innerHTML`
            <h2>server Error</h2>
        `;
    }
};

const init = () => {
    fetchData();
};
init();
