<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-semibold">Quản lý đội cứu hộ & tài nguyên</h5>
        <small class="text-muted">Cấu hình đội, phương tiện, trang thiết bị</small>
      </div>
      <button class="btn btn-sm btn-primary">
        <i class="fa-solid fa-plus me-1"></i>Thêm đội / tài nguyên
      </button>
    </div>
    <div class="card-body">
      <div class="alert alert-info small mb-0">
        Sẽ có:
        <ul>
          <li>Danh sách đội cứu hộ, vùng phụ trách, trạng thái hoạt động.</li>
          <li>Quản lý phương tiện (xe cứu thương, xe cứu hỏa, tàu, xuồng...)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminResources",
};
</script>

