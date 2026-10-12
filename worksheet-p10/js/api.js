const ALAMAT = './profile.json';

export async function ambilData() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error(`Status ${respons.status}`);
    }

    return await respons.json();
  } catch (galat) {
    console.error('Gagal memuat:', galat.message);
    throw galat;
  }
}
