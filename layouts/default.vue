<template>
  <div class="font-google flex flex-col min-h-screen text-gray-300 text-lg">
    <!-- Header -->
    <header
      class="w-full fixed z-10 transition-colors ease-in-out duration-500"
      :class="
        !atTop || drawer
          ? 'bg-gray-900 bg-darken-4 shadow-md backdrop-blur bg-opacity-93'
          : ''
      "
    >
      <!-- Navigation -->
      <nav
        role="navigation"
        class="container mx-auto px-5 py-5 md:px-0 flex flex-col md:flex-no-wrap"
      >
        <div class="flex justify-between items-center">
          <div class="truncate">
            <nuxt-link to="/" class="text-xl uppercase border-0 select-none"
              >School/Of/<span class="font-bold">Thoughts</span></nuxt-link
            >
          </div>
          <div>
            <button
              class="block md:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none"
              type="button"
              @click.stop="drawer = !drawer"
            >
              <svg
                class="h-5 w-5 fill-current"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  v-if="!drawer"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
                <path
                  v-if="drawer"
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.585 10l-7.07 7.071 1.414 1.414L10 11.415l7.071 7.07 1.414-1.414L11.415 10l7.07-7.071-1.414-1.414L10 8.585z"
                />
              </svg>
            </button>
          </div>
          <div
            class="top-link hidden md:flex text-blue-400 space-x-4 lg:space-x-6 uppercase tracking-wider font-bold text-xs"
          >
            <nuxt-link
              v-for="route in routes"
              :key="route.name"
              class="border border-transparent px-3 py-2 rounded hover:border-blue-400"
              :to="route.path"
              >{{ route.name }}</nuxt-link
            >
          </div>
        </div>
        <transition name="dropdown">
          <div
            class="top-link flex flex-col my-4 space-y-4 text-blue-400 uppercase tracking-wider font-bold text-xs md:hidden"
            v-click-outside="vcoConfig"
            v-if="drawer"
          >
            <nuxt-link
              v-for="route in routes"
              :key="route.name"
              class="border border-transparent px-3 py-2 rounded hover:border-blue-400"
              :to="route.path"
              @click="closeDrawer"
              >{{ route.name }}</nuxt-link
            >
          </div>
        </transition>
      </nav>
    </header>
    <!-- Main content -->
    <main class="flex-grow flex">
      <nuxt />
    </main>
    <!-- Footer -->
    <footer>
      <div
        class="pt-6 leading-none text-center text-sm font-hairline text-gray-400 tracking-wide"
        :class="isDev ? 'pb-10' : 'pb-3'"
      >
        Made with <span class="text-xl align-middle">♥</span> using
        <a class="font-medium" href="https://nuxtjs.org/" target="_blank"
          >NuxtJS</a
        >
        &
        <a class="font-medium" href="https://tailwindcss.com/" target="_blank"
          >TailwindCSS</a
        >
      </div>
    </footer>
    <!-- Debug bar -->
    <div
      class="fixed w-full bottom-0 flex justify-start flex-wrap px-5 py-1 tracking-wider space-x-2 text-sm bg-gray-900 backdrop-blur bg-opacity-70"
      v-if="isDev"
    >
      <div class="font-bold uppercase bg-gray-800 px-2 rounded">
        {{ $screen.breakpoint }}
      </div>
      <div class="font-bold uppercase bg-gray-800 px-2 rounded">
        {{ $screen.width }} x {{ $screen.height }}
      </div>
      <div
        class="font-bold uppercase bg-gray-800 px-2 rounded"
        v-if="$screen.landscape"
      >
        landscape
      </div>
      <div
        class="font-bold uppercase bg-gray-800 px-2 rounded"
        v-if="$screen.portrait"
      >
        portrait
      </div>
      <div
        class="font-bold uppercase bg-gray-800 px-2 rounded"
        v-if="$screen.touch"
      >
        touch
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atTop: true,
      drawer: false,
      vcoConfig: {
        handler: this.closeDrawer,
        events: ['dblclick', 'click']
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  created() {
    this.routes = [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Posts', path: '/posts' },
      { name: 'About', path: '/about' }
    ]
  },
  computed: {
    isDev() {
      return this.$store.state.dev
    }
  },
  methods: {
    handleScroll() {
      let pageOffset = window.pageYOffset <= 0
      this.atTop = pageOffset != this.atTop ? pageOffset : this.atTop
    },
    closeDrawer(event) {
      if (this.drawer && (this.$screen.xs || this.$screen.sm)) {
        this.drawer = false
      }
    }
  },
  watch: {
    '$screen.width'() {
      this.handleScroll()
      this.closeDrawer()
    },
    '$route.path'() {
      this.closeDrawer()
    }
  }
}
</script>

<style lang="scss">
.top-link {
  a {
    @apply select-none;

    &.nuxt-link-exact-active {
      @apply bg-blue-400 text-gray-900;

      &:hover {
        @apply border-transparent cursor-default;
      }
    }
  }
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s;
}

.page-enter,
.page-leave-active,
.layout-enter,
.layout-leave-active {
  opacity: 0;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  max-height: 300px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
