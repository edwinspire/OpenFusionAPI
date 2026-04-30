# FUNCTION Handler – Internal Backend Functions

The **FUNCTION handler** invokes pre-registered JavaScript functions that live in the server's file system. Unlike the JS handler (which accepts inline code), this handler routes requests to named functions defined in your backend `src/fn` folder.

This is the right choice when your logic:
- Is too complex or long for the inline JS editor
- Requires `npm` modules not available in the VM sandbox
- Must be version-controlled independently as a `.js` file
- Is shared across multiple endpoints

---

## How it works

1. **Lookup** — the system looks up the function name in the internal registry (`fnLocal`). It checks the specific app environment first, then the public scope.
2. **Execution** — the function runs with a standardized context object containing the request, response helpers, and server data.
3. **Timeout** — execution is capped at a **5-minute timeout** (AbortController).
4. **Validation** — the return value is validated against a predefined schema to ensure a consistent response structure.

---

## Endpoint configuration

Set the **Handler** to `FUNCTION`.

In the **Code** field, enter the name of the registered function:

```text
myCustomCalculationFn
```

---

## Creating a backend function

Place your `.js` file inside the path configured by the `PATH_APP_FUNCTIONS` environment variable (default: `src/fn`). The file must export an async function with this signature:

```javascript
export async function myCustomCalculationFn({
	request,      // Raw HTTP request object
	user_data,    // Merged query string + body
	reply,        // Fastify reply object
	server_data,  // Internal server context
	signal        // AbortSignal for timeout handling
}) {
	// Your logic here

	return {
		code: 200,
		data: { result: "success" }
	};
}
```

---

## Response format

The function **must** return an object with this structure:

```json
{
	"code": 200,
	"data": { }
}
```

| Field | Description |
|---|---|
| `code` | HTTP status code to return (e.g. `200`, `400`, `500`) |
| `data` | The actual response payload — object, array, or string |

If the return value does not match this schema, the handler returns HTTP `500` with validation errors.

---

## Example

**File:** `src/fn/public/prd/calculateTax.js`

```javascript
export async function calculateTax({ user_data }) {
	const { amount, rate } = user_data;

	if (!amount || !rate) {
		return { code: 400, data: { error: "amount and rate are required" } };
	}

	const tax = parseFloat(amount) * parseFloat(rate) / 100;

	return {
		code: 200,
		data: {
			amount: parseFloat(amount),
			rate: parseFloat(rate),
			tax: tax,
			total: parseFloat(amount) + tax,
		}
	};
}
```

**Endpoint Code field:**
```text
calculateTax
```

**HTTP call (GET):**
```bash
curl "https://your-server/api/myapp/dev/main/tax/0.01?amount=1000&rate=16"
```

**Response:**
```json
{
	"amount": 1000,
	"rate": 16,
	"tax": 160,
	"total": 1160
}
```

---

## File path conventions

Functions are organized under `PATH_APP_FUNCTIONS` by scope and environment:

```
src/fn/
	public/
		dev/     ← Development environment functions
		qa/      ← Quality environment functions
		prd/     ← Production environment functions
	system/
		dev/
		qa/
		prd/
```

---

## Capability summary

| Feature | Supported |
|---|---:|
| Access to full Node.js modules | ✅ |
| Access to request, query, body | ✅ |
| Timeout protection (5 min) | ✅ |
| Response schema validation | ✅ |
| Shared across multiple endpoints | ✅ |
| Version-controlled as files | ✅ |
