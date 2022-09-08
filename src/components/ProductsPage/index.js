import { useState } from 'react';
import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import jsonData from '../../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar
          checked={checked}
          search={search}
          setSearch={setSearch}
          setChecked={setChecked}
        />
      </div>
      <div>
        <ProductTable
          checked={checked}
          setChecked={setChecked}
          products={products}
          setProducts={setProducts}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
