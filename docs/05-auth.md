1. Nguyên tắc chính

Access token: JWT, short-lived (ví dụ 15m). Dùng để xác thực API request.

Refresh token: long-lived (ví dụ 7–30d), lưu server-side (DB) dưới dạng hashed hoặc lưu identifier + rotate token. Gọi POST /auth/refresh để đổi lấy access mới.

Sessionless API: ưu tiên JWT + refresh rotation; không phụ thuộc session server memory.

Cookies: refresh token nên được set trong cookie HttpOnly, Secure, SameSite=Strict/Lax (tuỳ UX), path /auth/refresh.

Least privilege: phân quyền theo permission (action-based) chứ không chỉ role-based khi cần chính xác.

Rate limit: áp dụng trên endpoints auth (login, refresh, forgot-password).

2. Endpoint chính

POST /api/auth/login

Body: { "email", "password" }

Response 200: { accessToken, user }, kèm Set-Cookie: refreshToken=...; HttpOnly; Secure; SameSite=...

POST /api/auth/refresh

Cookie only (refresh token) → trả 200 { accessToken } và có thể rotate refresh cookie.

POST /api/auth/logout

Xóa/thu hồi refresh token server-side, clear cookie.

POST /api/auth/forgot-password

Body: { email } → gửi email có one-time token (exp short).

POST /api/auth/reset-password

Body: { token, newPassword } → validate token, set password, revoke existing refresh tokens.

POST /api/auth/change-password

Authenticated → Body { oldPassword, newPassword } → verify + update + revoke refresh tokens if nghi ngờ.

POST /api/auth/mfa/enable — POST /api/auth/mfa/verify — POST /api/auth/mfa/disable (nếu triển khai MFA)

GET /api/auth/me — lấy thông tin user hiện tại (Auth header).

OAuth (optional): /api/auth/oauth/:provider callback endpoints.

3. Token design & rotation

Access token payload: sub(userId), iat, exp, roles, scopes (nếu cần), jti (token id, optional). Giữ payload nhỏ.

Refresh token: lưu identifier (jti) + hashed token ở DB với expiresAt, deviceInfo, ip, revoked flag, lastUsedAt.

Refresh rotation: khi refresh, issue new refresh token and mark previous one revoked. Nếu nhận thấy reuse of revoked token → force logout all sessions for that user and trigger security alert.

Revocation: support blacklist/denylist for access tokens short-term (rare), primary revoke via refresh list. For immediate logout, remove/invalidate refresh entries.