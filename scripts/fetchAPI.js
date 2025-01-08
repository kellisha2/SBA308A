export const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const productsResponse = await response.json();
    return productsResponse;
}