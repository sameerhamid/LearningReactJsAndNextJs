import Link from "next/link";

function MealsPage() {
  return (
    <div>
      <h1>meals page</h1>
      <Link href="/meals/share">Share</Link>
      <Link href="/meals/meal-id">Meal</Link>
    </div>
  );
}

export default MealsPage;
