import Link from "next/link";

function ProductItem({ product, addToCartHandler }) {

    
  return (
    <div className="card">
    <Link href={`/mens/${product.slug}`}>
      <a>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </a>
    </Link>
    <div className="flex flex-col items-center justify-center p-5">
      <Link href={`/mens/${product.slug}`}>
        <a>
          <h2 className="text-lg">{product.name}</h2>
        </a>
      </Link>
      <p className="mb-2">{product.brand}</p>
      <p>${product.price}</p>
      <button className="primary-button" type="button" onClick={() => addToCartHandler(product)}>
        Add to cart
      </button>
    </div>
  </div>
  );
}

export default ProductItem;
