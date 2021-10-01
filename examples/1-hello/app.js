const result = document.querySelector(".result");
const ApiEndPoint = "/.netlify/functions/hello";

const fetchData = async () => {
    result.textContent = "LOADING ...";
    try {
        const { data } = await axios(ApiEndPoint);
        result.textContent = data;
    } catch (error) {
        result.textContent = "ERROR | no data";
    }
};
fetchData();
