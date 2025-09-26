const ProductsPage = async () => {
  const response = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  console.log(response);
  const products = await response.json();
  console.log(products);
  return (
    <div>
      <h2>Products page</h2>
    </div>
  );
};

export default ProductsPage;
