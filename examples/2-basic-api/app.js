const result = document.querySelector('.result')

const apiEndPoint = "/api/basic"
const fetchData= async()=>{
    console.log("ddd")
    try {
        const {data} = await axios.get(apiEndPoint)
        const products = data
        .map((product) => {
          const {
            image: { url },
            name,
            price,
          } = product
          return `<article class="product">
       <img src="${url}" alt="${name}"/>
       <div class="info">
  <h5>${name}</h5>
  <h5 class="price">$${price}</h5>
       </div>
       </article>`
        })
        .join('')
        console.log(products,"pro")
      result.innerHTML = products
    } catch (error) {
        result.innerHTML=`
            <h2>No data</h2>
        `
    }
}

const init = ()=>{
    fetchData();
}
init()