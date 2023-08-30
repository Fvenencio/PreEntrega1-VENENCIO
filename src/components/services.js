const products = [
  { id: "1", name: "Remera Titular Negra", price: 22000, category: "Remerasoficiales", image: "https://picsum.photos/id/237/200/300" },
  { id: "2", name: "Remera Titular Blanca", price: 20000, category: "Remerasoficiales", image: "https://picsum.photos/id/261/200/300" },
  { id: "3", name: "Remera suplente Blanca", price: 18000, category: "Remerasofciales", image: "https://picsum.photos/id/239/200/300" },
  { id: "4", name: "Rodillera Negra", price: 30000, category: "Rodilleras", image: "https://picsum.photos/id/266/200/300" },
  { id: "5", name: "Rodillera Blanca", price: 28000, category: "Rodilleras", image: "https://picsum.photos/id/278/200/300" },
  { id: "6", name: "Rodillera Negra", price: 29000, category: "Rodilleras", image: "https://picsum.photos/id/242/200/300" },
  { id: "7", name: "Short Azul", price: 8000, category: "Shorts", image: "https://picsum.photos/id/250/200/300" },
  { id: "8", name: "Short Negro", price: 9000, category: "Shorts", image: "https://picsum.photos/id/244/200/300" },
  { id: "9", name: "Short Negro", price: 7000, category: "Shorts", image: "../assets/img/remera1.jpg" },
];

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const product = products.find((p) => p.id === id);


      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    }, 1000);
  });
};


export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {


      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 1000);
  });
};