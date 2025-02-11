<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="home">
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container-fluid justify-content-between">
        <!-- Left elements -->
        <div class="d-flex">
          <!-- Brand -->
          <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="20"
              alt="MDB Logo"
              loading="lazy"
              style="margin-top: 2px"
            />
          </a>

          <!-- Search form -->
          <form class="input-group w-auto my-auto d-none d-sm-flex">
            <input
              autocomplete="off"
              type="search"
              class="form-control rounded"
              placeholder="Search"
              style="min-width: 125px"
            />
            <span class="input-group-text border-0 d-none d-lg-flex"
              ><i class="fas fa-search"></i
            ></span>
          </form>
        </div>
        <!-- Left elements -->

        <!-- Right elements -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-circle"
                height="22"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <strong class="d-none d-sm-block ms-1">John</strong>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link" href="#">
              <span><i class="fas fa-plus-circle fa-lg"></i></span>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <router-link to="/login">
              <button
                data-mdb-ripple-init
                type="button"
                class="px-3 me-2 btn btn-primary"
              >
                Login
              </button>
            </router-link>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <router-link to="/register">
              <button
                data-mdb-ripple-init
                type="button"
                class="px-3 me-2 btn btn-primary"
              >
                Register
              </button>
            </router-link>
          </li>
        </ul>
        <!-- Right elements -->
      </div>
    </nav>
    <!-- Navbar -->
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
