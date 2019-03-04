<template>
  <div class="ships">
    <h1 class="ships__title">galactic base</h1>
    <div v-if="ships.length > 0">
      <div class="ships__container">
        <div class="ships__search">
          <input type="text" placeholder="Search" v-model="search">
        </div>
        <ul class="ships__list" v-if="filteredList.length !== 0">
          <li
            class="ships__item"
            v-for="(ship, i) in filteredList"
            :key="i"
            :class="{'ships__item--light': i%2 !== 0, 'ships__item--dark': i%2 === 0}"
          >
            <router-link :to="'/ship?url=' + ship.url">{{ ship.name }}</router-link>
          </li>
        </ul>
        <div class="ships__empty" v-else>ship not found</div>
      </div>
    </div>

    <div class="ships__loader" v-else>Loading...</div>

    <paginate
      :page-count="Math.round(shipsCount / 10)"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'paginate'"
    ></paginate>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ships",
  data() {
    return {
      search: "",
      ships: [],
      shipsCount: null,
      pageNum: 1
    };
  },
  methods: {
    getShipList() {
      this.ships = [];
      axios
        .get("https://swapi.co/api/starships/?page=" + this.pageNum)
        .then(response => {
          this.ships = response.data.results;
          this.shipsCount = response.data.count;
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickCallback(pageNum) {
      this.pageNum = pageNum;
      this.getShipList();
    }
  },
  computed: {
    filteredList() {
      if (this.search === "") return this.ships;
      else {
        return this.ships.filter(ship => {
          console.log(this.search);
          return ship.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    }
  },
  created() {
    this.getShipList();
  },
  beforeMount() {
    this.search = this.$route.query.search || "";
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #fff;
  display: block;
}

.paginate {
  list-style: none;
  display: flex;
  margin-top: 30px;
  justify-content: center;

  li {
    display: inline-block;
    margin-right: 5px;
    background-color: rgb(43, 41, 41);
    padding: 3px 5px;
    transition: all 0.3s;
    text-align: center;

    &:hover {
      opacity: 0.8;
    }
  }

  .active {
    background-color: rgb(97, 95, 95);
  }
}
</style>


<style lang="scss" scoped>
.ships {
  &__search {
    text-align: right;
    input {
      background-color: transparent;
      border: none;
      padding: 10px;
      border-bottom: 1px solid rgb(235, 237, 17);
      color: #fff;
      outline: none;
    }
  }
  &__title {
    text-align: center;
    font-variant: small-caps;
    text-transform: uppercase;
    color: rgb(235, 237, 17);
    border-bottom: 1px solid rgb(235, 237, 17);
    width: max-content;
    margin: auto;
    margin-bottom: 30px;
  }
  &__list {
    list-style: none;
  }
  &__item {
    cursor: pointer;
    padding: 10px;
    font-variant: small-caps;
    letter-spacing: 1px;
    transition: all 0.3s;
    border: 1px solid transparent;

    &--light {
      background-color: rgb(97, 95, 95);
    }

    &--dark {
      background-color: rgb(77, 76, 76);
    }

    &:hover {
      border: 1px solid rgb(235, 237, 17);
    }
  }

  &__loader,
  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
}
</style>
