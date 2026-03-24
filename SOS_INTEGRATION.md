# Nối FE (Vue) ↔ BE (Laravel `KhoaLuanK28_SOS`)

## 1. Chạy backend

```bash
cd ../KhoaLuanK28_SOS
php artisan migrate
php artisan serve
```

API mặc định: `http://localhost:8000/api`

## 2. Cấu hình frontend

Tạo file `.env` trong thư mục `FE` (copy từ `.env.example`):

```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_MAPBOX_ACCESS_TOKEN=pk.xxxxx
```

- **Mapbox**: tạo token tại [mapbox.com/account](https://account.mapbox.com/access-tokens/) (miễn phí).
- Không có token Mapbox: bản đồ hiện hướng dẫn cấu hình, các chức năng khác vẫn chạy.

## 3. Đăng nhập / đăng ký

- **Người dùng**: `POST /api/nguoi-dung/login`, `POST /api/nguoi-dung/register`  
  FE lưu `token` + `user` (localStorage).
- **Admin**: `POST /api/admin/login`  
  FE lưu `admin_token` + `admin_user` (tránh trùng token với người dùng).

Backend trả `token` (Bearer) sau khi đăng nhập/đăng ký thành công.

## 4. CORS

Đã thêm `config/cors.php` trong Laravel với origin Vite (`localhost:5173`). Nếu đổi cổng FE, thêm origin vào `allowed_origins`.
