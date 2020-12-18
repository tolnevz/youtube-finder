<template>
  <div>
    <nav class="blue darken-3">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">YouTube Video Finder</router-link>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <router-link 
              tag="li"
              to="/"
              exact
              active-class="active"
            >
              <a href="#">Home</a>
            </router-link>
            <router-link 
              tag="li"
              to="/about"
              active-class="active"
            >
              <a href="#">About</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  <ul class="sidenav" id="mobile-nav" ref="mobileNav">
    <router-link 
      tag="li"
      to="/"
      exact
      active-class="active"
    >
      <a href="#">Home</a>
    </router-link>
    <router-link 
      tag="li"
      to="/about"
      active-class="active"
    >
      <a href="#">About</a>
    </router-link>
  </ul>
  </div>
</template>

<script>

import M from '../../node_modules/materialize-css/dist/js/materialize'

export default {
  name: "Navbar",
  mounted(){
    M.Sidenav.init(this.$refs.mobileNav,)
  }
};
</script>

<style scoped>
  @media only screen and (max-width: 414px) {
    .brand-logo {
      font-size: 1rem;
    }
  }
</style>