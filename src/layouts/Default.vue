<template>
  <div>
    <div class="wrapper">
      <header>
        <h1>Earthfield</h1>
      </header>
      <nav>
        <ul>
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
        </ul>
      </nav>
      <slot />
    </div>
  </div>
</template>

<style>
body {
  font-family: "Poppins", sans-serif;
  color: white;
}

section {
  scroll-margin-top: 50px;
}

a {
  text-decoration: none;
  color: white;
}

ul {
  padding-left: 0px;
  list-style-type: none;
}

p {
  margin: 0 0 20px;
}

.wrapper {
  width: 1200px;
  background-color: black;
  margin: auto;
}

header {
  /* background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      60%,
      rgba(0, 0, 0, 0.7)
    ),
    url("img/background_header.jpg"); */
  background-size: cover;
  background-position: center;
}

nav {
  background-color: #333640;
  position: sticky;
  top: 0px;
  font-size: 1.35em;
}

nav ul {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 50px;
  margin: 0px;
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
