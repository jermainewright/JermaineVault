import React from 'react';
import { useSelector } from 'react-redux';
import { useRealtimeMetrics } from '../hooks/useRealtimeMetrics';
import { RootState } from '../store';
import { percent } from '../utils/format';

const trendSeed = [62, 48, 73, 66, 81, 57, 88, 71, 64, 90];

export const DashboardPage: React.FC = () => {
  useRealtimeMetrics();
  const latest = useSelector((state: RootState) => state.dashboard.liveMetrics[0]);
  const recent = useSelector((state: RootState) => state.dashboard.liveMetrics.slice(0, 6));

  return (
    <main className="dashboard-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Performance Intelligence</p>
          <h1>JermaineVault Mission Control</h1>
          <p className="subtitle">Live delivery telemetry for distributed product engineering teams.</p>
        </div>
        <div className="hero-status">
          <span className="status-dot" />
          <span>Realtime stream active</span>
        </div>
      </header>

      <section className="kpi-grid">
        <article className="kpi-card ember">
          <h3>Sprint Velocity</h3>
          <p>{latest ? latest.sprintVelocity : '--'}</p>
        </article>
        <article className="kpi-card gold">
          <h3>Cycle Time</h3>
          <p>{latest ? `${latest.cycleTimeHours} hrs` : '--'}</p>
        </article>
        <article className="kpi-card rose">
          <h3>Deploy Cadence</h3>
          <p>{latest ? latest.deploymentFrequency : '--'}</p>
        </article>
        <article className="kpi-card plum">
          <h3>Defect Escape</h3>
          <p>{latest ? percent(latest.defectEscapeRate) : '--'}</p>
        </article>
      </section>

      <section className="insight-grid">
        <article className="panel chart-panel">
          <h2>Throughput Pulse</h2>
          <div className="bars">
            {trendSeed.map((value, index) => (
              <span key={`bar-${index}`} style={{ height: `${value}%`, animationDelay: `${index * 90}ms` }} />
            ))}
          </div>
        </article>

        <article className="panel feed-panel">
          <h2>Live Activity Feed</h2>
          <ul>
            {recent.length > 0 ? (
              recent.map((metric, index) => (
                <li key={`${metric.capturedAt}-${index}`}>
                  <strong>{metric.teamId}</strong>
                  <span>Velocity {metric.sprintVelocity}</span>
                  <time>{new Date(metric.capturedAt).toLocaleTimeString()}</time>
                </li>
              ))
            ) : (
              <li className="placeholder">Waiting for metrics from API stream...</li>
            )}
          </ul>
        </article>
      </section>
    </main>
  );
};
