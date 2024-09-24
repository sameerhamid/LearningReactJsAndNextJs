import MealItem from "./meal-item";
import classes from "./measl-grid.module.css";
function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

export default MealsGrid;
