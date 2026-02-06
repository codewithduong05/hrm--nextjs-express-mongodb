# Nguyên tắc xử lý sự cố
+ Tái hiện được lỗi (reproduce) ở môi trường thấp nhất có thể (local → staging).
+ Thu hẹp phạm vi: frontend / backend / database / infra.
+ Kiểm tra log trước khi sửa code.
+ Không sửa trực tiếp production nếu chưa có bản vá qua CI/CD.
+ Ghi nhận post-mortem cho các sự cố nghiêm trọng.

# Sự cố khởi động (Startup issues)
2.1 Backend không start được
Triệu chứng
npm run dev treo hoặc exit.
Log: EADDRINUSE, Cannot find module, DATABASE_URL is undefined.
Nguyên nhân thường gặp
Port đã bị process khác chiếm.
Thiếu hoặc sai .env.
Node version không đúng.
Cách xử lý
Kiểm tra port:
Sao chép mã
Bash
lsof -i :3000
kill -9 <pid>
So sánh .env với .env.example.
Kiểm tra Node version:
Sao chép mã
Bash
node -v
nvm use
2.2 Frontend Next.js không start
Triệu chứng
npm run dev báo lỗi compile.
White screen trên trình duyệt.
Nguyên nhân
Sai biến NEXT_PUBLIC_API_BASE.
Lỗi import / path alias.
Mismatch Node version.
Cách xử lý
Kiểm tra .env frontend.
Clear cache:
Sao chép mã
Bash
rm -rf .next node_modules
npm install
npm run dev
