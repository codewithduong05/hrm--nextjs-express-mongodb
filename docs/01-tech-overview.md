I. 🧱 KIẾN TRÚC TỔNG QUAN

```text
                        ┌─────────────────────────────────────────────────────────────┐
                        │                        CLIENT LAYER                         │
                        │ ┌─────────────────────┐    ┌──────────────────────────────┐ │
                        │ │ Web Next.js or React│ ←→ │ Flutter(no update)(Android/iOS)│ 
                        │ └─────────────────────┘    └──────────────────────────────┘ │
                        └─────────────────────────────────────────────────────────────┘
                                        ↓ REST API + WebSocket (Socket.io)
                        ┌─────────────────────────────────────────────────────────────┐
                        │                    SERVER LAYER (Node.js)                   │
                        │  Express.js API Routes + Controllers + Middlewares          │
                        │  Socket.io (Chat Server)                                    │
                        │  AI Module (Recommendation / Chatbot / Content Filter)      │
                        │  Auth (JWT / OAuth2)                                        │
                        │  Clean Architecture (MVC + Service + Repository)            │
                        └─────────────────────────────────────────────────────────────┘
                                        ↓
                        ┌─────────────────────────────────────────────────────────────┐
                        │                   DATABASE LAYER (MongoDB)                  │
                        │ Collections: Users, Employee_Profiles,Attendances,Salaries  │
                        │ Leave Requests,Contracts,Performance_reviews,trainings,     │
                        │ Promotions,Notifications,Support_tickets,System_configs     │
                        └─────────────────────────────────────────────────────────────┘
                                        ↓
                        ┌─────────────────────────────────────────────────────────────┐
                        │                    DEVOPS LAYER (comming soom )             │
                        │ Docker, Docker Compose, CI/CD (GitHub Actions)              │
                        │ Deploy: VPS / Vercel / Nginx                                │
                        └─────────────────────────────────────────────────────────────┘
II.📘 MODULE DETAIL & MILESTONES

1. Overview

Tài liệu này mô tả chi tiết các Module chức năng của hệ thống HRM và lộ trình triển khai (Milestones).
Thiết kế dựa trên các tác nhân Admin và Employee, bám sát mô hình dữ liệu và nghiệp vụ thực tế.

Nguyên tắc:
1. Module độc lập
2. Dễ triển khai theo giai đoạn
3. Dễ mở rộng và bảo trì

## 2. Module Detail 

### Module 01: User & Employee Management 

Tác nhân: Admin, Employee
Mã chức năng: 
  Admin: AD-HRM01
  Employee: EMP-PRF01, EMP-ACC01
Chức năng chính:
  Quản lý tài khoản người dùng
  Quản lý hồ sơ nhân viên
  Cập nhật thông tin cá nhân
Bảng dữ liệu: 
  users
  employee_profiles
Ghi chú triển khai:
  Đây là module nền tảng, phải hoàn thành trước các module khác
  Áp dụng RBAC theo role

### Module 02: Attendance & Leave Management 

Tác nhân: Admin, Employee
Mã chức năng: 
  AD-HRM02, AD-HRM05
  EMP-ATT01, EMP-LEA01
Chức năng chính:
  Ghi nhận và theo dõi chấm công
  Nộp và duyệt đơn nghỉ phép
Bảng dữ liệu: 
  attendances
  leave_requests
Ghi chú triển khai:
  Logic duyệt đơn phải tách Service riêng
  Có thể mở rộng sang máy chấm công sau này

### Module 03: Salary & Benefit Management 

Tác nhân: Admin, Employee
Mã chức năng: 
  AD-HRM03, AD-HRM07
  EMP-SAL01, EMP-BEN01
Chức năng chính:
  Thiết lập quy tắc lương thưởng
  Xem bảng lương cá nhân
  Quản lý phúc lợi
Bảng dữ liệu: 
  salaries
  benefits
Ghi chú triển khai:
  Lương chỉ đọc với Employee
  Admin có quyền duyệt và khóa bảng lương

### Module 04: Performance & Promotion 

Tác nhân: Admin, Employee
Mã chức năng: 
  AD-HRM04, AD-HRM15
  EMP-EVAL01, EMP-PRM01
Chức năng chính:
  Đánh giá hiệu suất
  Theo dõi và phê duyệt thăng tiến
Bảng dữ liệu: 
  performance_reviews
  promotions
Ghi chú triển khai:
  Đánh giá theo kỳ (quý / năm)
### Module 05: Training & Recruitment 

Tác nhân: Admin, Employee
Mã chức năng: 
  AD-HRM06, AD-HRM14
  EMP-TRN01, EMP-REC01
Chức năng chính:
  Quản lý chương trình đào tạo
  Đăng ký khóa học
  Tuyển dụng & ứng tuyển nội bộ
Bảng dữ liệu: 
  trainings
  training_enrollments
  (mở rộng) recruitments, applications
### Module 06: Notification & Support 

Tác nhân: Admin, Employee
Mã chức năng: 
  AD-HRM09, AD-HRM10
  EMP-NTF01, EMP-SPT01
Chức năng chính:
  Gửi và nhận thông báo
  Hỗ trợ kỹ thuật & nghiệp vụ
Bảng dữ liệu: 
  notifications
  support_tickets
### Module 07: System & Report Management 

Tác nhân: Admin
Mã chức năng: 
  AD-HRM11, AD-HRM12, AD-HRM13
Chức năng chính:
  Quản lý bảo mật
  Cấu hình hệ thống
  Xem và xuất báo cáo
Bảng dữ liệu: 
  system_configs
  (logic tổng hợp từ các bảng khác)

III . Clean Code
4 tiers: Distribution -> Applications -> Domains -> Infrastructure.

Project Structure

├─ src/
│  ├─ main.js             
│  ├─ app.js             
│
│  ├─ config/
│  │  ├─ env.js
│  │  ├─ database.js
│  │  ├─ roles.js
│  │  └─ permissions.js
│
│  ├─ shared/                
│  │  ├─ errors/
│  │  ├─ constants/
│  │  ├─ utils/
│  │  └─ base/
│  │     ├─ BaseRepository.js
│  │     ├─ BaseService.js
│  │     └─ BaseController.js
│
│  ├─ modules/
│  │  ├─ attendance/
│  │  │  ├─ domain/
│  │  │  ├─ application/
│  │  │  ├─ infrastructure/
│  │  │  └─ delivery/
│  │  ├─ payroll/
│  │  ├─ users/
│  │  └─ ...
│
│  ├─ middlewares/
│  │  ├─ auth.middleware.js
│  │  ├─ permission.middleware.js
│  │  └─ error.middleware.js
│
│  └─ routes.js
│
├─ Dockerfile
└─ package.json
