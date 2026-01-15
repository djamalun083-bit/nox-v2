import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await axios.post("/api/generate", { prompt });
    setImg(res.data.image);
    setLoading(false);
  };

  return (
    <div style={{background:"#000", color:"#0ff", minHeight:"100vh", padding:40}}>
      <h1>NOX AI STUDIO</h1>
      <textarea
        placeholder="Tulis prompt kamu di sini..."
        onChange={e=>setPrompt(e.target.value)}
        style={{width:"100%", height:120, background:"#111", color:"#0ff", border:"1px solid #0ff"}}
      />
      <br/>
      <button onClick={generate} style={{marginTop:10}}>
        {loading ? "Generating..." : "Generate Image"}
      </button>
      {img && <img src={img} style={{width:"100%", marginTop:20}} />}
    </div>
  );
}
