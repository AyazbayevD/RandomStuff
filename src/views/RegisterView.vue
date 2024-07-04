<template>
  <div class="register_view">
    <div class="register_frame">
      <input :placeholder="'Username'" class="username" />
      <input :placeholder="'Password'" type="password" class="password" />
      <input
        :placeholder="'Confirm password'"
        type="password"
        class="password"
      />
      <button class="register_button">REGISTER</button>
      <button @click="goToLogin" class="already_have_an_account">
        ALREADY HAVE AN ACCOUNT?
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register_view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register_frame {
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
button.register_button {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid gray;
  background-color: green;
  color: white;
}
button.already_have_an_account {
  border: none;
  background-color: white;
  text-decoration: underline;
  align-self: flex-start;
  margin-top: -15px;
}
</style>
