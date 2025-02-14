<script setup>
import { usePostsStore } from "@/store/posts";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const { errors } = storeToRefs(usePostsStore());
const { getPost } = usePostsStore();

const post = ref(null);

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

onMounted(async () => {
  post.value = await getPost(route.params._id);

  formData.firstname = post.value.firstname;
  formData.lastname = post.value.lastname;
  formData.phone = post.value.phone;
  formData.email = post.value.email;
  formData.gender = post.value.gender;
  formData.birthdate = post.value.birthdate;
  formData.position = post.value.position;
  formData.company = post.value.company;
});
</script>

<template>
  <main class="container">
    <form>
      <h2>Update</h2>

      <!-- Name input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="text"
          v-model="formData.firstname"
          class="form-control"
          placeholder="Firstname"
        />
        <p v-if="errors.firstname" class="error">
          {{ errors.firstname[0] }}
        </p>
      </div>

      <!-- Email input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="text"
          v-model="formData.lastname"
          name="name"
          class="form-control"
          placeholder="Lastname"
        />
        <p v-if="errors.lastname" class="error">
          {{ errors.lastname[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="number"
          v-model="formData.phone"
          name="phone"
          class="form-control"
          placeholder="Phone"
        />
        <p v-if="errors.phone" class="error">
          {{ errors.phone[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="email"
          v-model="formData.email"
          name="email"
          class="form-control"
          placeholder="Email"
        />
        <p v-if="errors.email" class="error">
          {{ errors.email[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select gender</option>
          <option value="1">Male</option>
          <option value="2">Femelle</option>
        </select>
        <p v-if="errors.gender" class="error">
          {{ errors.gender[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="date"
          v-model="formData.birthdate"
          name="date"
          class="form-control"
          placeholder="Birthdate"
        />
        <p v-if="errors.birthdate" class="error">
          {{ errors.birthdate[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="text"
          v-model="formData.position"
          name="position"
          class="form-control"
          placeholder="Position"
        />
        <p v-if="errors.position" class="error">
          {{ errors.position[0] }}
        </p>
      </div>

      <!-- Subject input -->
      <div data-bs-input-init class="form-outline mb-4">
        <input
          type="text"
          v-model="formData.company"
          name="company"
          class="form-control"
          placeholder="Company"
        />
        <p v-if="errors.company" class="error">
          {{ errors.company[0] }}
        </p>
      </div>

      <!-- Submit button -->
      <button
        data-bs-button-init
        type="submit"
        data-bs-ripple-init
        class="btn btn-primary mb-4"
      >
        Send
      </button>
    </form>
  </main>
</template>
