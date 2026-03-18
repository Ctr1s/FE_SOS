<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-semibold">Theo dõi vị trí đội cứu hộ real-time</h5>
        <small class="text-muted">Placeholder để tích hợp bản đồ + socket sau</small>
      </div>
    </div>
    <div class="card-body">
      <div class="border rounded-4 p-3 mb-3 bg-light-subtle">
        <div class="small text-muted mb-2">Bản đồ real-time</div>
        <div class="tracking-map-placeholder rounded-3"></div>
      </div>
      <div class="small text-muted">
        Gợi ý tính năng:
        <ul>
          <li>Hiển thị vị trí từng đội trên bản đồ.</li>
          <li>Filter theo trạng thái (rảnh, đang di chuyển, đang làm nhiệm vụ).</li>
          <li>Hiển thị route di chuyển gần nhất.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminTracking",
};
</script>

<style scoped>
.tracking-map-placeholder {
  height: 260px;
  background: repeating-linear-gradient(
      45deg,
      rgba(148, 163, 184, 0.25),
      rgba(148, 163, 184, 0.25) 10px,
      rgba(148, 163, 184, 0.16) 10px,
      rgba(148, 163, 184, 0.16) 20px
    );
}
</style>

