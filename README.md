# 🏋‍♂ FITNESS APPLICATION — Spring Boot + Oracle + Keycloak

A *Fitness Tracking System* built with *Spring Boot, **Oracle Database, and **Spring Security (JWT / Keycloak)*.  
It allows users to register, log in, track their fitness activities, and view performance metrics — all through secure microservices.

---

## 🚀 Tech Stack

| Layer | Technology Used |
|--------|----------------|
| *Backend* | Spring Boot (Java 17) |
| *Database* | Oracle Database |
| *ORM* | Spring Data JPA / Hibernate |
| *Security* | Keycloak / JWT |
| *Frontend* | HTML, CSS, JS / Thymeleaf (optional) |
| *Build Tool* | Maven |
| *Version Control* | Git & GitHub |

---

## 🧩 Project Modules

### 🧑‍💼 1. *User Service*
- Handles user registration and profile management.
- Stores user details in Oracle.
- Integrates with Keycloak for authentication.
- Fixed issue: lookup by *keycloakId* instead of database ID.

  🏃‍♂ 2. Activity Service
	•	Manages user workout sessions.
	•	Stores duration, calories, type, and other metrics.
	•	Uses Oracle JSON converter for flexible data.

🔐 3. Gateway Service
	•	Routes all frontend requests securely to backend microservices.
	•	Handles authentication using JWT from Keycloak.
	•	Ensures only verified users access internal APIs.


  🔑 Authentication Flow (Keycloak)
	1.	User logs in via Keycloak.
	2.	Keycloak returns a JWT token.
	3.	Gateway verifies the token and extracts Keycloak ID.
	4.	User Service validates Keycloak ID in Oracle.
	5.	Request proceeds to Activity Service.
🧑‍💻 Author

👤 Zulkar Naine Alam
📧 zulkardbg1458@gmail.com
💼 Java Developer | 3+ Years Experience
📍 Hyderabad, India
🔗 GitHub Profile

 

#### Example Endpoint:
```http
GET /api/users/{keycloakId}
