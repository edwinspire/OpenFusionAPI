# SOAP Handler – XML Web Services Connector

The **SOAP handler** enables integration with legacy and enterprise SOAP web services. It uses the `node-soap` library to parse WSDLs and execute methods dynamically, returning results as JSON.

---

## How it works

1. **Client initialization** — creates a SOAP client based on the provided WSDL URL.
2. **Caching** — initialized SOAP clients are cached in memory (LRU strategy, max 50 clients, 10-minute TTL) to avoid re-parsing on every request.
3. **Forwarding** — maps JSON input from the HTTP request to the XML arguments required by the SOAP method.
4. **Header forwarding** — most HTTP headers from the incoming request are forwarded to the SOAP service.
5. **Execution** — interaction happens asynchronously; the XML response is automatically converted to JSON.

---

## Endpoint configuration

The **Code** field accepts either a reference to an Application Variable (recommended) or an inline JSON config.

**Using an Application Variable (recommended):**
```text
$_VAR_SOAP_SERVICE_WSDL
```
The App Var value should contain the WSDL URL string.

**Inline config (for testing):**
```json
{
	"wsdl": "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL",
	"options": {
		"wsdl_options": {
			"timeout": 5000
		}
	}
}
```

---

## Calling a SOAP method

Send `functionName` and `RequestArgs` in the POST body:

```json
{
	"functionName": "NumberToWords",
	"RequestArgs": {
		"ubiNum": 500
	}
}
```

- `functionName` — the WSDL port operation name (not the XML body element name)
- `RequestArgs` — input fields mapped to the SOAP method parameters

> **Important:** the WSDL URL is the metadata document that `node-soap` parses. It is often different from the SOAP runtime endpoint URL. If you are unsure, use `"describe()": true` first (see below).

---

## Discover available methods

To inspect a SOAP service and see available operations, include `"describe()": true` in the request body or config:

```json
{
	"wsdl": "https://your-service.example/service?WSDL",
	"describe()": true
}
```

This returns the full client description (services, ports, operations, inputs, outputs) as JSON. **Always run this first** when integrating an unknown SOAP service to get the correct `functionName`.

---

## Authentication

**Basic authentication:**
```json
{
	"wsdl": "https://...",
	"BasicAuthSecurity": {
		"User": "myuser",
		"Password": "mypassword"
	}
}
```

**Bearer token:**
```json
{
	"wsdl": "https://...",
	"BearerSecurity": "your_oauth_token_here"
}
```

> When `BasicAuthSecurity` or `BearerSecurity` is configured, the same credential is used for both the WSDL download and the SOAP operation call — this is required when the WSDL document itself is protected.

---

## Real-world example

Convert a SOAP `NumberToWords` service into a REST endpoint:

**Endpoint config:**
- Method: `POST`
- Handler: `SOAP`
- Code: `{"wsdl": "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL"}`

**HTTP call:**
```bash
curl -X POST https://your-server/api/myapp/dev/main/number_to_words/0.01 \
	-H "Content-Type: application/json" \
	-d '{"functionName": "NumberToWords", "RequestArgs": {"ubiNum": 500}}'
```

**Response (auto-converted from XML to JSON):**
```json
{
	"NumberToWordsResult": "five hundred "
}
```

---

## Local WSDL strategy

When the SOAP service does not expose a publicly accessible WSDL URL:

1. Save the WSDL XML document locally.
2. Publish it via a TEXT handler endpoint.
3. Point the SOAP handler `wsdl` to that local URL.

```json
{
	"wsdl": "https://your-server.example/api/demo/soap/contracts/my-service/wsdl/prd",
	"functionName": "SubmitOrder",
	"BasicAuthSecurity": {
		"User": "service_user",
		"Password": "service_password"
	}
}
```

---

## Capability summary

| Feature | Supported |
|---|---:|
| WSDL parsing | ✅ |
| Client caching (LRU + TTL) | ✅ |
| Basic Auth / Bearer Auth | ✅ |
| Application Variable reference | ✅ |
| Dynamic method invocation | ✅ |
| Header forwarding | ✅ |
| Service discovery (`describe()`) | ✅ |
| XML → JSON auto-conversion | ✅ |
| Local WSDL publishing strategy | ✅ |
