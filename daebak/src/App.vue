<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        this.init();
    },
    methods: {
        init() {
            window.Kakao.init('ddd04c05d8377d46d25230329657ea11');
            // var naverLogin = new window.naver.LoginWithNaverId(
            //     {
            //         clientId: "ZEBr31RYP_YsPp4wMrLq",
            //         callbackUrl: "http://localhost:8081/naverLogin",
            //         isPopup: false, 
            //         loginButton: {color: "green", type: 3, height: 60} 
            //     }
            // );
            // naverLogin.init();

            // window.addEventListener('load', function () {
            //     naverLogin.getLoginStatus(function (status) {
            //         if (status) {
            //             var email = naverLogin.user.getEmail();
            //             console.log(email); // 사용자 이메일 정보를 받을수 있습니다.
            //             console.log(naverLogin.user); //사용자 정보를 받을수 있습니다.
            //             if( email == undefined || email == null) {
            //                 alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
            //                 /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
            //                 naverLogin.reprompt();
            //                 return;
            //             }

            //             window.location.replace("http://" + window.location.hostname + ( (location.port==""||location.port==undefined)?"":":" + location.port) + "/sample/main.html");
            //         } else {
            //             console.log("callback 처리에 실패하였습니다.");
            //         }
            //     });
            // });
        }
    }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>