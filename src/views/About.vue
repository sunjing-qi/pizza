<template>
  <div class="hello">
    <div class="lis">
      <ul>
        <li @click="changeHistory" :class="{black:history}">历史订单</li>
        <li @click="changePhone" :class="{black:phone}">联系我们</li>
        <li @click="changeText" :class="{black:text}">点餐文档</li>
        <li @click="changeExpress" :class="{black:express}">快递信息</li>
      </ul>
    </div>
    <div class="show-detail">
      <div class="detail" v-show="history">
        <div>
          <p>历史订单</p>
        </div>
        <div>
          <h2>历史订单</h2>
          <p>email</p>
        </div>
      </div>
      <div class="detail" v-show="phone">
        <div>
          <p>联系我们</p>
        </div>
        <div>
          <h2>联系我们</h2>
          <p>email</p>
          <a href="#" @click.prevent="people=false">电话</a>&nbsp;&nbsp;
          <a href="#" @click.prevent="people=true">联系人</a>
          <h1 v-show="!people">100200300</h1>
          <h1 v-show="people">披萨店老板</h1>
        </div>
      </div>
      <div class="detail" v-show="text">
        <div>
          <p>点餐文档</p>
        </div>
        <div>
          <h2>点餐文档</h2>
          <p>email</p>
        </div>
      </div>
      <div class="detail" v-show="express">
        <div>
          <p>快递信息</p>
        </div>
        <div>
          <h2>快递信息</h2>
          <p>email</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      history: false,
      phone: true,
      text: false,
      express: false,
      people: false
    };
  },
  methods: {
    changeHistory() {
      this.history = true;
      this.phone = false;
      this.text = false;
      this.express = false;
    },
    changePhone() {
      this.history = false;
      this.phone = true;
      this.text = false;
      this.express = false;
    },
    changeText() {
      this.history = false;
      this.phone = false;
      this.text = true;
      this.express = false;
    },
    changeExpress() {
      this.history = false;
      this.phone = false;
      this.text = false;
      this.express = true;
    }
  }
};
</script>

<style scoped>
.hello {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
ul {
  list-style-type: none;
  width: 400px;
  padding: 0;
}
ul li {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  margin: 20px;
  margin-left: 0;
  border-radius: 5px;
}
.lis {
  float: left;
}
.lis ul li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.black {
  background-color: rgba(0, 0, 0, 0.1);
}
.show-detail {
  width: 400px;
  float: left;
}
.detail {
  border: 1px solid gainsboro;
  background-color: rgba(0, 0, 0, 0.01);
  width: 650px;
  margin: 20px 30px;
  box-sizing: border-box;
  border-radius: 5px;
}
.detail div {
  padding: 0 15px;
}
.detail div:nth-child(1) {
  padding-top: 5px;
  border-bottom: 1px solid gainsboro;
  background-color: rgba(0, 0, 0, 0.03);
}
.detail a {
  text-decoration: none;
}
.detail a:hover {
  text-decoration: underline;
  color: darkblue;
}
.detail h2,
.detail h1 {
  font-weight: 200;
}
</style>
