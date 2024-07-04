<template>
  <div class="login_view">
    <div class="login_frame">
      <input :placeholder="'Username'" class="username" />
      <input :placeholder="'Password'" type="password" class="password" />
      <button class="login_button">LOGIN</button>
      <button @click="goToRegister" class="dont_have_an_account">
        DON'T HAVE AN ACCOUNT?
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {};
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login_view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login_frame {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 24px;
  width: 50%;
}
input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid gray;
}
button.login_button {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid gray;
  background-color: green;
  color: white;
}
button.dont_have_an_account {
  border: none;
  background-color: white;
  text-decoration: underline;
  align-self: flex-start;
  margin-top: -15px;
}
</style>
