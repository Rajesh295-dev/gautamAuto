export default async function getCart(id) {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`http://localhost:3000/api/inventory/${id}`);

  if (!res.ok) {
    throw new Error("failed to fetch user posts");
  }

  return res.json();
  console.log("yet ayo ta", res);
}
