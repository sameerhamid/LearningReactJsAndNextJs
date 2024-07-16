import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Test Product",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 10,
    title: "Second Product",
    description: "This is a second product - super!",
  },
  {
    id: "p3",
    price: 14,
    title: "Third Product",
    description: "This is a third product - delicious!",
  },
  {
    id: "p4",
    price: 18,
    title: "Fourth Product",
    description: "This is a fourth product - lovely!",
  },
  {
    id: "p5",
    price: 22,
    title: "Fifth Product",
    description: "This is a fifth product - exquisite!",
  },
  {
    id: "p6",
    price: 26,
    title: "Sixth Product",
    description: "This is a sixth product - wondrous!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
