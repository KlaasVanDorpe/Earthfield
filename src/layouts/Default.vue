<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <g-link to="/"><span>Home</span></g-link>
        <g-link to="/teams"><span>Teams</span></g-link>
        <g-link to="/achievements"><span>achievements</span></g-link>
        <g-link to="/partners"><span>partners</span></g-link>
        <g-link to="/faq"><span>FAQ</span></g-link>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
section {
  scroll-margin-top: 50px;
}

p {
  margin: 0 0 20px;
}

main {
  width: 1200px;
  margin: auto;
}

nav {
  background-color: $darkgray;
  border-bottom: 2px solid $yellow;
  position: sticky;
  top: 0px;
  height: 60px;
  font-size: 1.35em;
  z-index: 2;

  & .nav-wrapper {
    @include wrapper;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
  }

  & a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
  }

  & a:hover {
    background-color: #24262c;
    color: hsl(55, 94%, 54.1%);
  }

  & span {
    margin: auto;
  }
}
</style>
