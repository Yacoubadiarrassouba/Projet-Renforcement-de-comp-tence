<script setup>
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { message } = storeToRefs(useAuthStore());
const { login } = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
});

onMounted(() => (message.value = {}));
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form @submit.prevent="login(formData)">
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="email"
                v-model="formData.email"
                name="email"
                id="form1Example13"
                class="form-control form-control-lg"
                placeholder="Email"
              />
              <p v-if="message.email" class="error">
                {{ message.email[0] }}
              </p>
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="password"
                v-model="formData.password"
                id="form1Example23"
                class="form-control form-control-lg"
                placeholder="Password"
              />
              <p v-if="message.password" class="error">
                {{ message.password[0] }}
              </p>
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
              <!-- Checkbox -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                />
                <label class="form-check-label" for="form1Example3">
                  Remember me
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn btn-primary btn-lg btn-block"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>
