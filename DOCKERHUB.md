# OpenFusion API Docker Image

Official Docker image for OpenFusion API: a production-ready, low-code, AI-friendly platform to create and deploy integration endpoints quickly.

Repositorio / Repository:
https://github.com/edwinspire/OpenFusionAPI

Dockerfile:
https://github.com/edwinspire/OpenFusionAPI/blob/main/Dockerfile

## Landing copy (Docker Hub)

### ES

Imagen oficial de OpenFusion API para desplegar una capa API de integracion lista para produccion.
Integra SQL, SOAP, REST y logica JavaScript con control de acceso, cache y soporte MCP para flujos con agentes de IA.

CTA: **Descarga la imagen y publica tu primer endpoint en minutos.**

### EN

Official OpenFusion API image to deploy a production-ready API integration layer.
Connect SQL, SOAP, REST, and JavaScript handlers with access control, caching, and MCP support for AI-agent workflows.

CTA: **Pull the image and launch your first endpoint in minutes.**

## What this image includes

- Node.js runtime
- Chromium and Linux libraries required by Puppeteer-based PDF generation
- PM2 runtime startup

## Quick start

```bash
docker pull edwinspire/openfusionapi:latest

docker run -d \
  --name openfusionapi \
  --restart unless-stopped \
  -p 3000:3000 \
  -e PORT=3000 \
  -e PUBLIC_API_SERVER_HOST=http://localhost:3000 \
  -e JWT_KEY=CHANGE_THIS_SECRET_KEY \
  -e DATABASE_URI_API=sqlite:/data/openfusionapi.sqlite \
  -e EXPOSE_DEV_API=false \
  -e EXPOSE_QA_API=false \
  -e EXPOSE_PRD_API=true \
  -e PATH_APP_FUNCTIONS=src/fn \
  -v openfusionapi_data:/data \
  edwinspire/openfusionapi:latest
```

Application URL:

http://localhost:3000/openfusionapi

## Required environment variables

- `PUBLIC_API_SERVER_HOST`: public base URL used by the application
- `JWT_KEY`: secret used for tokens and internal hashing
- `DATABASE_URI_API`: database connection string for application metadata

## Notes

- `PUBLIC_API_SERVER_HOST` is required at startup.
- For persistent local storage, mount a volume and use SQLite or an external database.
- The container includes Chromium dependencies to support server-side PDF generation.

## Tags

- `latest`
- versioned tags published manually from this repository
