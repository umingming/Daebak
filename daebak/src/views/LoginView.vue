<template>
    <div>
        <section id="login">
            <div class="input">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="아이디">
            </div>
            <div class="input">
                <i class="fa-solid fa-key"></i>
                <input type="password" placeholder="비밀번호">
            </div>
            <div class="oval login">
                <router-link to="/main">로그인</router-link>
            </div>
        </section>
        <section id="join">
            <div class="text">또는</div>
            <div class="btn">
                <button id="naver_id_login"></button>
                <button class="kakao" @click="kakaoLogin"></button>
                <button class="google" @click="kakaoLogin"></button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        this.initNaver();
    },
    methods: {
        initNaver() {
            const naver_id_login = new window.naver_id_login("ZEBr31RYP_YsPp4wMrLq", "http://localhost:8080/login/naver");
            const state = naver_id_login.getUniqState();
            naver_id_login.setButton("green", 1, 45);
            naver_id_login.setState(state);
            naver_id_login.setPopup();
            naver_id_login.init_naver_id_login();
        },
        kakaoLogin() {
            window.Kakao.Auth.login({
                success: () => {
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: () => {
                            this.$router.push("/main").catch(() => {});
                        },
                        fail: function (error) {
                            console.log(error)
                        },
                    })
                },
                fail: function (error) {
                    console.log(error)
                },
            })
        },
    }
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
    color: #757575
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
    background: #FF7B00;
    cursor: pointer;
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