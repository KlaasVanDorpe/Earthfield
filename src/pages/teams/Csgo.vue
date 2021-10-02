<template>
  <div class="csgo">
    <Player
      v-for="player in players"
      :key="player.igname"
      :igname="player.igname"
      :name="player.name"
      :countryCity="player.countryCity"
      :role="player.role"
      :dateBirth="player.dateBirth"
      :experience="player.experience"
      :quote="player.quote"
      :description="player.description"
      :steam="player.steam"
      :facebook="player.facebook"
      :twitter="player.twitter"
    />
    <section class="player" id="celticon">
      <div class="info">
        <div class="name">
          <h2>CELTICON</h2>
          <p>Klaas Van Dorpe</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Ertvelde</p>
          <p><span>ROLE:</span> Emortional support, Memelord</p>
          <p><span>DATE OF BIRTH:</span> 18.08.1998 (22 years)</p>
          <p><span>GAME EXPERIENCE:</span> Yes</p>
        </div>
        <blockquote>
          <p>"the less he knwos what he is doing, the better he plays!"</p>
        </blockquote>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores dolores incidunt blanditiis? Placeat at alias beatae maxime
            quo ullam soluta repudiandae repellat velit consequuntur, illo quis
            vero officia enim.
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/id/celticon"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/klaas.vandorpe"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <!-- <img src="img/player1.png" alt="Earthfield player celticon" /> -->
      </div>
    </section>
    <section class="player" id="tobu">
      <div class="info">
        <div class="name">
          <h2>TOBU</h2>
          <p>Torre Buysse</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Ertvelde</p>
          <p><span>ROLE:</span> Accusing Cheaters</p>
          <p><span>DATE OF BIRTH:</span> 18.08.1998 (22 years)</p>
          <p><span>GAME EXPERIENCE:</span> Yes</p>
        </div>
        <blockquote>
          <p>"als da leutig is is da plezant eh."</p>
        </blockquote>
        <div class="description">
          <p>
            If i had a dollar for every time this man accused the enemey of
            cheating, i would be a rich man?
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/id/tobu_74"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/tobuysse"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <!-- <img src="img/player1.png" alt="Earthfield player Tobu" /> -->
      </div>
    </section>
    <section class="player" id="saltyman">
      <div class="info">
        <div class="name">
          <h2>SALTYMAN</h2>
          <p>Jorik Van Dorpe</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Ertvelde</p>
          <p><span>ROLE:</span> Emortional support, Memelord</p>
          <p><span>DATE OF BIRTH:</span> 28.05.2000 (20 years)</p>
          <p><span>GAME EXPERIENCE:</span> Yes</p>
        </div>
        <blockquote>
          <p>"blablbabla"</p>
        </blockquote>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores dolores incidunt blanditiis? Placeat at alias beatae maxime
            quo ullam soluta repudiandae repellat velit consequuntur, illo quis
            vero officia enim.
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/profiles/76561198105284601"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/jorik.vandorpe"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <!-- <img src="img/player1.png" alt="Earthfield player saltyman" /> -->
      </div>
    </section>
    <section class="player" id="bilbo">
      <div class="info">
        <div class="name">
          <h2>BILBO</h2>
          <p>Bram Vanoverbeke</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Aalst</p>
          <p><span>ROLE:</span> Emortional support, Memelord</p>
          <p><span>DATE OF BIRTH:</span> 17.07.1999 (21 years)</p>
          <p><span>GAME EXPERIENCE:</span> Rocket League pro</p>
        </div>
        <blockquote>
          <p>"blablbabla"</p>
        </blockquote>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores dolores incidunt blanditiis? Placeat at alias beatae maxime
            quo ullam soluta repudiandae repellat velit consequuntur, illo quis
            vero officia enim.
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/id/bilbottv"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/bram.vanoverbeke.9"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <!-- <img src="img/player1.png" alt="Earthfield player bilbo" /> -->
      </div>
    </section>
    <section class="player" id="pete">
      <div class="info">
        <div class="name">
          <h2>PETE</h2>
          <p>Alexander Van Waeyenberge</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Ertvelde</p>
          <p><span>ROLE:</span> Being late</p>
          <p><span>DATE OF BIRTH:</span> 14.05.1998 (22 years)</p>
          <p><span>GAME EXPERIENCE:</span> Yes</p>
        </div>
        <blockquote>
          <p>"blablbabla"</p>
        </blockquote>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores dolores incidunt blanditiis? Placeat at alias beatae maxime
            quo ullam soluta repudiandae repellat velit consequuntur, illo quis
            vero officia enim.
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/profiles/76561198055231201"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/alexander.vanwaeyenberge"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <!-- <img src="img/player1.png" alt="Eartfield player Pete" /> -->
      </div>
    </section>
    <section class="player" id="unknownerror">
      <div class="info">
        <div class="name">
          <h2>UNKNOWNERROR</h2>
          <p>Mathias Stout</p>
        </div>
        <div class="summary">
          <p><span>COUNTRY, CITY:</span> Belgium, Ertvelde</p>
          <p><span>ROLE:</span> Shotgun in appartements</p>
          <p><span>DATE OF BIRTH:</span> 10.06.1998 (22 years)</p>
          <p><span>GAME EXPERIENCE:</span> Like, 5 hours max</p>
        </div>
        <blockquote>
          <p>"blablbabla"</p>
        </blockquote>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores dolores incidunt blanditiis? Placeat at alias beatae maxime
            quo ullam soluta repudiandae repellat velit consequuntur, illo quis
            vero officia enim.
          </p>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="https://steamcommunity.com/profiles/76561198139417891"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/steam_logo.png" alt="steam" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/mathias.stout"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/facebook_logo.png" alt="facebook" -->
                /></a
              >
            </li>
            <li>
              <a
                href="https://twitter.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <!-- <img src="img/twitter_logo.png" alt="twitter" -->
                /></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="picture">
        <img src="img/player1.png" alt="Earthfield player unknownerror" />
      </div>
    </section>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
export default {
  name: "Csgo",
  components: { Player },
  data() {
    return {
      players: [
        {
          igname: "CELTICON",
          name: "Klaas Van Dorpe",
          countryCity: "Belgium, Ertvelde",
          role: "Emortional support, Memelord",
          dateBirth: "18.08.1998 (22 years)",
          experience: "Yes",
          quote: "the less he knwos what he is doing, the better he plays!",
          description: "",
          steam: "https://steamcommunity.com/id/celticon",
          facebook: "https://www.facebook.com/klaas.vandorpe",
          twitter: null,
        },
      ],
    };
  },
};
</script>
<style lang='scss'>
.player {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #3a3c42;
  padding: 40px 60px 0px 60px;
}

.player .info {
  width: 700px;
}

.player .name {
  // background-image: url("@assets/images/CSGO_logo.png");
  background-position: -23px 3px;
  background-repeat: no-repeat;
  background-size: 105px;
  font-family: "Lato", sans-serif;
  padding: 0 0 30px 80px;
}

.player .name h2 {
  margin: 0px;
  padding: 0px;
  text-align: left;
}

.player .name p {
  font-size: 1.5em;
  margin: 0px;
  color: #717686;
}

.player .summary {
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.player .summary p {
  width: 300px;
}

.player .summary span {
  color: #717686;
}

.player blockquote {
  padding-bottom: 10px;
  margin: 0;
}

.player .description {
  padding-bottom: 10px;
}

.player .social {
  padding-bottom: 10px;
}

.player .social ul {
  display: block;
}

.player .social li {
  display: inline-block;
  margin-right: 15px;
}

.player .social img {
  height: 40px;
}

.player .picture {
  display: flex;
  align-items: flex-end;
}

.player .picture img {
  width: 450px;
}
</style>