<template>
  <div class="default">
    <header>
      <g-image
        src="@/assets/images/EarthfieldNewLogoFullTransparent.png"
        width="60px"
        height="60px"
        fit="contain"
      />
      <nav>
        <g-link to="/"><span>Home</span></g-link>
        <g-link to="/teams"><span>Teams</span></g-link>
        <g-link to="/achievements"><span>achievements</span></g-link>
        <g-link to="/partners"><span>partners</span></g-link>
        <g-link to="/faq"><span>FAQ</span></g-link>
      </nav>
    </header>
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

header {
  background-color: $darkgray;
  border-bottom: 2px solid $yellow;
  position: sticky;
  top: 0px;
  height: 70px;
  font-size: 1.2rem;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & img {
    height: 60px;
    width: 60px;
    margin-left: 1rem;
  }
  & nav {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  & a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    margin-right: 1rem;

    & :hover {
      color: hsl(55, 94%, 54.1%);
    }

    &.active--exact:first-child {
      border-bottom: 1px solid white;
    }

    &.active:not(:first-child) {
      border-bottom: 1px solid white;
    }
  }

  & span {
    margin: auto;
  }
}
</style>
