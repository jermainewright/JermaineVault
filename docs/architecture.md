# JermaineVault Architecture

JermaineVault is designed as an event-driven SaaS platform with modular domain boundaries:

1. API service handles authentication, ingestion, and query APIs.
2. Real-time transport uses Socket.IO for low-latency fanout.
3. Web app subscribes to live events and overlays historical snapshots.
4. Shared package centralizes DTO contracts for compatibility.
