# Frontend

Frontend independiente con `React + Vite + Tailwind`.

## Importante

- Este frontend usa `Node` solo dentro de su contenedor Docker.
- No necesitas instalar Node localmente en tu máquina para trabajar aquí.
- `sequelize` y `mysql2` deben vivir en `Backend/`, no en `Frontend/`.

## Levantar el frontend

```bash
cd Frontend
docker compose up --build
```

## Acceso

- App: `http://localhost:5173`

## Detener el contenedor

```bash
cd Frontend
docker compose down
```
