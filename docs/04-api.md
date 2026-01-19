# HRM v9 Node.js backend

1. Base URLs
Local development backend: http://localhost:3000/api

Staging/Production backend: https://api.example.com/api

Frontend Next.js internal proxy (nếu có): /api/proxy/* → apiBaseUrl/*
2. Authentication
Scheme: Bearer JWT (access token) + refresh token (httpOnly cookie).

Header: Authorization: Bearer <access_token>

Token expiry: access token (short, e.g., 15m), refresh token (longer, e.g., 7d)

Passwords hashed with bcrypt (salt rounds configurable).

Endpoints

POST /auth/login — body: { "email","password" } → returns { accessToken, user }, sets refresh cookie.

POST /auth/refresh — cookie only