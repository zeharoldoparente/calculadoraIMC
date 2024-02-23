import React, { useState } from "react";
import "./App.css";

function App() {
   const [altura, setAltura] = useState("");
   const [peso, setPeso] = useState("");
   const [resultado, setResultado] = useState(null);

   const calcularIMC = () => {
      const alturaMetros = altura / 100; // Convertendo altura para metros
      const imc = peso / (alturaMetros * alturaMetros);
      setResultado(imc);
   };

   const getClassificacao = () => {
      if (resultado < 18.5) {
         return "Abaixo do peso";
      } else if (resultado < 24.9) {
         return "Peso normal";
      } else if (resultado < 29.9) {
         return "Sobrepeso";
      } else if (resultado < 34.9) {
         return "Obesidade Grau I";
      } else if (resultado < 39.9) {
         return "Obesidade Grau II";
      } else {
         return "Obesidade Grau III";
      }
   };

   return (
      <div className="App">
         <h1>Calculadora de IMC</h1>
         <div>
            <label>Altura (cm):</label>
            <input
               type="number"
               value={altura}
               onChange={(e) => setAltura(e.target.value)}
            />
         </div>
         <div>
            <label>Peso (kg):</label>
            <input
               type="number"
               value={peso}
               onChange={(e) => setPeso(e.target.value)}
            />
         </div>
         <button onClick={calcularIMC}>Calcular IMC</button>
         {resultado && (
            <div>
               <h2>Seu IMC é: {resultado.toFixed(2)}</h2>
               <p>Classificação: {getClassificacao()}</p>
            </div>
         )}
         <div className="tabela-imc">
            <h2>Tabela de Classificação de IMC</h2>
            <table>
               <thead>
                  <tr>
                     <th>IMC</th>
                     <th>Classificação</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>&lt; 18.5</td>
                     <td>Abaixo do peso</td>
                  </tr>
                  <tr>
                     <td>18.5 - 24.9</td>
                     <td>Peso normal</td>
                  </tr>
                  <tr>
                     <td>25.0 - 29.9</td>
                     <td>Sobrepeso</td>
                  </tr>
                  <tr>
                     <td>30.0 - 34.9</td>
                     <td>Obesidade Grau I</td>
                  </tr>
                  <tr>
                     <td>35.0 - 39.9</td>
                     <td>Obesidade Grau II</td>
                  </tr>
                  <tr>
                     <td>&gt;= 40.0</td>
                     <td>Obesidade Grau III</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default App;
