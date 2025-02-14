import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => {
    return {
      errors: {},
    };
  },

  actions: {
    /******************* Get all posts *******************/
    async getAllPosts() {
      const res = await fetch(
        "http://62.72.5.95:5013/api/contacts?page=1&perPage=10&order=desc&orderBy=desc",
        {
          method: "get",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      console.log(data.data);
      return data.data;
    },
    /******************* Create a post *******************/
    async createPost(formData) {
      const res = await fetch("http://62.72.5.95:5013/api/contacts", {
        method: "post",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.errors) {
        this.errors = data.errors;
      } else {
        console.log(data);
        this.router.push({ name: "home" });
      }
    },
  },
});
