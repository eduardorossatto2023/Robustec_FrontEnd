import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Home</h1>
      <p>Página em branco</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
