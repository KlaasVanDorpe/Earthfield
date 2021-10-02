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
          description: undefined,
          steam: "https://steamcommunity.com/id/celticon",
          facebook: "https://www.facebook.com/klaas.vandorpe",
          twitter: undefined,
        },
        {
          igname: "TOBU",
          name: "Torre Buysse",
          countryCity: "Belgium, Ertvelde",
          role: "AWPer, Accusing Cheaters",
          dateBirth: "07.04.1998 (23 years)",
          experience: "Yes",
          quote: "als da leutig is is da plezant eh.",
          description:
            "If i had a dollar for every time this man accused the enemey of cheating, i would be a rich man?",
          steam: "https://steamcommunity.com/id/tobu_74",
          facebook: "https://www.facebook.com/tobuysse",
          twitter: null,
        },
        {
          igname: "SALTYMAN",
          name: "Jorik Van Dorpe",
          countryCity: "Belgium, Ertvelde",
          role: "ragequit",
          dateBirth: "25.05.2000 (21 years)",
          experience: "too much",
          quote: undefined,
          description: undefined,
          steam: "https://steamcommunity.com/profiles/76561198105284601",
          facebook: "https://www.facebook.com/jorik.vandorpe",
          twitter: null,
        },
        {
          igname: "BILBO",
          name: "Bram Vanoverbeke",
          countryCity: "Belgium, Aalst",
          role: "Outsider",
          dateBirth: "17.07.1999 (22 years)",
          experience: "pro in different game",
          quote: undefined,
          description: undefined,
          steam: "https://steamcommunity.com/id/bilbottv",
          facebook: "https://www.facebook.com/bram.vanoverbeke.9",
          twitter: "https://twitter.com/bilbo_tv",
        },
        {
          igname: "PETE",
          name: "Alexander Van Waeyenberge",
          countryCity: "Belgium, Ertvelde",
          role: "Being Late",
          dateBirth: "14.05.1998 (23 years)",
          experience: "Yes",
          quote: "the less he knwos what he is doing, the better he plays!",
          description: "",
          steam: "https://steamcommunity.com/profiles/76561198055231201",
          facebook: "https://www.facebook.com/alexander.vanwaeyenberge",
          twitter: undefined,
        },
        {
          igname: "UNKNOWNERROR",
          name: "Mathias Stout",
          countryCity: "Belgium, Ertvelde",
          role: "Ward, Shotgun",
          dateBirth: "10.06.1998 (23 years)",
          experience: "Like, 5 hours max",
          quote: undefined,
          description: undefined,
          steam: "https://steamcommunity.com/profiles/76561198139417891",
          facebook: "https://www.facebook.com/mathias.stout",
          twitter: undefined,
        },
      ],
    };
  },
};
</script>
<style lang='scss'>
</style>