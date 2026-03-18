<template>
    <div class="container-fluid p-0 d-flex flex-column flex-lg-row flex-grow-1 overflow-hidden vh-100">
        <div class="col-lg-5 col-xl-4 bg-white p-4 p-xl-5 overflow-y-auto" style="max-height: 100%;">
            <h2 class="fw-bold mb-1">Yêu cầu cứu hộ mới</h2>
            <p class="text-muted small mb-4">Cung cấp thông tin chính xác để lực lượng phản ứng tiếp cận nhanh nhất.</p>

            <label class="fw-bold small text-uppercase mb-2 d-block text-secondary text-opacity-75">Loại sự cố khẩn cấp</label>
            <div class="row g-2 mb-4">
                <div class="col-3" v-for="type in incidentTypes" :key="type.id">
                    <button @click="selectedType = type.id"
                        type="button"
                        :class="['btn w-100 h-100 py-3 border-2 shadow-sm d-flex flex-column align-items-center justify-content-center', 
                                 selectedType === type.id ? 'btn-outline-danger active' : 'btn-outline-light text-dark border-light-subtle bg-light']">
                        <i :class="['bi fs-3 mb-1', type.icon]"></i>
                        <span style="font-size: 10px;" class="fw-bold text-uppercase">{{ type.label }}</span>
                    </button>
                </div>
            </div>

            <div class="bg-light rounded-3 p-3 mb-4 border border-secondary border-opacity-10 shadow-sm">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <label class="fw-bold small text-uppercase mb-0 text-secondary">Vị trí của bạn</label>
                    <button class="btn btn-dark btn-sm rounded-pill px-3 fw-bold shadow-sm" style="font-size: 10px;">
                        <i class="bi bi-crosshair me-1"></i> Xác định GPS
                    </button>
                </div>
                <div class="input-group bg-white rounded-2 overflow-hidden shadow-sm">
                    <span class="input-group-text bg-white border-0"><i class="bi bi-geo-alt text-danger"></i></span>
                    <input type="text" class="form-control border-0 py-2 shadow-none small"
                        placeholder="Nhập địa chỉ chi tiết...">
                </div>
            </div>

            <div class="mb-4">
                <label class="fw-bold small text-uppercase mb-2 d-block text-secondary">Mô tả tình huống</label>
                <textarea class="form-control border-0 bg-light shadow-sm p-3" rows="3"
                    placeholder="Số người bị nạn, tình trạng hiện tại..."></textarea>
            </div>

            <div class="mb-4">
                <label class="fw-bold small text-uppercase mb-2 d-block text-secondary">Hình ảnh hiện trường</label>
                <label class="w-100 border border-2 border-secondary border-opacity-25 border-dashed rounded-3 p-4 text-center bg-light text-muted btn btn-light border-0 shadow-sm">
                    <i class="bi bi-cloud-arrow-up fs-2"></i>
                    <p class="small mt-2 mb-0 fw-bold">Tải lên ảnh/video</p>
                    <input type="file" class="d-none">
                </label>
            </div>

            <button class="btn btn-danger w-100 py-3 fw-bold fs-5 shadow-lg rounded-3 border-0">
                GỬI CỨU HỘ NGAY
            </button>
        </div>

        <div class="col-lg-7 col-xl-8 bg-light p-4 position-relative border-start">
            <div class="w-100 h-100 rounded-4 overflow-hidden border border-white border-4 shadow-lg position-relative bg-white">
                <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/108.2022,16.0544,14/1200x800?access_token=YOUR_TOKEN"
                    class="w-100 h-100" style="object-fit: cover;" alt="Map">

                <div class="position-absolute top-50 start-50 translate-middle text-danger">
                    <i class="bi bi-geo-alt-fill fs-1 shadow-sm"></i>
                </div>

                <div class="position-absolute bottom-0 start-0 m-3 d-none d-md-block">
                    <div class="card border-0 shadow-lg p-3 rounded-4" style="width: 260px;">
                        <h6 class="fw-bold small text-uppercase mb-3 text-secondary">Lực lượng lân cận</h6>
                        <div class="d-flex align-items-center mb-2" v-for="u in units" :key="u.name">
                            <div :class="['rounded-circle p-2 me-2 bg-opacity-10', u.c]">
                                <i :class="['bi small', u.i, u.t]"></i>
                            </div>
                            <div style="font-size: 11px;"><b class="d-block text-dark">{{ u.name }}</b><span class="text-muted">{{ u.d }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedType: 'tai-nan',
            incidentTypes: [
                { id: 'tai-nan', label: 'Tai nạn', icon: 'bi-car-front-fill' },
                { id: 'hoa-hoan', label: 'Hỏa hoạn', icon: 'bi-fire' },
                { id: 'lu-lut', label: 'Lũ lụt', icon: 'bi-water' },
                { id: 'y-te', label: 'Y tế', icon: 'bi-plus-square-fill' },
            ],
            units: [
                { name: 'Cảnh Sát DN', d: '1.2 km - 5p', i: 'bi-shield', c: 'bg-primary', t: 'text-primary' },
                { name: 'BV Đa Khoa', d: '0.8 km - 3p', i: 'bi-hospital', c: 'bg-danger', t: 'text-danger' }
            ]
        }
    }
}
</script>

<style>

</style>