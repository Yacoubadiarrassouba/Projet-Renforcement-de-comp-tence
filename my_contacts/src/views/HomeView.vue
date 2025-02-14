<script setup>
import { usePostsStore } from "@/store/posts";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";

const { errors } = storeToRefs(usePostsStore());
const { getAllPosts, createPost } = usePostsStore();
const posts = ref([]);

onMounted(async () => (posts.value = await getAllPosts()));

const formData = reactive({
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  gender: "",
  birthdate: "",
  position: "",
  company: "",
});
</script>
<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body">
      <div class="container-fluid">
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
    <!-- Navbar -->

    <!-- Background image -->
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
        height: 400px;
      "
    >
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">MyContacts</h1>
            <h4 class="mb-3"></h4>
            <!-- <a
              data-mdb-ripple-init
              class="btn btn-outline-light btn-lg"
              href="#!"
              role="button"
              >Créer un contact</a
            > -->
            <button
              type="button"
              data-bs-button-init
              data-bs-ripple-init
              class="btn btn-outline-light btn-lg"
              data-bs-toggle="modal"
              data-bs-modal-init
              data-bs-target="#exampleModal"
            >
              Créer un contact
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel4"
      aria-hidden="true"
    >
      <div class="modal-dialog d-flex justify-content-center">
        <div class="modal-content w-75">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel4">
              Ajouter un contact
            </h5>
            <button
              type="button"
              data-bs-button-init
              data-bs-ripple-init
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="createPost(formData)">
              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  v-model="formData.firstname"
                  class="form-control"
                />
                <p v-if="errors.firstname" class="error">
                  {{ errors.firstname[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Lastname"
                  v-model="formData.lastname"
                  class="form-control"
                />
                <p v-if="errors.lastname" class="error">
                  {{ errors.lastname[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="number"
                  placeholder="Téléphone"
                  v-model="formData.phone"
                  class="form-control"
                />
                <p v-if="errors.phone" class="error">
                  {{ errors.phone[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="formData.email"
                  class="form-control"
                />
                <p v-if="errors.email" class="error">
                  {{ errors.email[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Genre"
                  v-model="formData.gender"
                  class="form-control"
                />
                <p v-if="errors.gender" class="error">
                  {{ errors.gender[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="date"
                  placeholder="Birthdate"
                  v-model="formData.birthdate"
                  class="form-control"
                />
                <p v-if="errors.birthdate" class="error">
                  {{ errors.birthdate[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Position"
                  v-model="formData.position"
                  class="form-control"
                />
                <p v-if="errors.position" class="error">
                  {{ errors.position[0] }}
                </p>
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Company"
                  v-model="formData.company"
                  class="form-control"
                />
                <p v-if="errors.company" class="error">
                  {{ errors.company[0] }}
                </p>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                data-bs-button-init
                data-bs-ripple-init
                class="btn btn-primary btn-block"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>

  <div v-if="posts.length > 0" class="container row py-5">
    <div
      v-for="post in posts"
      :key="post._id"
      class="card border-primary m-3 col-md-3"
      style="max-width: 18rem"
    >
      <div class="card-header">Contact</div>
      <div class="card-body text-primary">
        <h4 class="card-title">{{ post.firstname }}</h4>
        <p class="card-text">{{ post.position }}</p>
        <h5>{{ post.email }}</h5>
        <p class="card-text">{{ post.phone }}</p>
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'update', params: { _id: post._id } }">
          <a href="#" class="btn btn-primary m-3">Modifier</a>
        </router-link>
        <router-link>
          <a href="#" class="btn btn-danger">Supprimer</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
