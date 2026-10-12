const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function ambilData() {
  const respons = await fetch(ALAMAT);

  if (!respons.ok) {
    throw new Error(`Status ${respons.status}`);
  }

  return respons.json();
}