# OpenFusionAPI Docker Image

OpenFusionAPI is a web-based API builder focused on SQL, REST, SOAP, JavaScript handlers, and PDF generation workflows.

Source repository:
https://github.com/edwinspire/OpenFusionAPI

Dockerfile used to build this image:
https://github.com/edwinspire/OpenFusionAPI/blob/main/Dockerfile

## Supported usage

This image includes:

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
