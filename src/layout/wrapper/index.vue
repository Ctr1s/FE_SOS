<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <Top></Top>
            <Menu></Menu>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <Bot></Bot>
    </div>
</template>
<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "simplebar";
import "metismenu";
import "perfect-scrollbar";

export default {
    name: "app",
    components: {
       
    }
}
</script>
<style>
</style>
