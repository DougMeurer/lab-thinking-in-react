function ProductRow({ products, search, setChecked, checked }) {
  return (
    <tbody>
      {!checked &&
        products
          .filter((product) => {
            return product.inStock === true;
          })
          .filter((product) => {
            return (
              product.name.toLowerCase().includes(search) ||
              product.price.includes(search)
            );
          })
          .map((product) => {
            return (
              <tr key={product.id}>
                {product.inStock ? (
                  <td>{product.name}</td>
                ) : (
                  <td style={{ color: 'red' }}>{product.name}</td>
                )}
                <td>{product.price}</td>
              </tr>
            );
          })}

      {checked &&
        products
          .filter((product) => {
            return (
              product.name.toLowerCase().includes(search) ||
              product.price.includes(search)
            );
          })
          .map((product) => {
            return (
              <tr key={product.id}>
                {product.inStock ? (
                  <td>{product.name}</td>
                ) : (
                  <td style={{ color: 'red' }}>{product.name}</td>
                )}
                <td>{product.price}</td>
              </tr>
            );
          })}
    </tbody>
  );
}

export default ProductRow;
