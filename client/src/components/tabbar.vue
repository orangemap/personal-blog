<!--  -->
<template>
  <div class="tabbar-box">
    <ul class="flex">
      <li
        :class="current == index ? 'active' : ''"
        v-for="(item,index) in tabList"
        :key="index"
        @click="handleClick(index)"
        @mouseenter="handleClick(index)"
      >{{item.name}}
       <i v-if="item.icon" class="el-icon-edit-outline"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "tabbar",
  components: {},
  data() {
    //这里存放数据
    return {
      tabList: [
        {
          name: "主页"
        },
        {
          name: "node"
        },
        {
          name: "前端"
        },
        {
          name: "数据库"
        },
        {
          name: "面试问题"
        },
        {
          name: "招聘●内推",
          icon:true
        },
        {
          name: "关于我"
        },
        {
          name: "GitHub",
           icon:true
        }
      ],
      current: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClick(index) {
      this.current = index;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.tabbar-box {
  li {
    font-weight: 400;
  }
  .active {
    color: #505d6b;
    border-bottom: 2px solid #4fc08d;
  }
}
</style>