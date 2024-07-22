import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Product 1",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "p2",
    name: "Product 2",
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "p3",
    name: "Product 3",
    price: 300,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "p4",
    name: "Product 4",
    price: 400,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
