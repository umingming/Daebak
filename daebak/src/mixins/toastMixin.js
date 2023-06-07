import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["toast"]),
    },
    methods: {
        ...mapMutations(["SET_TOAST"]),
        showInfoToast(content = "") {
            this.showToast("info", content);
        },
        showSuccessToast(content = "") {
            this.showToast("success", content);
        },
        showWarningToast(content = "") {
            this.showToast("warning", content);
        },
        showDangerToast(content = "") {
            this.showToast("danger", content);
        },
        showToast(type = "", content = "") {
            this.SET_TOAST({ type, content });
            this.$bvToast?.show("my-toast");
        },
    },
};
