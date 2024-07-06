<template>
  <div class="register_view">
    <div class="register_frame">
      <input v-model="username" :placeholder="'Username'" class="username" />
      <input
        v-model="password"
        :placeholder="'Password'"
        type="password"
        class="password"
      />
      <input
        v-model="password2"
        :placeholder="'Confirm password'"
        type="password"
        class="password"
      />
      <button @click="register" class="register_button">REGISTER</button>
      <button @click="goToLogin" class="already_have_an_account">
        ALREADY HAVE AN ACCOUNT?
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    async register() {
      await axios.post("http://127.0.0.1:8000", {
        username: this.username,
        password: this.password,
        password2: this.password2,
      });
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
