<template>
  <div class="header">
    <router-link to="#" class="bigFont">Pizza点餐系统</router-link>
    <ul>
      <li @click="changeHomepage">
        <router-link to="/" :class="{visit:homepage}">主页</router-link>
      </li>
      <li @click="changeMenupage">
        <router-link to="menu" :class="{visit:menupage}">菜单</router-link>
      </li>
      <li @click="changeManagepage">
        <router-link to="manage" :class="{visit:managepage}">管理</router-link>
      </li>
      <li @click="changeAboutpage">
        <router-link to="about" :class="{visit:aboutpage}">关于我们</router-link>
      </li>
    </ul>
    <ul class="secondul">
      <li v-if="!isLogin" @click="changeLoginpage">
        <router-link to="login" :class="{visit:loginpage}">登陆</router-link>
      </li>
      <li v-if="!isLogin" @click="changeRegisterpage">
        <router-link to="register" :class="{visit:registerpage}">注册</router-link>
      </li>
      <li v-if="isLogin">{{user.email}}</li>
      <li v-if="isLogin">
        <span @click="unLogin">[退出]</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "pizza-header",
  data() {
    return {
      homepage: true,
      menupage: false,
      managepage: false,
      aboutpage: false,
      loginpage: false,
      registerpage: false
    };
  },
  computed: mapGetters(["isLogin", "user"]),
  methods: {
    unLogin() {
      this.$store.dispatch("setIsLoginAsync", false);
      this.$store.dispatch("setUserAsync", null);
      this.$router.push("/login");
    },
    changeHomepage() {
      this.homepage = true;
      this.menupage = false;
      this.managepage = false;
      this.aboutpage = false;
      this.loginpage = false;
      this.registerpage = false;
    },
    changeMenupage() {
      this.homepage = false;
      this.menupage = true;
      this.managepage = false;
      this.aboutpage = false;
      this.loginpage = false;
      this.registerpage = false;
    },
    changeManagepage() {
      this.homepage = false;
      this.menupage = false;
      this.managepage = true;
      this.aboutpage = false;
      this.loginpage = false;
      this.registerpage = false;
    },
    changeAboutpage() {
      this.homepage = false;
      this.menupage = false;
      this.managepage = false;
      this.aboutpage = true;
      this.loginpage = false;
      this.registerpage = false;
    },
    changeLoginpage() {
      this.homepage = false;
      this.menupage = false;
      this.managepage = false;
      this.aboutpage = false;
      this.loginpage = true;
      this.registerpage = false;
    },
    changeRegisterpage() {
      this.homepage = false;
      this.menupage = false;
      this.managepage = false;
      this.aboutpage = false;
      this.loginpage = false;
      this.registerpage = true;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
  margin: 0 75px;
}
a {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.visit {
  color: rgba(0, 0, 0, 0.7);
}

.bigFont {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
  margin-left: 20px;
}
ul {
  list-style-type: none;
  display: inline-block;
}
ul li {
  display: inline-block;
  padding: 5px 10px;
}
.secondul {
  margin-right: 30px;
  float: right;
}
ul li a:hover {
  color: rgba(0, 0, 0, 0.7);
}
span {
  color: rgba(0, 0, 0, 0.5);
}
span:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
}
</style>
