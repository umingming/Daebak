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
        <div class="oval login">로그인</div>
    </div>
</template>

<script>
export default {

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
        color: white;
        margin-top: 30px;
        background: #FFA200;
        cursor: pointer;
    }
</style>