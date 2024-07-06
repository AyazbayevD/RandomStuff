import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// axios.defaults.baseURL = ''

async function getCsrfToken() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/csrf-token/");
    const csrfToken = response.data.csrfToken;
    axios.defaults.headers.common["X-CSRFToken"] = csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
}

getCsrfToken();

createApp(App).use(router).mount("#app");
