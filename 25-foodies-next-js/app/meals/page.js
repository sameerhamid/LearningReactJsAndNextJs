import Link from "next/link";
import classes from "./page.module.css";
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delight meals, created{""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main></main>
    </>
  );
}

export default MealsPage;
