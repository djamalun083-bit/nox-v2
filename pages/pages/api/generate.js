export const config = {
  api: {
    externalResolver: true
  }
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.end();
  }

  res.status(200).json({
    image: "https://via.placeholder.com/512?text=NOX+AI"
  });
}
