import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Loading meals failed");
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

export function getMeal(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}
