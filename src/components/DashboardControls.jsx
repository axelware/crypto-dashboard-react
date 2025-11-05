// src/components/DashboardControls.jsx
import React from 'react';

// Moedas disponíveis (IDs da CoinGecko)
const COIN_OPTIONS = [
    { id: 'bitcoin', name: 'Bitcoin (BTC)' },
    { id: 'ethereum', name: 'Ethereum (ETH)' },
    { id: 'tether', name: 'Tether (USDT)' },
    { id: 'binancecoin', name: 'Binance Coin (BNB)' },
    { id: 'solana', name: 'Solana (SOL)' },
    { id: 'usd-coin', name: 'USD Coin (USDC)' },
];

// Períodos de tempo disponíveis
const PERIOD_OPTIONS = [
    { days: 1, label: '24h' },
    { days: 7, label: '7 Dias' },
    { days: 30, label: '30 Dias' },
    { days: 90, label: '3 Meses' },
    { days: 365, label: '1 Ano' },
];

/**
 * Componente para controles de filtro do dashboard.
 */
const DashboardControls = ({ selectedCoin, selectedDays, onCoinChange, onDaysChange }) => {
  return (
    <div className="dashboard-controls-container">
      {/* Seletor de Moeda */}
      <div className="control-group">
        <label htmlFor="coin-select">Selecione a Moeda:</label>
        <select
          id="coin-select"
          value={selectedCoin}
          onChange={(e) => onCoinChange(e.target.value)}
        >
          {COIN_OPTIONS.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>

      {/* Seletor de Período (Botões) */}
      <div className="control-group">
        <label>Período:</label>
        <div className="period-buttons">
          {PERIOD_OPTIONS.map((period) => (
            <button
              key={period.days}
              className={`period-button ${selectedDays === period.days ? 'active' : ''}`}
              onClick={() => onDaysChange(period.days)}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardControls;