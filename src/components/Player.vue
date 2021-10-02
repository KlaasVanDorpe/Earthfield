<template>
  <div class="player">
    <div class="info">
      <div class="name">
        <g-image
          src="@/assets/images/CSGO_logo.png"
          width="100px"
          height="84px"
          fit="inside"
          quality="100"
        />
        <h2>{{ igname }}</h2>
        <p>{{ name }}</p>
      </div>
      <div class="summary">
        <p><span>COUNTRY, CITY:</span> {{ countryCity }}</p>
        <p><span>ROLE:</span> {{ role }}</p>
        <p><span>DATE OF BIRTH:</span> {{ dateBirth }}</p>
        <p><span>GAME EXPERIENCE:</span> {{ experience }}</p>
      </div>
      <blockquote>
        <p>"{{ quote }}"</p>
      </blockquote>
      <div class="description">
        <p>
          {{ description }}
        </p>
      </div>
      <div class="social">
        <li>
          <a :href="steam" rel="noopener noreferrer nofollow" target="_blank">
            <g-image
              src="@/assets/images/steam_logo.png"
              width="40px"
              height="40px"
              fit="fill"
              alt="steam"
            />
          </a>
        </li>
        <li>
          <a
            :href="facebook"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <g-image
              src="@/assets/images/facebook_logo.png"
              width="40px"
              height="40px"
              fit="fill"
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a :href="twitter" rel="noopener noreferrer nofollow" target="_blank">
            <g-image
              src="@/assets/images/twitter_logo.png"
              width="40px"
              height="40px"
              fit="fill"
              alt="twitter"
            />
          </a>
        </li>
      </div>
    </div>
    <div class="picture">
      <!-- <img src="img/player1.png" alt="Earthfield player celticon" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    igname: String,
    name: String,
    countryCity: String,
    role: String,
    dateBirth: String,
    experience: String,
    quote: {
      type: String,
      default: "bla bla bla",
    },
    description: {
      tyep: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores dolores incidunt blanditiis? Placeat at alias beatae maxime quo ullam soluta repudiandae repellat velit consequuntur, illo quis vero officia enim.",
    },
    steam: String,
    facebook: String,
    twitter: String,
  },
};
</script>
<style lang='scss'>
.player {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #3a3c42;
  padding: 40px 0;

  & .info {
    width: 700px;
  }

  & .name {
    position: relative;
    font-family: "Lato", sans-serif;
    padding: 0 0 30px 80px;
  }

  & .name img {
    position: absolute;
    top: 13px;
    left: 2px;
  }

  & .name h2 {
    margin: 0px;
    padding: 0px;
    text-align: left;
  }

  & .name p {
    font-size: 1.5em;
    margin: 0px;
    color: #717686;
  }

  & .summary {
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & .summary p {
    width: 300px;
  }

  & .summary span {
    color: #717686;
  }

  & blockquote {
    padding-bottom: 10px;
    margin: 0;
  }

  & .description {
    padding-bottom: 10px;
  }

  & .social {
    padding-bottom: 10px;
  }

  .social li {
    display: inline-block;
    margin-right: 15px;
  }

  & .social img {
    height: 40px;
  }

  & .picture {
    display: flex;
    align-items: flex-end;
  }

  & .picture img {
    width: 450px;
  }
}
</style>