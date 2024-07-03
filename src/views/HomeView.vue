<template>
  <div class="home">
    <div class="top_bar">
      <div class="logo">LOGO</div>
      <div class="actions">
        <button @click="goToLogin" class="login">LOGIN</button>
        <button @click="goToSignUp" class="sign_up">REGISTER</button>
      </div>
    </div>
    <div class="main_home">MAIN HOME</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToSignUp() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.top_bar {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  border-bottom: 2px solid black;
}
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign_up {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
