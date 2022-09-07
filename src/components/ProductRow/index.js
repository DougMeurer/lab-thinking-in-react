function ProductRow({ products, setProducts, search }) {
  return (
    <>
      <tbody>
        {products
          .filter((product) => {
            return (
              product.name.toLowerCase().includes(search) ||
              product.price.includes(search)
            );
          })
          .map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
}

export default ProductRow;
