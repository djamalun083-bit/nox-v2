export const config = {
  api: {
    bodyParser: true,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ image: "" });
  }

  const { prompt } = req.body || {};

  return res.status(200).json({
    image: "https://via.placeholder.com/512?text=NOX+AI"
  });
}
