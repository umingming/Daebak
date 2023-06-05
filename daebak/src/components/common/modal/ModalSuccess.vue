<template>
    <div
        class="modal-success"
        :class="modalStatus"
        @click="isShowModal = false"
    >
        <span class="spinner">
            <i class="fa-solid fa-circle-check" id="check"></i>
        </span>
        <b>{{ content }}</b>
        <button @click="isShowModal = false">
            <i class="fa-solid fa-xmark" id="close"></i>
        </button>
    </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin.js";
export default {
    mixins: [modalMixin],
    data() {
        return {
            name: "Success",
        };
    },
};
</script>

<style scoped>
.modal-success {
    position: absolute;
    width: 230px;
    height: 50px;
    top: 680px;
    left: 920px;
    padding: 8px 12px;
    z-index: 10000000000;
    background: #12b76adc;
    border-radius: 5px;
    color: #ffffffee;
    transition: all 0.5s ease-in;
    cursor: pointer;
    opacity: 0;
}
.modal-success .spinner {
    position: absolute;
    display: inline-block;
    top: 7px;
    left: 5px;
    width: 50px;
    height: 50px;
}
.modal-success #check {
    position: relative;
    font-size: 28px;
    top: 11px;
    left: 11.2px;
    opacity: 0;
    transition: opacity 0.7s linear;
}
.modal-success b {
    position: relative;
    display: block;
    top: 7px;
    left: 50px;
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.5s linear;
}
.modal-success button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    padding: 0;
    background: none;
    border: none;
}
.modal-success button #close {
    opacity: 0;
    color: #d2fadf;
    font-size: smaller;
    transition: opacity 0.1s ease-in;
}
.modal-success button:hover #close {
    color: white;
}
.modal-success.on {
    transform: translateY(-120px);
    transition: all 0.5s linear;
    opacity: 1;
}
.modal-success.on #check {
    font-size: 28px;
    top: 11px;
    left: 11.2px;
    opacity: 1;
    transition: opacity 0.5s ease-in 0.5s;
    animation: scale-up ease-in 0.5s 0.5s forwards;
    border-radius: 15px;
}
.modal-success.on b {
    opacity: 1;
    transition: opacity 0.7s linear;
}
.modal-success.on button #close {
    opacity: 1;
    transition: opacity 0.2s ease-in 1s;
}
.modal-success .spinner::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 11px solid #ffffff48;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(0deg) scale(0.7);
}
.modal-success.on .spinner::before {
    border: 7px solid #ffffff00;
    animation: spin 0.8s linear 0.2s forwards;
}
@keyframes scale-up {
    0% {
        transform: scale(0);
    }
    90% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
        border-top-color: #ffffffdc;
    }
    50% {
        transform: translate(-50%, -50%) rotate(180deg) scale(0.9);
        border-color: #ffffff84 #00b89300;
    }
    90% {
        transform: translate(-50%, -50%) rotate(360deg) scale(0.5);
        border-color: #ffffff0c;
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) scale(0.7);
        border: 11px solid #ffffff48;
    }
}
</style>
