<template>
  <div class="right">
    <h1>菜单</h1>
    <table>
      <thead>
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pizza,index) in menu" :key="index">
          <td>{{pizza.variety}}</td>
          <td>
            <button @click="deletePizza(index)">x</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      pizza: {}
    };
  },
  computed: mapGetters(["menu"]),
  methods: {
    deletePizza(index) {
      console.log(index);
      this.$axios
        .delete(`sjmenus/${index}.json`)
        .then(res => {
          console.log("delete success", res);
          this.getPizza();
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    getPizza() {
      this.$axios.get("sjmenus.json").then(res => {
        // console.log(res.data);
        // this.pizza = res.data;
        this.$store.dispatch("setMenuAsync", res.data);
      });
    }
  },
  created() {
    this.getPizza();
  }
};
</script>

<style scoped>
.right {
  float: right;
  width: 400px;
}
table {
  border-collapse: collapse;
}
table th,
table td {
  padding: 10px 20px;
  width: 150px;
  border-bottom: 2px solid #dee2e6;
}
table thead th {
  border-top: 1px solid #dee2e6;
  text-align: left;
}
table button {
  color: #dc3545;
  border: #dc3545 1px solid;
  background-color: transparent;
  padding: 5px 10px;
}
</style>