const products = [
  { id: "1", name: "Remera Titular Negra", price: 22000, category: "Remerasoficiales", image: "./img/remera1.jpg" },
  { id: "2", name: "Remera Titular Blanca", price: 20000, category: "Remerasoficiales", image: "./img/remera2.jpg" },
  { id: "3", name: "Remera suplente Blanca", price: 18000, category: "Remerasofciales", image: "./img/remera3.jpg" },
  { id: "4", name: "Rodillera Negra", price: 30000, category: "Rodilleras", image: "./img/rodillera1.jpg" },
  { id: "5", name: "Rodillera Blanca", price: 28000, category: "Rodilleras", image: "./img/rodillera2.jpg" },
  { id: "6", name: "Rodillera Negra", price: 29000, category: "Rodilleras", image: "./img/rodillera3.jpg" },
  { id: "7", name: "Short Azul", price: 8000, category: "Shorts", image: "./img/short1.jpg" },
  { id: "8", name: "Short Negro", price: 9000, category: "Shorts", image: "./img/short2.jpg" },
  { id: "9", name: "Short Negro", price: 7000, category: "Shorts", image: "./img/short3.jpg" },
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
    }, 760);
  });
};


export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {


      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 760);
  });
};