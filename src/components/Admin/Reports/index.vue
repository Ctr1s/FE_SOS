<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-semibold">Báo cáo thống kê</h5>
        <small class="text-muted">Trang dashboard con cho biểu đồ, bảng báo cáo</small>
      </div>
    </div>
    <div class="card-body">
      <div class="alert alert-info small">
        Gợi ý báo cáo:
        <ul class="mb-0">
          <li>Lượng yêu cầu theo ngày/tuần/tháng.</li>
          <li>Thời gian phản hồi trung bình theo loại sự cố.</li>
          <li>Hiệu suất từng đội cứu hộ.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminReports",
};
</script>

