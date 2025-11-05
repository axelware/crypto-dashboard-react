// src/components/DashboardSkeleton.jsx
import React from 'react';

const DashboardSkeleton = () => (
  <div className="skeleton-container">
    {/* Controles Skeleton */}
    <div className="skeleton-controls">
      <div className="skeleton-block" style={{ height: '40px', width: '160px' }}></div>
      <div className="skeleton-block" style={{ height: '40px', width: '240px' }}></div>
    </div>

    {/* Cards Skeleton */}
    <div className="skeleton-cards-grid">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-avatar"></div>
          <div className="flex-col-spacing">
            <div className="skeleton-block" style={{ height: '12px', width: '75%' }}></div>
            <div className="skeleton-block" style={{ height: '20px', width: '50%' }}></div>
          </div>
        </div>
      ))}
    </div>

    {/* Gráfico Skeleton */}
    <div className="skeleton-chart">
      <div className="skeleton-block" style={{ height: '24px', width: '33%', marginBottom: '16px' }}></div>
      <div className="skeleton-block" style={{ height: '320px', width: '100%' }}></div>
    </div>
  </div>
);

export default DashboardSkeleton;