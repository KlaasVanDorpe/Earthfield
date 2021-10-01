<template>
  <Default>
    <div class="partners">
      <h2>PARTNERS</h2>
      <div class="partner">
        <!-- <img
              src="img/logitech_logo.png"
              alt="logo of the logitech G gaming brand"
            /> -->
        <article>
          <h3>logitech</h3>
          <p>
            Logitech G is a leading manufacturer of devices for gamers. Their
            philosophy is based on two principles. The first is the
            implementation of a scientific approach and innovations to create
            perfect products for players around the world. The second is the
            game as a lifestyle. Logitech G constantly collaborates with all
            major game developers to ensure that their devices take the gameplay
            to the next level. Logitech G is also a sponsor of hundreds of
            professional players and teams around the world, which helps in the
            development of devices for those who can not imagine their life
            without competitive gaming. Sadly enough, Logitech gave me a French
            keyboard. So I bought a keyboard from a different company.
          </p>
        </article>
      </div>
      <div class="partner">
        <!-- <img
              src="img/logitech_logo.png"
              alt="logo of the logitech G gaming brand"
            /> -->
        <article>
          <h3>logitech</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi
            vel repudiandae, provident nulla aliquam nam accusantium explicabo
            modi odit ab similique sit! Ex sunt veritatis, amet doloremque natus
            sequi?
          </p>
        </article>
      </div>
      <div class="partner">
        <!-- <img
              src="img/Secret-Lab-Logo_white.png.webp"
              alt="logo of secret lab"
            /> -->
        <article>
          <h3>secret lab</h3>
          <p>
            Nobody knows why they are here. Their brand has nothing to do with
            gaming. they don't ask questions about our bussines. I don't think
            they understand what it is we do. But they give us money, which is
            nice.
          </p>
        </article>
      </div>
    </div>
  </Default>
</template>

<script>
export default {
  name: "Partners",
};
</script>
<style lang='scss'>
.partners {
  padding: 0 60px 40px;
  border-bottom: 2px solid #3a3c42;
}

.partner {
  display: flex;
  flex-direction: row;
}

.partners img {
  width: 300px;
  margin: auto;
}

.partners article {
  margin-left: 50px;
}
</style>