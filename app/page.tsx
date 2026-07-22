export default function Home() {
  return (
    <main style={{
      background: "linear-gradient(180deg, #0a0a0a 0%, #1a001a 100%)",
      color: "white", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{fontSize: "3rem", margin: "0", color: "#ff00ff"}}>
        🎮 PIXELHUB
      </h1>
      <p style={{fontSize: "1.2rem", marginTop: "10px"}}>
        Teu hub de jogos pixelizados
      </p>
      <button style={{
        padding: "14px 28px", 
        marginTop: "30px", 
        background: "#ff00ff", 
        border: "none", 
        color: "white", 
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        JOGAR AGORA
      </button>
    </main>
  )
        }
