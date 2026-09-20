console.log("Hey Antek Antek Async!!");

async function getUserData(userId) {
  try {
    const response = await fetch("https://api.example.com/users/${userId}");
    if (!response.ok) {
      throw new Error("Gagal mengambil data . Status: ${response.status}");
    }
    const data = await response.json();

    return {
      name: data.name,
      isAdult: data.age >= 18,
    };
  } catch (error) {
    console.error("Terjadi Masalah:", error.message);
    return null;
  }
}

// let userBaru = await getUserData(12223);
// console.log(userBaru);
