# OpenFusionAPI

**OpenFusionAPI** uses Svelte as a framework for the frontend in conjunction with the adapter-node.

  

This makes development easier by creating reusable and reactive components.

  

To learn about Svelte you can visit the following [tutorial](https://svelte.dev/tutorial/basics).

If on the other hand you need to learn how to create APIs from the web interface you can find a detailed tutorial at [libapiserver](https://github.com/edwinspire/libapiserver).

  # Tutorial
We consider that it is easier and more intuitive to show how to use the application in video.
We provide you with a list of videos that can help you create your own APIs in a simple way.

[Preview](https://youtu.be/GpjXgEJV1bI)

## Install
Before starting, remember to have at least NodeJS v20 installed. It is also recommended to use VSCode, although you can use any text editor.

[Installation process](https://youtu.be/L-DC6mIL9oM)


## Exploring the demo

## Create your own application

It is common to have a large number of APIs for different projects. To keep the APIs in order it has been decided to group them into "applications", therefore the first step is to create an application.

![Create app](img/create_app.png)


 1. Press the "New App" button
 2. Put a name in the application, keep in mind that spaces or special characters are not allowed.
 3. Enable the application
 4. Press "Save"

Now you can search for it in the list of applications and select it.


# OpenFusion API – Tutorial & Reference

This section covers everything you need to go from zero to a running API endpoint.

---

## Prerequisites

- Node.js v20 or higher
- A running OpenFusion API instance (see [quick start](../README.md#-quick-start))
- A browser to access the web interface at `http://localhost:3000/openfusionapi`

**Default credentials:** user `superuser` / password `superuser`

---

## Video tutorials

- [Preview overview](https://youtu.be/GpjXgEJV1bI)
- [Installation process](https://youtu.be/L-DC6mIL9oM)

---

## 1. Create an application

All endpoints live inside an **application**. Create one before adding endpoints.

![Create app](img/create_app.png)

1. Click **New App** (top-right)
2. Enter an application name — no spaces or special characters
3. Toggle **Enabled** to `true`
4. Click **Save**

Select the application from the dropdown to start working with it. Each application has three tabs:

- **Endpoints** — list and manage all endpoints for this app
- **Description** — free-text documentation
- **Application variables** — reusable values (credentials, hosts, etc.) per environment

---

## 2. Application variables

Before creating endpoints, define reusable variables that your endpoints will reference. Variables are scoped per environment (`dev`, `qa`, `prd`), which means you can have different database hosts or credentials per stage without changing endpoint code.

Typical use cases:
- Database connection JSON (`{"username":"...","password":"...", ...}`)
- External API base URLs
- WSDL URLs for SOAP services
- Email transporter config for `nodemailer`
- AI model defaults for `askIAWithMCP`

Reference a variable inside endpoint code by its name, e.g. `$_VAR_DB_CONN`.

---

## 3. Create an endpoint

Inside the **Endpoints** tab, click the **New** icon. Configure:

| Field | Description |
|---|---|
| **API Resource** | URL path + environment selector |
| **Handler** | Logic engine for this endpoint |
| **Method** | HTTP verb: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `WS`, `MQTT` |
| **Access** | `Public`, `Bearer` (JWT required), or `Private` |
| **Timeout Cache** | Response cache TTL in seconds (`0` = disabled) |
| **Description** | Human/AI-readable description of the endpoint purpose |

Once the handler is selected, additional configuration tabs appear.

---

## 4. JSON Schema tab

Define the expected input shape using [JSON Schema](https://json-schema.org/). This is especially important when the endpoint is used as an MCP tool — it tells AI agents exactly what fields to send.

---

## 5. MCP tab

Enable any endpoint as an **MCP tool** consumable by AI agents (GitHub Copilot, Claude, GPT, etc.):

- Set the tool **name** (no spaces)
- Set the tool **title** and **description**
- The platform generates an MCP-compatible interface automatically

---

## Handler reference

| Handler | Best for |
|---|---|
| [JS](handlers/javascript.md) | Custom server-side logic, data transformation, orchestration |
| [SQL](handlers/sql.md) | CRUD operations on relational databases |
| [FETCH](handlers/fetch.md) | Proxying or forwarding calls to external REST APIs |
| [SOAP](handlers/soap.md) | Integrating legacy SOAP/WSDL web services |
| [FUNCTION](handlers/functions.md) | Calling pre-registered internal backend functions |
| SQL_BULK_I | High-volume bulk insert operations |
| MONGODB | MongoDB collection queries and mutations |
| HANA | SAP HANA database access |
| MCP | Expose endpoints as MCP tools for AI agents |
| TELEGRAM_BOT | Telegram bot interaction handlers |
| TEXT | Return static or dynamic text/file responses |

---

## URL structure

All endpoints follow this pattern:

```
/api/{app}/{environment}/{resource}/{version}
```

Example:
```
/api/demo/dev/main/test_fetch/0.01
```

- `demo` — application name
- `dev` — environment (`dev`, `qa`, `prd`)
- `main/test_fetch` — resource path
- `0.01` — version

---

## Environments

The platform manages three independent environments:

| Environment | Purpose |
|---|---|
| `dev` | Active development |
| `qa` | Staging and validation |
| `prd` | Production traffic |

Each environment can be independently exposed via the `EXPOSE_DEV_API`, `EXPOSE_QA_API`, and `EXPOSE_PRD_API` environment variables.

---

## Access control

| Level | Behavior |
|---|---|
| **Public** | No authentication required |
| **Bearer** | JWT required in `Authorization: Bearer <token>` header |
| **Private** | Not exposed externally |






