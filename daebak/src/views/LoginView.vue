<template>
    <div>
        <div class="title">💸대박나라💸</div>
        <div class="input oval">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="아이디">
        </div>
        <div class="input oval">
            <i class="fa-solid fa-key"></i>
            <input type="password" placeholder="비밀번호">
        </div>
        <div class="oval login">
            <router-link to="/main">로그인</router-link>
        </div>

        <div class="join">
            <div class="text">또는</div>
            <div class="btn" id="naver_id_login">
                <button class="naver">N</button>
            </div>
            <div class="btn">
                <button class="kakao" @click="kakaoLogin">K</button>
            </div>
            <div class="btn">
                <button class="google" @click="kakaoLogin">G</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounded() {
        const naver_id_login = new window.naver_id_login("ZEBr31RYP_YsPp4wMrLq", "http://localhost:8081/main");
        const state = naver_id_login.getUniqState();
        naver_id_login.setButton("white", 2,40); 
        naver_id_login.setState(state);
        naver_id_login.init_naver_id_login();
    },
    methods: {
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
.title {
    font-size: 50px;
    font-weight: bolder;
    color: rgb(255, 123, 0);
    text-align: center;
    margin-top: 100px;
    margin-bottom: 30px;
}
.oval {
    background: white;
    width: 260px;
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
    font-size: 22px;
    font-weight: bolder;
    width: 270px;
    height: 45px;
    line-height: 45px;
    border-radius: 23px;
    margin-top: 30px;
    background: #FFA200;
    cursor: pointer;
}
.login a {
    text-decoration: none;
    color: white;
}

.join {
    margin: 40px auto;
    width: 240px;
    text-align: center;
    border-top: 2px solid #757575;
}
.join .text {
    position: relative;
    font-size: 20px;
    font-weight: bolder;
    color: #757575;
    top: -12px;
    width: 45px;
    margin: 0 auto;
    background: #f9f2d3;
}
.btn {
    float: left;
    margin: 10px 17px;
}
.btn button {
    width: 45px;
    height: 45px;
    border-radius: 25px;
    line-height: 45px;
    font-size: 35px;
    font-weight: bolder;
    border: none;
}
.btn .kakao {
    background: #FAE100;
    color: #3B1E1E;
}
.btn .naver {
    background: #04CF5C;
    color: #FFF;
}
.btn .google {
    font-size: 40px;
    background: #FFF;
    color: #DB2828;
}
</style>