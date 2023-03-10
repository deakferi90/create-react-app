export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows

  return (
    <div id="product-list">
      <header>
        <strong>Product List items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.department}</td>
              <td>{product.price + product.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
