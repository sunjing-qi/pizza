<template>
  <div>
    <div class="home">
      <div class="whitepart">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <router-link to="/menu">
          <button>Let's order!</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="threepart">
        <div class="title">点餐文档</div>
        <div class="content">
          <h1>点餐文档</h1>
          <p>email</p>
        </div>
      </div>
      <div class="threepart">
        <div class="title">快递信息</div>
        <div class="content">
          <h1>快递信息</h1>
          <p>email</p>
        </div>
      </div>
      <div class="threepart">
        <div class="title">历史订单</div>
        <div class="content">
          <h1>历史订单</h1>
          <p>email</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
.home {
  background: url(../assets/pizza.jpg) no-repeat 100%;
  width: 1100px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.whitepart {
  background-color: #eee;
  opacity: 0.8;
  margin: 0 auto;
  width: 900px;
  text-align: center;
  box-sizing: border-box;
  padding: 20px 0px;
  margin-top: 80px;
}
.whitepart h1 {
  margin: 50px 0;
  font-size: 40px;
}
.whitepart h2 {
  margin-bottom: 50px;
  font-size: 32px;
}
.whitepart button {
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
}
.row {
  overflow: hidden;
  width: 1100px;
  margin: 20px auto;
}
.threepart {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 350px;
  margin: 0 7px;
  float: left;
}
.title {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 10px;
}
.content {
  box-sizing: border-box;
  padding: 5px 10px;
}
</style>