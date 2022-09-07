import ProductRow from '../ProductRow';

function ProductTable({ products, setProducts, search, setSearch }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow
          products={products}
          setProducts={setProducts}
          search={search}
        />
      </table>
    </>
  );
}

export default ProductTable;
