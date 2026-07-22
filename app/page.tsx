export default function Home() {
  return (
    <main style={{background: "#0a0a0a", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif"}}>
      <h1 style={{fontSize: "3rem"}}>🎮 PIXELHUB</h1>
      <p>Teu hub de jogos pixelizados</p>
      <button style={{padding: "12px 24px", marginTop: "20px", background: "#ff00ff", border: "none", color: "white", borderRadius: "8px"}}>Jogar Agora</button>
    </main>
  )
}
