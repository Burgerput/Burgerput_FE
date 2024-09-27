export async function notifyUserEntry(userName) {
  return await fetch(`${import.meta.env.VITE_CHAT_SERVER_URL}/api/entrance`, {
    method: "POST",
    body: JSON.stringify({ userName }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
