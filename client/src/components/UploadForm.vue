<script setup></script>

<template>
  <section class="form p-5">
    <div class="container pb-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="row g-3 justify-content-center">
            <div class="col-xl-8">
              <label for="inputEmail4" class="form-label">Question</label>
              <input type="text" class="form-control" id="inputEmail4" />
            </div>

            <div class="col-xl-8">
              <label for="inputPassword4" class="form-label">Answer</label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>

            <div class="col-xl-8">
              <button type="submit" class="btn btn-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.form-label {
  color: #fff;
  /* font-size: 1.125rem;
  font-weight: 500; */
}

.form-control {
  outline: none;
  box-shadow: none;
  background: transparent;
  height: 48px;
  font-size: 1.125rem;
  color: #fff;
}
</style>
