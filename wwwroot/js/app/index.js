$(function () {
    var app = new Vue({
        el: '#app',
        methods: {
            viewProducts: function () {
                $("#modal-products").modal("show");
            }
        }
    });
});