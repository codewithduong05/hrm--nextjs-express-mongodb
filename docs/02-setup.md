# Bảng TÁC NHÂN & TÀI KHOẢN (Core)

🧑‍💼 users (code : USER-01)
| Field     | Type     | Mô tả                |
| --------- | -------- | -------------------- |
| id        | ObjectId | Khóa chính           |
| email     | String   | Email đăng nhập      |
| password  | String   | Mật khẩu (hash)      |
| role      | Enum     | `ADMIN` / `EMPLOYEE` |
| status    | Enum     | ACTIVE / LOCKED      |
| createdAt | Date     | Ngày tạo             |


🧾 employee_profiles ( code : EMP-PRF01, AD-HRM01 )
| Field      | Type     | Mô tả        |
| ---------- | -------- | ------------ |
| userId     | ObjectId | FK → users   |
| fullName   | String   | Họ tên       |
| dob        | Date     | Ngày sinh    |
| phone      | String   | SĐT          |
| address    | String   | Địa chỉ      |
| position   | String   | Chức danh    |
| department | String   | Phòng ban    |
| joinDate   | Date     | Ngày vào làm |

# NHÓM CHẤM CÔNG – NGHỈ PHÉP
⏱️ attendances ( code : AD-HRM02, EMP-ATT01 ⛓️)
| Field      | Type                         |
| ---------- | ---------------------------- |
| employeeId | ObjectId                     |
| date       | Date                         |
| checkIn    | Time                         |
| checkOut   | Time                         |
| status     | Enum (Present, Late, Absent) |

🌿 leave_requests → AD-HRM05, EMP-LEA01 🏹
| Field      | Type                               |
| ---------- | ---------------------------------- |
| employeeId | ObjectId                           |
| fromDate   | Date                               |
| toDate     | Date                               |
| reason     | String                             |
| status     | Enum (Pending, Approved, Rejected) |
| approvedBy | ObjectId (Admin)                   |

💰 salaries → AD-HRM03, EMP-SAL01 ⚔️
| Field      | Type                   |
| ---------- | ---------------------- |
| employeeId | ObjectId               |
| baseSalary | Number                 |
| bonus      | Number                 |
| month      | String                 |
| status     | Enum (Draft, Approved) |

🎁 benefits → AD-HRM07, EMP-BEN01 🛡️
| Field       | Type                     |
| ----------- | ------------------------ |
| name        | String                   |
| description | String                   |
| applyTo     | String (role/department) |

📜 contracts → AD-HRM08, EMP-CNT01 🏰
| Field        | Type     |
| ------------ | -------- |
| employeeId   | ObjectId |
| contractType | String   |
| startDate    | Date     |
| endDate      | Date     |
| status       | Enum     |

⭐ performance_reviews → AD-HRM04, EMP-EVAL01 ⚔️
| Field      | Type     |
| ---------- | -------- |
| employeeId | ObjectId |
| period     | String   |
| score      | Number   |
| comment    | String   |
| reviewerId | ObjectId |

---
📚 trainings 
| Field       | Type   |
| ----------- | ------ |
| title       | String |
| description | String |
| startDate   | Date   |
| endDate     | Date   |

📎 training_enrollments

| employeeId | trainingId | status |

→ AD-HRM06, EMP-TRN01 📜
---

🏹 promotions → AD-HRM15, EMP-PRM01 🛡️

| Field        | Type     |
| ------------ | -------- |
| employeeId   | ObjectId |
| fromPosition | String   |
| toPosition   | String   |
| status       | Enum     |
| approvedBy   | ObjectId |

🔔 notifications → AD-HRM09, EMP-NTF01 🕯️
| Field      | Type     |
| ---------- | -------- |
| title      | String   |
| content    | String   |
| targetRole | Enum     |
| createdBy  | ObjectId |

🧰 support_tickets → AD-HRM10, EMP-SPT01 ⚙️

| Field      | Type     |
| ---------- | -------- |
| employeeId | ObjectId |
| subject    | String   |
| message    | String   |
| status     | Enum     |

# QUẢN TRỊ HỆ THỐNG
🛡️ system_configs → AD-HRM11, AD-HRM13 🏰
| Field     | Type     |
| --------- | -------- |
| key       | String   |
| value     | String   |
| updatedBy | ObjectId |
