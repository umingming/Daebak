import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
            isShowModal: false,
        };
    },
    computed: {
        ...mapState("modal", ["type", "content"]),
        modalStatus() {
            return this.isShowModal ? "on" : "off";
        },
    },
    watch: {
        type() {
            if (this.name === this.type) {
                this.isShowModal = true;
                setTimeout(() => {
                    this.isShowModal = false;
                    this.setModal();
                }, 3000);
            }
        },
    },
    methods: {
        ...mapMutations("modal", ["SET_TYPE", "SET_CONTENT"]),
        setModal(type = "", content = "") {
            this.SET_TYPE(type);
            this.SET_CONTENT(content);
        },
    },
};
