export async function ambilData() {
  const response = await fetch("./profile.json");

  if (!response.ok) {
    throw new Error(`Status ${response.status}`);
  }

  return response.json();
}