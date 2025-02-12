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
            <h1 class="mb-3">Heading</h1>
            <h4 class="mb-3">Subheading</h4>
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
            <form>
              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input type="text" placeholder="Nom" class="form-control" />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="number"
                  placeholder="Téléphone"
                  class="form-control"
                />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input type="email" placeholder="Email" class="form-control" />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input type="text" placeholder="Genre" class="form-control" />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="date"
                  placeholder="Birthdate"
                  class="form-control"
                />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input
                  type="text"
                  placeholder="Position"
                  class="form-control"
                />
              </div>

              <!-- Nom input -->
              <div data-bs-input-init class="form-outline mb-4">
                <input type="text" placeholder="Company" class="form-control" />
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
</template>
