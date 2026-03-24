<template>
    <div class="container-fluid p-0 d-flex flex-column flex-lg-row flex-grow-1 overflow-hidden vh-100">
        <div class="col-lg-5 col-xl-4 bg-white p-4 p-xl-5 overflow-y-auto" style="max-height: 100%;">
            <h2 class="fw-bold mb-1">Yêu cầu cứu hộ mới</h2>
            <p class="text-muted small mb-4">Cung cấp thông tin chính xác để lực lượng phản ứng tiếp cận nhanh nhất.</p>

            <label class="fw-bold small text-uppercase mb-2 d-block text-secondary text-opacity-75">Loại sự cố khẩn cấp</label>
            <div class="row g-2 mb-4 mt-2">
                <div class="col-3" v-for="type in incidentTypes" :key="type.id">
                    <button @click="selectedType = type.id"
                        type="button"
                        :class="['btn w-100 h-100 py-3 border-2 shadow-sm d-flex flex-column align-items-center justify-content-center', 
                                 selectedType === type.id ? 'btn-outline-danger active' : 'btn-outline-light text-dark border-light-subtle bg-light']">
                        <i :class="['fa-solid fs-4 mb-1 mt-2', type.icon]"></i>
                        <span style="font-size: 10px;" class="fw-bold text-uppercase">{{ type.label }}</span>
                    </button>
                </div>
            </div>

            <div class="bg-light rounded-3 p-3 mb-4 border border-secondary border-opacity-10 shadow-sm">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <label class="fw-bold small text-uppercase mb-0 text-secondary">Vị trí của bạn</label>
                    <button type="button" class="btn btn-dark btn-sm rounded-pill px-3 fw-bold shadow-sm" style="font-size: 10px;"
                        :disabled="locating"
                        @click="onGps">
                        <i class="fa-solid fa-location-crosshairs me-1"></i>
                        {{ locating ? 'Đang lấy...' : 'Xác định GPS' }}
                    </button>
                </div>
                <div class="input-group bg-white rounded-2 overflow-hidden shadow-sm">
                    <span class="input-group-text bg-white border-0"><i class="fa-solid fa-location-dot text-danger"></i></span>
                    <input v-model="address" type="text" class="form-control border-0 py-2 shadow-none small"
                        placeholder="Nhập địa chỉ chi tiết...">
                </div>
                <div v-if="coordsText" class="small text-muted mt-2 mb-0">{{ coordsText }}</div>
            </div>

            <div class="mb-4">
                <label class="fw-bold small text-uppercase mb-2 d-block text-secondary">Mô tả tình huống</label>
                <textarea v-model="description" class="form-control border-0 bg-light shadow-sm p-3" rows="3"
                    placeholder="Số người bị nạn, tình trạng hiện tại..."></textarea>
            </div>

            <div class="mb-4">
                <label class="fw-bold small text-uppercase mb-2 d-block text-secondary">Hình ảnh hiện trường</label>
                <label class="w-100 border border-2 border-secondary border-opacity-25 border-dashed rounded-3 p-4 text-center bg-light text-muted btn btn-light border-0 shadow-sm">
                    <i class="fa-solid fa-cloud-arrow-up fs-2"></i>
                    <p class="small mt-2 mb-0 fw-bold">Tải lên ảnh/video</p>
                    <input type="file" class="d-none" accept="image/*,video/*">
                </label>
            </div>

            <button type="button" class="btn btn-danger w-100 py-3 fw-bold fs-5 shadow-lg rounded-3 border-0" @click="handleSendClick">
                GỬI CỨU HỘ NGAY
            </button>

            <!-- Login Requirement Modal -->
            <div class="modal fade" id="loginRequireModal" tabindex="-1" aria-hidden="true" ref="loginModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 shadow">
                        <div class="modal-header border-0 pb-0">
                            <h5 class="modal-title fw-bold text-danger"><i class="fa-solid fa-triangle-exclamation me-2"></i>Yêu cầu đăng nhập</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center py-4">
                            <p class="mb-4">Bạn cần đăng nhập hoặc đăng ký tài khoản để gửi yêu cầu cứu hộ. Việc này giúp đội cứu hộ xác minh và liên hệ với bạn nhanh chóng hơn.</p>
                            <div class="d-flex justify-content-center gap-3">
                                <button @click="goToLogin" data-bs-dismiss="modal" class="btn btn-outline-danger px-4 rounded-pill">Đăng nhập</button>
                                <button @click="goToRegister" data-bs-dismiss="modal" class="btn btn-danger px-4 rounded-pill">Đăng ký mới</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-7 col-xl-8 bg-light p-4 position-relative border-start d-flex flex-column" style="min-height: 320px;">
            <div class="flex-grow-1 rounded-4 overflow-hidden border border-white border-4 shadow-lg position-relative bg-white" style="min-height: 320px;">
                <MapboxMap ref="mapRef" class="position-absolute top-0 start-0 w-100 h-100" />
                <div class="position-absolute bottom-0 start-0 m-3 d-none d-md-block">
                    <div class="card border-0 shadow-lg p-3 rounded-4" style="width: 260px;">
                        <h6 class="fw-bold small text-uppercase mb-3 text-secondary">Lực lượng lân cận</h6>
                        <div class="d-flex align-items-center mb-2" v-for="u in units" :key="u.name">
                            <div :class="['rounded-circle p-2 me-2 bg-opacity-10', u.c]">
                                <i :class="['fa-solid small', u.i, u.t]"></i>
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
import MapboxMap from "../../common/MapboxMap.vue";

export default {
    components: { MapboxMap },
    data() {
        return {
            selectedType: 'tai-nan',
            incidentTypes: [
                { id: 'tai-nan', label: 'Tai nạn', icon: 'fa-car-burst' },
                { id: 'hoa-hoan', label: 'Hỏa hoạn', icon: 'fa-fire' },
                { id: 'lu-lut', label: 'Lũ lụt', icon: 'fa-water' },
                { id: 'y-te', label: 'Y tế', icon: 'fa-truck-medical' },
            ],
            address: '',
            description: '',
            coordsText: '',
            locating: false,
            units: [
                { name: 'Cảnh sát', d: '1.2 km - 5p', i: 'fa-shield-halved', c: 'bg-primary', t: 'text-primary' },
                { name: 'BV Đa khoa', d: '0.8 km - 3p', i: 'fa-hospital', c: 'bg-danger', t: 'text-danger' }
            ]
        };
    },
    methods: {
        async onGps() {
            this.locating = true;
            this.coordsText = '';
            try {
                const map = this.$refs.mapRef;
                if (map?.locateUser) {
                    const { lng, lat } = await map.locateUser();
                    this.coordsText = `GPS: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
                }
            } catch (e) {
                this.coordsText = 'Không lấy được vị trí (cấp quyền trình duyệt hoặc dùng HTTPS).';
            } finally {
                this.locating = false;
            }
        },
        handleSendClick() {
            const isLoggedIn = !!localStorage.getItem("token") || !!localStorage.getItem("user") || !!localStorage.getItem("client");
            if (!isLoggedIn) {
                if (window.bootstrap) {
                    const modal = new window.bootstrap.Modal(this.$refs.loginModal);
                    modal.show();
                } else {
                    alert('Vui lòng đăng nhập hoặc đăng ký để tiếp tục.');
                    this.$router.push('/client/login');
                }
            } else {
                alert("Yêu cầu cứu hộ đã được tiếp nhận! Hệ thống đang xử lý...");
            }
        },
        goToLogin() {
            // Remove lingering modal backdrop if any (Bootstrap native workaround for routing)
            document.body.classList.remove('modal-open');
            const backups = document.querySelectorAll('.modal-backdrop');
            backups.forEach(b => b.remove());
            this.$router.push('/client/login');
        },
        goToRegister() {
            document.body.classList.remove('modal-open');
            const backups = document.querySelectorAll('.modal-backdrop');
            backups.forEach(b => b.remove());
            this.$router.push('/client/register');
        }
    },
};
</script>

<style scoped>
</style>
