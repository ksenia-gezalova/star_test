<template>
  <div class="ship">wvdvdv</div>
</template>


<script>
import axios from "axios";
export default {
  name: "Ship",
  methods: {
    getShip() {
      axios
        .get(this.$route.query.url)
        .then(response => {
          console.log(response.data);
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
