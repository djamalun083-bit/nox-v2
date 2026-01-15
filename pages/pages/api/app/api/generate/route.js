export async function POST(req) {
  return new Response(JSON.stringify({
    image: "https://via.placeholder.com/512?text=NOX+AI"
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
