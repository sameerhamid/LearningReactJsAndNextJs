"use server";
export async function saveUserAction(formData) {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const instructors = JSON.parse(data);
  const newInstructor = {
    id: `u${instructors.length + 1}`,
    name: formData.get("name"),
    title: formData.get("title"),
  };
  instructors.push(newInstructor);
  await fs.writeFile("dummy-db.json", JSON.stringify(instructors));
}
