import ProductRow from '../ProductRow';

function ProductTable({ products, setProducts, search, setChecked, checked }) {
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
          checked={checked}
          setChecked={setChecked}
          products={products}
          setProducts={setProducts}
          search={search}
        />
      </table>
    </>
  );
}

export default ProductTable;
