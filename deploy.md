# Deployment Guide (Cloudflare Tunnel)

This guide explains how to deploy BuildKor using Docker and Cloudflare Tunnel. This method is secure, requires no open ports on your firewall, and provides automatic SSL.

## Prerequisites

1.  **Server:** A Linux server (Ubuntu recommended) with Docker and Docker Compose installed.
2.  **Domain:** A domain managed on Cloudflare.
3.  **Cloudflare Account:** Access to the Cloudflare Zero Trust dashboard.

## 1. Get Your Cloudflare Tunnel Token

1.  Go to **Cloudflare Zero Trust Dashboard** > **Access** > **Tunnels**.
2.  Click **Create a Tunnel**.
3.  Name it (e.g., `buildkor-server`) and save.
4.  Choose **Docker** as the environment.
5.  **Copy the Token**: You will see a command like `docker run ... --token eyJ...`. Copy just the long token string starting with `eyJ`.

## 2. Prepare the Server

1.  **Clone/Copy the repository** to your server:
    ```bash
    git clone <your-repo-url> buildkor
    cd buildkor
    ```

2.  **Create a `.env` file** with your Tunnel Token:
    ```bash
    echo "TUNNEL_TOKEN=your_token_here" > .env
    ```

## 3. Configure the Tunnel (Public Hostname)

1.  Back in the Cloudflare Dashboard (where you created the tunnel).
2.  Click **Next** to go to the **Public Hostnames** tab.
3.  **Public Hostname:**
    *   **Subdomain:** `www` (or leave empty for root domain)
    *   **Domain:** `yourdomain.com`
    *   **Path:** (leave empty)
4.  **Service:**
    *   **Type:** `HTTP`
    *   **URL:** `buildkor-web:3000` (This matches the container name/port in docker-compose)
5.  Save/Create Tunnel.

## 4. Run with Docker Compose

We have updated `docker-compose.yml` to include the cloudflared service.

1.  **Build and Run:**
    ```bash
    docker-compose up -d --build
    ```

2.  **Verify:**
    *   Check logs: `docker-compose logs -f`
    *   Visit your domain (e.g., `https://buildkor.com`). It should allow HTTPS access immediately.

## Troubleshooting

*   **502 Bad Gateway:** Cloudflare cannot reach the container. Ensure `docker-compose` is running and the Service URL in Cloudflare is set to `http://buildkor-web:3000`.
*   **Container Crashing:** Check if the `TUNNEL_TOKEN` in `.env` is correct.
