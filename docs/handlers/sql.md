# SQL Handler

The **SQL handler** connects to relational databases and exposes SQL queries directly as REST endpoints. It supports PostgreSQL, MySQL, MariaDB, MS SQL Server, Oracle, and SQLite.

Underneath it uses [Sequelize](https://sequelize.org) to manage connections, so any Sequelize-compatible dialect works out of the box.

---

## How it works

1. The endpoint **Code** field contains the SQL statement to execute.
2. Parameters prefixed with `$` in the query are automatically bound from the HTTP request (`query` for GET, `body` for POST).
3. The connection config is read from an **Application Variable** (recommended) or can be passed inline.
4. Results are returned as a JSON array.

---

## Connection configuration

Store the connection JSON as an Application Variable (e.g. `$_VAR_DB_CONN`) and reference it by name in the endpoint's connection field.

**PostgreSQL:**
```json
{
	"database": "mydb",
	"username": "pguser",
	"password": "secret",
	"options": {
		"host": "localhost",
		"dialect": "postgres"
	}
}
```

**MS SQL Server:**
```json
{
	"database": "master",
	"username": "sa",
	"password": "YourPassword",
	"options": {
		"host": "localhost",
		"dialect": "mssql"
	}
}
```

**MySQL / MariaDB:**
```json
{
	"database": "mydb",
	"username": "root",
	"password": "secret",
	"options": {
		"host": "localhost",
		"dialect": "mysql"
	}
}
```

---

## Parameter binding

Use `$parameter_name` in SQL to bind values from the request:

- `GET` endpoints → parameters come from query string
- `POST` endpoints → parameters come from request body

---

## CRUD examples (MS SQL Server)

### Check database version
```sql
SELECT @@VERSION
```

### Select all rows
```sql
SELECT * FROM users;
```

### Select with filter (GET — `?iduser=5`)
```sql
SELECT * FROM users WHERE iduser = $iduser;
```

### Insert (POST body: `first_name`, `last_name`, `email`)
```sql
INSERT INTO users (date_reg, first_name, last_name, email, birthday)
VALUES (GETDATE(), $first_name, $last_name, $email, GETDATE());
```

### Update (POST body: `iduser`, `first_name`, `last_name`)
```sql
DECLARE @UserID INT = $iduser;
UPDATE users
SET first_name = $first_name, last_name = $last_name
WHERE iduser = @UserID;
```

### Delete (POST body: `iduser`)
```sql
DECLARE @UserID INT = $iduser;
DELETE FROM users WHERE iduser = @UserID;
```

### Stored procedure call
```sql
EXEC sp_get_user_report @user_id = $user_id, @include_inactive = $include_inactive;
```

[Video Tutorial](https://youtu.be/av52Gfkegys)

---

## PostgreSQL examples

### Select with pagination
```sql
SELECT * FROM orders
WHERE customer_id = $customer_id
ORDER BY created_at DESC
LIMIT $limit OFFSET $offset;
```

### Insert returning the new ID
```sql
INSERT INTO products (name, price, stock)
VALUES ($name, $price, $stock)
RETURNING id;
```

---

## Capability summary

| Feature | Supported |
|---|---:|
| PostgreSQL | ✅ |
| MySQL / MariaDB | ✅ |
| MS SQL Server | ✅ |
| Oracle | ✅ |
| SQLite | ✅ |
| Named parameter binding (`$param`) | ✅ |
| Stored procedures | ✅ |
| App Variable for connection config | ✅ |
| Response caching | ✅ |
