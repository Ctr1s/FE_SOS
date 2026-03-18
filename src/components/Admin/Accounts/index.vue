<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-semibold">Quản lý tài khoản & phân quyền</h5>
        <small class="text-muted">Admin, điều phối viên, đội trưởng,...</small>
      </div>
      <button class="btn btn-sm btn-primary">
        <i class="fa-solid fa-user-plus me-1"></i>Thêm tài khoản
      </button>
    </div>
    <div class="card-body">
      <div class="alert alert-info small mb-0">
        Ý tưởng:
        <ul>
          <li>Bảng danh sách user + vai trò + trạng thái.</li>
          <li>Phân quyền theo role (admin, dispatcher, viewer...).</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAccounts",
};
</script>

