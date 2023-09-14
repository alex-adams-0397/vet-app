<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2
        class="pl-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Bei Ihrem Konto anmelden
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2">
            <input
              v-model="identifier"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFB800] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Passwort</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-[#FFB800] hover:text-[#ffd100]"
                >Passwort vergessen?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
            v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFB800] sm:text-sm sm:leading-6"
            />
          </div>
          <div class="mt-6 flex items-center justify-between">
            <label>Eingeloggt bleiben</label>
            <input 
              type="checkbox" 
              class="
                form-checkbox
                rounded 
                text-[#FFB800]
                hover:bg-[#ffd100]
                focus:ring focus:ring-[#FFB800]
                focus:ring-opacity-50" 
              v-model="stayLoggedIn" 
            />
          </div>
        </div>

        <div>
          <button
            @click="login"
            class="flex w-full justify-center rounded-md bg-[#FFB800] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ffd100] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "login",
  setup() {

    const identifier = ref("");
    const password = ref("");
    const stayLoggedIn = ref(false);
    const router = useRouter();

    async function login() {
      try {
        const data = {
          identifier: identifier.value,
          password: password.value,
          stayLoggedIn: stayLoggedIn.value
        };
        const options = {
          credentials: "include",
          withCredentials: true,
        };
        const res = await axios.post(
          "http://localhost:1337/api/auth/local",
          data,
          options
        );
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        if (res.status === 200) {
          router.push("/dashboard");
        }
      } catch (err) {
        alert(err.code);
      }
    }

    return {
      identifier,
      password,
      stayLoggedIn,
      login
    };
  }
}
</script>

<style scoped>
</style>