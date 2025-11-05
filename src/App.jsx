// src/App.jsx

import React, { useState, useEffect, useMemo } from 'react';
import { fetchMarketChart } from './api/coingecko';
import PriceChart from './components/PriceChart';
import InfoCard from './components/InfoCard';
import DashboardControls from './components/DashboardControls';
import DashboardSkeleton from './components/DashboardSkeleton';
import './App.css'; 

// --- Funções Auxiliares de Formatação ---

// Formata para moeda USD (Preço atual)
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

// Formata números grandes (Capitalização, Volume) para B/T/M
const formatLargeNumber = (num, digits = 2) => {
    // Adicionado tratamento para null/undefined, embora não deva acontecer aqui.
    if (num === null || num === undefined) return formatCurrency(0);

    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
    ];
    const regexp = /\.0+$|(\.[0-9]*[1-9])0+$/;
    
    const item = lookup.slice().reverse().find((item) => {
        return num >= item.value;
    });
    
    return item 
        ? '$' + (num / item.value).toFixed(digits).replace(regexp, "$1") + item.symbol
        : '$' + num.toFixed(digits);
};

// --- Componente Principal ---
function App() {
  const [selectedCoin, setSelectedCoin] = useState('bitcoin'); 
  const [selectedDays, setSelectedDays] = useState(7);       

  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efeito que busca dados quando a moeda ou o período muda
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      const data = await fetchMarketChart(selectedCoin, selectedDays); 
      
      if (data) {
        setMarketData(data);
      } else {
        setError(`Não foi possível carregar os dados para ${selectedCoin}.`); 
      }
      setLoading(false);
    };

    loadData();
  }, [selectedCoin, selectedDays]); 

  // Processamento e formatação dos dados (useMemo garante eficiência)
  const dashboardInfo = useMemo(() => {
    if (!marketData || marketData.prices.length === 0) return null;

    const timestamps = marketData.prices.map(item => item[0]);
    const prices = marketData.prices.map(item => item[1]);
    const volumes = marketData.total_volumes.map(item => item[1]);

    const currentPrice = prices[prices.length - 1];
    const currentMarketCap = marketData.market_caps[marketData.market_caps.length - 1][1];
    const lastVolume = volumes[volumes.length - 1]; 

    // Formatação dos labels do gráfico (Hora ou Dia)
    const labels = timestamps.map(ts => {
      const date = new Date(ts);
      return selectedDays <= 7 
        ? date.toLocaleTimeString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) 
        : `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    });

    const chartData = {
      labels: labels,
      datasets: [
        {
          type: 'line', 
          label: 'Preço (USD)',
          data: prices,
          borderColor: 'rgb(0, 123, 255)', 
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          yAxisID: 'y', 
          tension: 0.2, 
          pointRadius: 0, 
        },
        {
          type: 'bar', 
          label: 'Volume Total',
          data: volumes,
          backgroundColor: 'rgba(40, 167, 69, 0.4)', 
          borderColor: 'rgb(40, 167, 69)',
          yAxisID: 'y1', 
        },
      ],
    };
    
    return { chartData, currentPrice, currentMarketCap, lastVolume };
    
  }, [marketData, selectedDays]);

  const headerTitle = selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1);

  if (loading) {
    return <DashboardSkeleton />; 
  }

  if (error || !dashboardInfo) {
    return <div className="dashboard-container"><h1 style={{color: 'red'}}>Erro: {error}</h1></div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard de {headerTitle} 📈</h1>
        <p>Dados de mercado dos últimos {selectedDays} dias via CoinGecko API</p>
      </header>

      {/* Controles Interativos */}
      <DashboardControls
        selectedCoin={selectedCoin}
        selectedDays={selectedDays}
        onCoinChange={setSelectedCoin}
        onDaysChange={setSelectedDays}
      />

      {dashboardInfo && (
        <main className="dashboard-content">
          
          {/* Cards de Informação */}
          <div className="info-cards-grid">
            <InfoCard 
                title="Preço Atual" 
                value={formatCurrency(dashboardInfo.currentPrice)} 
                icon="💲" 
                className="price-card" 
            />
            <InfoCard 
                title="Capitalização de Mercado" 
                value={formatLargeNumber(dashboardInfo.currentMarketCap, 2)} 
                icon="🌍" 
                className="cap-card" 
            />
            <InfoCard 
                title="Volume 24h" 
                value={formatLargeNumber(dashboardInfo.lastVolume, 2)} 
                icon="📊" 
                className="volume-card" 
            />
          </div>

          {/* Gráfico Combinado */}
          <PriceChart data={dashboardInfo.chartData} />
        </main>
      )}
    </div>
  );
}

export default App;