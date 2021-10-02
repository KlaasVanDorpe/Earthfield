<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <li>
          <g-link to="/"><span>Home</span></g-link>
        </li>
        <li>
          <g-link to="/teams"><span>Teams</span></g-link>
        </li>
        <li>
          <g-link to="/achievements"><span>achievements</span></g-link>
        </li>
        <li>
          <g-link to="/partners"><span>partners</span></g-link>
        </li>
        <li>
          <g-link to="/faq"><span>FAQ</span></g-link>
        </li>
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
  font-size: 1.35em;
  z-index: 2;
}

nav .nav-wrapper {
  @include wrapper;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 50px;
}

nav li {
  display: flex;
  flex-grow: 1;
  width: 100%;
}

nav li:hover {
  background-color: #24262c;
  color: hsl(55, 94%, 54.1%);
}

nav a {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
}

nav .dropdown-content {
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: #24262c;
  color: #838796;
  top: 50px;
  width: 240px;
}

nav .dropdown-content a:last-child {
  padding-bottom: 10px;
}

nav .dropdown-content a {
  height: 40px;
}

nav .dropdown-content a:hover {
  color: white;
  transition: all 0.2s ease 0s;
}

nav li:nth-child(2):hover .dropdown-content {
  display: flex;
}

nav span {
  margin: auto;
}
</style>
