# SQL Handler
The SQL Handler can connect to most database engines, including PostgreSQL, MariaDB, MySQL, MS SQLServer, Oracle.

Its APIs can easily interact to perform CRUD operations directly in SQL language.
 
## Examples
For this test an MS SQLServer database will be used.

The connection parameters are the following:

**Host:** localhost
**User:** sa
**Password:** OpenFusionAPI.2023
**Database:** master

Connection parameters must be saved in JSON format.

	{
	  "database": "master",
	  "username": "sa",
	  "password": "OpenFusionAPI.2023",
	  "options": {
    "host": "localhost",
    "dialect": "mssql"
	  }
	}

We will use a table called **"users"** in which we will perform a CRUD.


### 1. Check the version of the database.

	SELECT @@VERSION 

### 2. Read (Select) all users:

	SELECT * FROM users;

### 3. Read (Select) users using a parameter to filter.

	SELECT * FROM users WHERE iduser = $iduser;

### 4. Create (Insert) a new user:

	INSERT INTO users (date_reg, first_name, last_name, email, birthday) VALUES (GETDATE(), $first_name, $last_name, $email, GETDATE());  

### 5. Update user information:

	DECLARE @UserID INT = $iduser;
	UPDATE users SET first_name = $first_name, last_name = $last_name WHERE iduser = @UserID;


### 6. Delete user by ID:

	DECLARE @UserID INT = $iduser;
	DELETE FROM users WHERE iduser = @UserID;

[Video Tutorial](https://you.cm)

#
These are just very basic examples of what you can do, the complexity of your APIs depends on your needs.
