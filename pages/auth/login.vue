<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Login
        </h1>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  name="email"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="password"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>

            <div class="p-2 w-full">
              <button
                type="submit"
                class="
                  flex
                  mx-auto
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },

  methods: {
    async onSubmit() {
      const userData = await this.$axios.$post(
        'http://127.0.0.1:8000/api/auth/login/',
        {
          email: this.email,
          password: this.password,
        }
      )

      this.$store.commit('SET_USER', userData)
    },
  },
}
</script>

<style>
</style>