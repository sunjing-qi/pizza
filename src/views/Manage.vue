<template>
  <div class="hello">
    <div class="left">
      <form @submit.prevent="handleSubmit">
        <h1>添加新的Pizza</h1>
        <div class="one-row">
          <label for>品种</label>
          <input type="text" v-model="newpizza.variety" />
        </div>
        <div class="one-row">
          <label for class="desc">描述</label>
          <textarea v-model="newpizza.description"></textarea>
        </div>
        <h4>选项1</h4>
        <div class="one-row">
          <label for>尺寸</label>
          <input type="text" v-model="newpizza.sizeone" />
        </div>
        <div class="one-row">
          <label for>价格</label>
          <input type="text" v-model="newpizza.priceone" />
        </div>
        <h4>选项2</h4>
        <div class="one-row">
          <label for>尺寸</label>
          <input type="text" v-model="newpizza.sizetwo" />
        </div>
        <div class="one-row">
          <label for>价格</label>
          <input type="text" v-model="newpizza.pricetwo" />
        </div>
        <input type="submit" value="添加" />
      </form>
    </div>
    <Table />
  </div>
</template>

<script>
import Table from "../components/Table";
export default {
  name: "Manage",
  data() {
    return {
      newpizza: {
        variety: "",
        description: "",
        sizeone: "",
        priceone: "",
        sizetwo: "",
        pricetwo: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("sjmenus.json", this.newpizza)
        .then(res => {
          console.log("add success", res);
          this.getPizza();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPizza() {
      this.$axios.get("sjmenus.json").then(res => {
        // console.log(res.data);
        this.$store.dispatch("setMenuAsync", res.data);
      });
    }
  },
  components: { Table },
  created() {
    this.getPizza();
  }
};
</script>

<style scoped>
.hello {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
h1 {
  color: #6c757d;
}
.left {
  float: left;
  width: 700px;
  /* margin: 0 30px; */
}
.left input {
  width: 90%;
  height: 35px;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  /* border-radius: 5px; */
}
.desc {
  float: left;
  /* margin-top: 28px; */
}
textarea {
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  width: 90%;
  height: 70px;
  border-radius: 5px;
}
.left input[type="submit"] {
  width: 98%;
  background-color: #28a745;
  border: #28a745 1px solid;
  color: aliceblue;
  border-radius: 5px;
}
</style>
