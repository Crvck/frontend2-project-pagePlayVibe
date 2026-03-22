# 🎵 PlayVibe

Plataforma de streaming de música construida con una arquitectura de **microservicios independientes** en Docker. Cada capa del proyecto (Frontend y Backend) vive en su propio contenedor aislado; no necesitas instalar Node, MySQL ni ninguna dependencia directamente en tu máquina.

---

## 🏗️ Arquitectura

```
frontend2-project-pagePlayVibe/
├── Frontend/    →  App React (Vite + Tailwind)   →  contenedor: frontend-vite-app  →  :5173
└── Backend/     →  API REST (Node + Express)      →  contenedor: pageplayvibe-node  →  :3000
```

Cada carpeta tiene su propio `Dockerfile` y `docker-compose.yml`. Se levantan de forma **totalmente independiente**.

---

## 🛠️ Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| **Frontend** | React | 19 |
| | Vite | 8 |
| | Tailwind CSS | 4 |
| **Backend** | Node.js | 20 Alpine |
| | Express | 5 |
| | Sequelize ORM | 6 |
| | MySQL 2 | 3 |
| **Infraestructura** | Docker | — |
| | Docker Compose | v2 |

---

## ✅ Requisito único

Tener instalado **Docker** (no necesitas Node, npm ni MySQL en tu máquina).

- [Instalar Docker Engine (Linux)](https://docs.docker.com/engine/install/)
- [Instalar Docker Desktop (Windows / Mac)](https://www.docker.com/products/docker-desktop/)

---

## 🚀 Instalación y arranque

### 1 — Clonar el repositorio

```bash
git clone https://github.com/Crvck/frontend2-project-pagePlayVibe.git
cd frontend2-project-pagePlayVibe
```

### 2 — Levantar el Frontend

```bash
cd Frontend
docker compose up --build
```

Accede en: **http://localhost:5173**

Para verlo en segundo plano:

```bash
docker compose up --build -d
```

### 3 — Levantar el Backend

```bash
cd ../Backend
docker compose up --build
```

API disponible en: **http://localhost:3000**

---

## 🔄 Comandos útiles

| Acción | Comando |
|---|---|
| Ver contenedores activos | `docker ps` |
| Logs del frontend (tiempo real) | `cd Frontend && docker compose logs -f` |
| Logs del backend (tiempo real) | `cd Backend && docker compose logs -f` |
| Detener frontend | `cd Frontend && docker compose down` |
| Detener backend | `cd Backend && docker compose down` |
| Detener y limpiar volúmenes | `docker compose down --volumes --remove-orphans` |

---

## ⚠️ Reglas del proyecto

- **No uses `npm install` en tu máquina.** Todo corre dentro de los contenedores.
- `node_modules/` está en `.gitignore` y nunca se sube al repositorio.
- Las dependencias de base de datos (`sequelize`, `mysql2`) van en **`Backend/`**, nunca en `Frontend/`.
- El Frontend solo debe consumir la API del Backend; no se conecta directamente a MySQL.
