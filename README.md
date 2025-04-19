# Express Authentication API

## Project Description

This project is an **Express.js** based API for user authentication, role-based access control, and password reset functionality. The API uses **JWT (JSON Web Tokens)** for secure authentication, **bcrypt** for hashing passwords, and supports **refresh tokens** for token regeneration. It also includes password reset flow and role-based authorization with **user**, **moderator**, and **admin** roles.

### Prerequisites
- **Node.js** (>=v12.0.0)
- **npm** (>=v6.0.0)
## Setup Instructions
To get started with the Express Authentication API, follow these steps:

Prerequisites
Before running the project, make sure you have the following installed:

Node.js (>=v12.0.0)

npm (>=v6.0.0)

Steps to Set Up the Project Locally
Clone the Repository: First, clone the repository to your local machine:


git clone https://github.com/your-username/express-auth-api.git
cd express-auth-api
Install Dependencies: Install the required dependencies using npm:


npm install
Create a .env File: In the root directory of the project, create a .env file. This file contains environment variables that the app needs to run, such as the JWT secret and port number.

Add the following lines to your .env file:

JWT_SECRET=your_jwt_secret_key
PORT=5000
Replace your_jwt_secret_key with a secret key of your choice. This key will be used to sign and verify your JWT tokens.

Start the Server: After installing the dependencies and setting up the .env file, you can start the server:


npm start
This will run the server on http://localhost:5000.

Testing the API: Now, you can test the API using Postman or any other API testing tool. Make sure to test the following endpoints:

POST /api/auth/register for user registration.

POST /api/auth/login for user login.

POST /api/auth/refresh for refreshing tokens.

POST /api/auth/forgot-password and /api/auth/reset-password/:token for password reset flow.

Optional: Testing with Postman
You can import the Postman collection to easily test all the API endpoints. If you have a Postman collection, make sure to update the link-to-postman-collection section in your README.md file.


/*##Features Implemented
User Registration (POST /api/auth/register):

Registers a new user with username, email, password, and role.

Validates email format and enforces strong password requirements (min. 8 characters, 1 number, 1 special character).

User Login (POST /api/auth/login):

Logs in a user by validating credentials (email and password).

Returns an access token and refresh token upon successful login.

Refresh Access Token (POST /api/auth/refresh):

Refreshes the access token using a valid refresh token.

Returns a new access token if the refresh token is valid.

Password Reset Flow:

Forgot Password (POST /api/auth/forgot-password): Requests a password reset by email, generates a reset token.

Reset Password (POST /api/auth/reset-password/:token): Resets the user’s password using the reset token.

Role-Based Authorization:

Public Route (GET /api/public): Accessible by everyone.

Protected Route (GET /api/protected): Requires authentication (JWT token).

Moderator Route (GET /api/moderator): Accessible by moderator and admin roles.

Admin Route (GET /api/admin): Accessible only by the admin role.*/

### Steps to Run the Project Locally

1. **Clone the Repository**:
   https://github.com/s-pakinamkhaled/web-ass6

How to Test Each Endpoint Using Postman
1. User Registration (POST /api/auth/register)
Purpose: Registers a new user by providing username, email, password, and role.

Method: POST

URL: http://localhost:5000/api/auth/register

Body (JSON):

{
  "username": "user1",
  "email": "user1@example.com",
  "password": "Password123!",
  "role": "user"
}
Expected Response:


{
  "message": "User registered successfully!"
}
2. User Login (POST /api/auth/login)
Purpose: Logs in a user and returns an access token and refresh token.

Method: POST

URL: http://localhost:5000/api/auth/login

Body (JSON):


{
  "email": "user1@example.com",
  "password": "Password123!"
}
Expected Response:


{
  "accessToken": "your-access-token",
  "refreshToken": "your-refresh-token"
}
Use the access token in the Authorization header for subsequent requests to protected routes.

3. Refresh Access Token (POST /api/auth/refresh)
Purpose: Refreshes the access token using a valid refresh token.

Method: POST

URL: http://localhost:5000/api/auth/refresh

Body (JSON):


{
  "refreshToken": "your-refresh-token-here"
}
Expected Response:


{
  "newAccessToken": "new-access-token"
}
4. Request Password Reset (POST /api/auth/forgot-password)
Purpose: Requests a password reset by providing the user's email. A reset token will be generated and sent.

Method: POST

URL: http://localhost:5000/api/auth/forgot-password

Body (JSON):


{
  "email": "user1@example.com"
}
Expected Response:


{
  "message": "Password reset link: /reset-password/your-reset-token-here"
}
The reset token will be included in the response. In a real-world scenario, this would be sent via email.

5. Reset Password (POST /api/auth/reset-password/:token)
Purpose: Resets the user's password using a valid reset token and a new password.

Method: POST

URL: http://localhost:5000/api/auth/reset-password/:token

Replace :token with the reset token you received from the previous forgot-password request.

Body (JSON):


{
  "newPassword": "NewPassword123!"
}
Expected Response:


{
  "message": "Password reset successful"
}
The password will be updated for the user if the token is valid.

Testing the Protected Routes
You can now test the protected routes (which require an authenticated user) by using the access token obtained during the login process.

6. Public Route (GET /api/public)
Purpose: This route is accessible by everyone.

Method: GET

URL: http://localhost:5000/api/public

Expected Response:


{
  "message": "This is a public route"
}
7. Protected Route (GET /api/protected)
Purpose: This route requires a valid access token to access.

Method: GET

URL: http://localhost:5000/api/protected

Authorization: Use the access token you received from the login request.

In Postman, go to the Authorization tab and select Bearer Token. Then paste the access token into the text field.

Expected Response:


{
  "message": "This is a protected route"
}
8. Moderator Route (GET /api/moderator)
Purpose: This route is accessible by moderators and admins.

Method: GET

URL: http://localhost:5000/api/moderator

Authorization: Provide the access token in the Authorization header.

Expected Response:


{
  "message": "This is a moderator route"
}
9. Admin Route (GET /api/admin)
Purpose: This route is accessible only by admins.

Method: GET

URL: http://localhost:5000/api/admin

Authorization: Provide the access token in the Authorization header.

Expected Response:


{
  "message": "This is an admin route"
}
Additional Information
Authorization: For protected routes, you will need to add the access token as a Bearer Token in the Authorization tab in Postman for routes like /api/protected, /api/moderator, and /api/admin.

Role Authorization:

If the user role is admin, they will be able to access the admin route.

If the user role is moderator, they can access the moderator route.

If the user has a different role (e.g., user), they will not be able to access routes restricted to moderators or admins.