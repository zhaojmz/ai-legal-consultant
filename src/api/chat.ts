const API_URL = import.meta.env.KIMI_API_URL;

export async function sendMessage(message: string) {
  const response = await fetch(`${API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.KIMI_API_KEY}`
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: message }]
    })
  });
  return response.json();
} 