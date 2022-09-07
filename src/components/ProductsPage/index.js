import { useState } from 'react';
import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import jsonData from '../../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  console.log('here!', products);
  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar products={products} search={search} setSearch={setSearch} />
      </div>
      <div>
        <ProductTable
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
