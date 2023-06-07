<template>
    <div>
        <section id="login">
            <div class="input">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="아이디" v-model="id" />
            </div>
            <div class="input">
                <i class="fa-solid fa-key"></i>
                <input type="password" placeholder="비밀번호" v-model="pw" />
            </div>
            <div class="oval login" @click="login">로그인</div>
        </section>
        <section id="join">
            <div class="text">또는</div>
            <div class="oval login" @click="register">회원가입</div>
        </section>
    </div>
</template>

<script>
import auth from "@/api/auth.js";
import { mapActions, mapMutations } from "vuex";
import toastMixin from "@/mixins/toastMixin.js";
export default {
    mixins: [toastMixin],
    data() {
        return {
            id: "",
            pw: "",
        };
    },
    methods: {
        ...mapActions("order", ["FETCH_ORDERS"]),
        ...mapMutations(["SET_USER"]),
        async login() {
            if (!this.validateInput()) return;

            try {
                const { data } = await auth.login({
                    id: this.id,
                    pw: this.pw,
                });

                sessionStorage.setItem("user_id", data.user_id);
                this.FETCH_ORDERS();
                this.$router.push("/main");
            } catch (error) {
                if (error.status === 401) {
                    const field =
                        error.data.error === "id" ? "아이디" : "비밀번호";
                    this.showDangerToast(`유효하지 않은 ${field}입니다.`);
                } else {
                    console.log(error);
                }
            }
        },
        async register() {
            if (!this.validateInput()) return;

            try {
                const { status } = await auth.register({
                    id: this.id,
                    pw: this.pw,
                });
                if (status === 200) {
                    this.showSuccessToast("회원가입 성공했습니다.");
                }
            } catch ({ status }) {
                if (status === 409) {
                    this.showDangerToast("존재하는 회원입니다.");
                }
            }
        },
        validateInput() {
            if (!this.id || !this.pw) {
                const field = !this.id ? "아이디" : "비밀번호";
                this.showWarningToast(`${field} 입력하세요.`);
                return false;
            }
            return true;
        },
    },
};
</script>

<style scoped>
.input {
    background: white;
    width: 300px;
    height: 40px;
    margin: 15px auto;
    border-radius: 20px;
    font-size: 20px;
}
.input i {
    font-size: 30px;
    line-height: 40px;
    margin: auto 20px;
    width: 30px;
    color: #757575;
}
.input:hover i {
    color: rgb(255, 123, 0);
}
.input input {
    position: relative;
    width: 130px;
    font-size: 20px;
    top: -4px;
    border: 0;
}
.input input:focus {
    outline: 0px;
}
.login {
    text-align: center;
    font-size: 28px;
    font-weight: bolder;
    width: 300px;
    height: 45px;
    line-height: 45px;
    border-radius: 23px;
    margin: 15px auto;
    margin-top: 30px;
    background: #ff7b00;
    cursor: pointer;
    color: white;
}
.login a {
    text-decoration: none;
    color: white;
}

#join {
    margin: 50px auto;
    width: 270px;
    text-align: center;
    border-top: 1px solid #757575;
}
#join .text {
    position: relative;
    font-size: 20px;
    font-weight: bolder;
    color: #757575;
    top: -14px;
    width: 85px;
    margin: 0 auto;
    background: #f9f2d3;
}
#join .login {
    transform: translate(-15px, -10px);
    background: white;
    color: #ff7b00;
}
.btn {
    width: 270px;
    height: 50px;
    float: left;
    margin: 5px auto;
}
.btn button {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 25px;
    overflow: hidden;
}
.btn .kakao {
    background: url(../../public/img/btnKakao.PNG) center/cover;
    margin: 0 55px;
}
.btn .google {
    background: url(../../public/img/btnGoogle.PNG) center/cover;
}
</style>
