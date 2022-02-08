
const getProductList = async () => {

    const items = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())

    return items; 

}

export default getProductList;