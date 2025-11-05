// src/components/InfoCard.jsx
import React from 'react';

/**
 * Componente funcional para exibir informações resumidas.
 */
const InfoCard = ({ title, value, icon, className = '' }) => {
  return (
    <div className={`info-card ${className}`}>
      <span className="info-card-icon">{icon}</span>
      <div className="info-card-content">
        <p className="info-card-title">{title}</p>
        <h3 className="info-card-value">{value}</h3>
      </div>
    </div>
  );
};

export default InfoCard;