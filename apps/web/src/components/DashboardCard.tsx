import React from 'react';

interface DashboardCardProps {
  label: string;
  value: string | number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ label, value }) => (
  <section className="card">
    <h3>{label}</h3>
    <p>{value}</p>
  </section>
);
