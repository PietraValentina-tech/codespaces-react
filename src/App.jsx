import React, { useState } from "react";
import './App.css';

function App() {
  const [energyUsage, setEnergyUsage] = useState("");
  const [transportDistance, setTransportDistance] = useState("");
  const [carbonCredits, setCarbonCredits] = useState(null);

  // Função de cálculo (fórmula simples para exemplo)
  const calculateCarbonCredits = () => {
    const energyFactor = 0.000233; // Exemplo de fator de conversão para uso de energia (em toneladas de CO2 por kWh)
    const transportFactor = 0.00021; // Exemplo de fator de conversão para transporte (toneladas de CO2 por km)
    
    const energyEmissions = energyUsage * energyFactor;
    const transportEmissions = transportDistance * transportFactor;
    
    const totalEmissions = energyEmissions + transportEmissions;

    // Fórmula simplificada para créditos de carbono
    setCarbonCredits(totalEmissions.toFixed(2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Créditos de Carbono</h1>
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateCarbonCredits();
          }}
        >
          <div className="input-group">
            <label htmlFor="energy">Consumo de energia (kWh):</label>
            <input
              type="number"
              id="energy"
              value={energyUsage}
              onChange={(e) => setEnergyUsage(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="transport">Distância percorrida (km):</label>
            <input
              type="number"
              id="transport"
              value={transportDistance}
              onChange={(e) => setTransportDistance(e.target.value)}
              required
            />
          </div>
          <button type="submit">Calcular Créditos</button>
        </form>

        {carbonCredits !== null && (
          <div className="result">
            <h2>Créditos de Carbono Gerados</h2>
            <p>Total de emissões: {carbonCredits} toneladas de CO2</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
