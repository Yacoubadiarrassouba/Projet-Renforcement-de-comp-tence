import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      message: {},
      isConnected: localStorage?.getItem("token") ? true : false,
    };
  },

  actions: {
    /******************* Get authenticated user *******************/
    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch(
          "http://62.72.5.95:5013/api/users?page=1&perPage=10&order=desc",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          this.user = data;
        }
        console.log(data);
      }
    },

    /******************* Register user *******************/
    async authenticate(formData) {
      console.log(formData);
      const res = await fetch("http://62.72.5.95:5013/api/users", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.message) {
        this.message = data.message;
      } else {
        this.message = {};
        localStorage.setItem("token", data.token);
        this.user = data.user;
        // Redirect
        this.router.push({ name: "home" });
      }
    },

    /******************* Login user *******************/
    async login(formData) {
      console.log(formData);
      const res = await fetch("http://62.72.5.95:5013/api/users/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.message) {
        this.message = data.message;
      } else {
        this.message = {};
        localStorage.setItem("token", data.token);
        this.user = data.user;
        this.isConnected = true;
        // Redirect
        this.router.push({ name: "home" });
      }
    },

    /******************* Logout User *******************/
    async logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      this.router.push({ name: "home" });
      this.isConnected = false;
    },
  },
});
