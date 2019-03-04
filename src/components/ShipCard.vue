<template>
  <div class="ship">
    <h1 class="ship__title">{{ item.name }}</h1>
    <div class="ship__container">
      <p>MGLT: {{ item.MGLT}}</p>
      <p>cargo_capacity: {{ item.cargo_capacity }}</p>
      <p>consumables: {{ item.consumables }}</p>
      <p>cost_in_credits: {{ item.cost_in_credits }}</p>
      <p>created: {{ item.created.replace('T', '').replace('Z', ' ') || item.created }}</p>
      <p>crew: {{ item.crew }}</p>
      <p>edited: {{ item.edited.replace('T', ' ').replace('Z', ' ') || item.edited }}</p>
      <p v-if="item.films.length !== 0">films: {{ item.films }}</p>
      <p>hyperdrive_rating: {{ item.hyperdrive_rating }}</p>
      <p>length: {{ item.length }}</p>
      <p>manufacturer: {{ item.manufacturer }}</p>
      <p>max_atmosphering_speed: {{ item.max_atmosphering_speed }}</p>
      <p>model: {{ item.model }}</p>
      <p>passengers: {{ item.passengers }}</p>
      <p v-if="item.pilots.length !== 0">pilots: {{item.pilots}}</p>
      <p>starship_class: {{ item.starship_class}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ship",
  data() {
    return {
      item: ''
    }
  },
  methods: {
    getShip() {
      axios
        .get(this.$route.query.url)
        .then(response => {
          console.log(response.data);
          this.item = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.getShip();
  }
};
</script>

<style lang="scss" scoped>
.ship {
  p {
    margin: 10px;
    font-variant: small-caps;
    letter-spacing: .5px;
    border-bottom: 1px solid rgb(119, 119, 106);
  }
  &__title {
    border-bottom: 1px solid rgb(235, 237, 17);
    width: max-content;
  }

  &__container {
    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      grid-gap: 20px;

      p {
        border-bottom: none;
      }
    }  
  }
}
</style>

