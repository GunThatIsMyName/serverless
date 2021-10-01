const result = document.querySelector(".result");

const urlEndPoint = "/api/3combine";
const fetchData = async () => {
    try {
        const { data } = await axios.get(urlEndPoint);
        const product = data
            .map((item) => {
                const { Name, id, image, desc } = item;
                return `
                    <article class="product">
                        <a href="product.html?id=${id}"} >
                            <img src="${image}" alt="${Name}"/>
                            <div class="info">
                                <h5>${Name}</h5>
                                <h5 class="price">${desc.substr(0, 10)}</h5>
                            </div>
                        </a>
                    </article>`;
            })
            .join("");
        result.innerHTML = product;
    } catch (error) {
        result.textContent = "SERVER | ERROR";
    }
};

const init = () => {
    fetchData();
};
init();
