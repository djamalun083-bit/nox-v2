export default async function handler(req, res) {
  const { prompt } = req.body;

  // sementara dummy
  res.status(200).json({
    image: "https://via.placeholder.com/512?text=NOX+AI"
  });
}
