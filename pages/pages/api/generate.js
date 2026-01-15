export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    image: "https://via.placeholder.com/512?text=NOX+AI"
  });
}
