// src/components/PriceChart.jsx

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, 
         LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2'; 

// 1. Registro dos elementos do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, 
  Title,
  Tooltip,
  Legend
);

// 2. Opções do gráfico (Configurando 2 eixos Y)
const options = {
  responsive: true,
  maintainAspectRatio: false, 
  interaction: {
    mode: 'index', 
    intersect: false,
  },
  plugins: {
    title: { display: true, text: 'Preço e Volume Histórico' },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Preço' },
      grid: { borderDash: [5, 5] }
    },
    y1: { 
      type: 'linear',
      display: true,
      position: 'right',
      title: { display: true, text: 'Volume' },
      grid: { drawOnChartArea: false }, 
    },
    x: { grid: { display: false } }
  }
};

/**
 * Componente de Gráfico Combinado (Linha para Preço, Barra para Volume).
 */
const PriceChart = ({ data }) => {
  return (
    <div className="chart-container" style={{ height: '400px' }}>
      <h2>Gráfico de Mercado</h2>
      <Chart type='line' options={options} data={data} /> 
    </div>
  );
};

export default PriceChart;