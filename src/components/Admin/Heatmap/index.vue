<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-semibold">Bản đồ nhiệt khu vực nguy hiểm</h5>
        <small class="text-muted">UI nền để tích hợp heatmap (Leaflet/Mapbox...) sau</small>
      </div>
    </div>
    <div class="card-body">
      <div class="heatmap-placeholder rounded-4 mb-3"></div>
      <div class="small text-muted">
        Bạn có thể tích hợp:
        <ul>
          <li>Layer heatmap theo mật độ yêu cầu.</li>
          <li>Lọc theo thời gian, loại sự cố, mức ưu tiên.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeatmap",
};
</script>

<style scoped>
.heatmap-placeholder {
  height: 320px;
  background: radial-gradient(circle at 20% 30%, rgba(248, 113, 113, 0.35), transparent 60%),
    radial-gradient(circle at 70% 40%, rgba(251, 146, 60, 0.32), transparent 55%),
    radial-gradient(circle at 45% 70%, rgba(250, 204, 21, 0.35), transparent 60%),
    #020617;
}
</style>

