# FETCH Handler – HTTP Proxy & Forwarder

The **FETCH handler** enables OpenFusionAPI to act as a robust HTTP proxy, forwarding requests to external services while managing headers, caching, and response transformation.

Internally it uses `@edwinspire/universal-fetch` to perform standardized HTTP requests.

---

## How it works

1. **Request forwarding** — the incoming HTTP method (GET, POST, PUT, etc.), query parameters, and body are forwarded to the target URL.
2. **Header sanitization** — incoming headers are forwarded except hop-by-hop headers (`content-length`, `host`, `connection`, `x-forwarded-for`).
3. **Variable injection** — Application Variables can be used in the target URL: `https://api.example.com/{{ENV}}/resource`.
4. **Response handling** — content type is auto-detected (JSON, text, XML, binary) and processed accordingly.
5. **Response forwarding** — upstream headers (`content-type`, `etag`, `cache-control`, etc.) are passed back to the client.

---

## Endpoint configuration

The **Code** field contains just the target URL:

```text
https://jsonplaceholder.typicode.com/posts
```

With an Application Variable:
```text
https://api.partner.com/{{ENV}}/orders
```

---

## Examples

### Proxy a public API without parameters

Use the GitHub API to return a user profile. Set the Code field to:

```text
https://api.github.com/users/edwinspire
```

Method: `GET` | Access: `Public`

[Video tutorial](https://youtu.be/zcUoMxmmx-M)

---

### Proxy a REST API with query parameters

The parameters sent to the OpenFusionAPI endpoint are forwarded automatically to the upstream service.

Code field:
```text
https://fakestoreapi.com/carts
```

Method: `GET` | Receives: `userId` as query param

```bash
curl "https://your-server/api/myapp/dev/main/carts/0.01?userId=3"
```

[Video tutorial](https://youtu.be/d_aR-s62S5I)

---

### Proxy a POST request

Code field:
```text
https://jsonplaceholder.typicode.com/posts
```

Method: `POST`

```bash
curl -X POST https://your-server/api/myapp/dev/main/posts/0.01 \
    -H "Content-Type: application/json" \
    -d '{"title": "foo", "body": "bar", "userId": 1}'
```

---

## Capability summary

| Feature | Supported |
|---|---:|
| HTTP/HTTPS proxying | ✅ |
| All HTTP methods (GET, POST, PUT, DELETE, PATCH) | ✅ |
| Header forwarding (selective) | ✅ |
| Binary content (images, PDF, ZIP) | ✅ |
| Variable substitution in URL | ✅ |
| Response caching | ✅ (binary responses > 50 MB excluded) |
| Built-in authentication | ❌ (pass via headers) |

---

## Typical use cases

- **API gateway** — unify multiple microservices under a single domain
- **Asset proxy** — serve external images or files while hiding the source origin
- **Legacy wrapper** — add CORS headers or caching to external APIs
- **Environment routing** — point dev/qa/prd to different upstream URLs using App Variables
