<template>
  <div class="home">
    <h2>Welcome to the Official Website!</h2>
    <p class="band-logo">
      <img src="/UPPERCASE_logo.png">
    </p>
    <p class="home-content">
      UPPERCASE is a Filipino-Canadian indie pop rock band from Toronto, Canada
      pursuing Original Pilipino Music (OPM)
    </p>
    <p>
      Check out the band's music on
      <a
        href="https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB"
        target="blank"
      >Spotify</a>!
    </p>
    <p>
      Follow the band on
      <a
        href="https://www.instagram.com/ang.bandang.uppercase/"
        target="blank"
      >Instagram</a>!
    </p>
    <p>
      Like and Share on
      <a
        href="https://www.facebook.com/ang.bandang.uppercase/"
        target="blank"
      >Facebook</a>!
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<style scoped>
.band-logo  {
  padding-top: 20px;
}
.band-logo img {
  width: 450px;
  height: 300px;
}
.page-content {
  padding-top: 25px;
  padding-bottom: 25px;
}
@media (min-width: 0px) and (max-width: 565px) {
  .page-content {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 566px) and (max-width: 614px) {
  .page-content {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (min-width: 610px) and (max-width: 629px) {
  .page-content {
    padding-left: 60px;
    padding-right: 60px;
  }
}
@media (min-width: 630px) and (max-width: 639px) {
  .page-content {
    padding-left: 65px;
    padding-right: 65px;
  }
}
@media (min-width: 640px) and (max-width: 649px) {
  .page-content {
    padding-left: 70px;
    padding-right: 70px;
  }
}
@media (min-width: 650px) and (max-width: 659px) {
  .page-content {
    padding-left: 75px;
    padding-right: 75px;
  }
}
@media (min-width: 660px) and (max-width: 669px) {
  .page-content {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 670px) and (max-width: 679px) {
  .page-content {
    padding-left: 85px;
    padding-right: 85px;
  }
}
@media (min-width: 680px) and (max-width: 689px) {
  .page-content {
    padding-left: 90px;
    padding-right: 90px;
  }
}
@media (min-width: 690px) and (max-width: 699px) {
  .page-content {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 700px) and (max-width: 749px) {
  .page-content {
    padding-left: 120px;
    padding-right: 120px;
  }
}
@media (min-width: 750px) and (max-width: 759px) {
  .page-content {
    padding-left: 125px;
    padding-right: 125px;
  }
}
@media (min-width: 760px) and (max-width: 767px) {
  .page-content {
    padding-left: 130px;
    padding-right: 130px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .page-content {
    padding-left: 140px;
    padding-right: 140px;
  }
}
@media (min-width: 1024px) {
  .page-content {
    padding-left: 280px;
    padding-right: 280px;
  }
}
</style>
