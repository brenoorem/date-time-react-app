import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchDateTime = async () => {
    try {
      const response = await fetch(
        "https://express-api-date-time.onrender.com"
      );

      const data = await response.json();

      setDateTime(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  fetchDateTime();

  const interval = setInterval(fetchDateTime, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Tarefa 07</h1>
        <p>Exemplo Web React consumindo API</p>

        {loading ? (
          <h2>Carregando...</h2>
        ) : (
          <>
            <h2>Data e Hora Atual</h2>
            <p className="datetime">
              {dateTime.date} - {dateTime.time}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
