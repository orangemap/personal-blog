<template>
  <div class="blog">
    <el-container>
      <el-header>
        <el-row :gutter="5">
          <el-col :span="4">
            <div class="title">王建文技术博客</div>
          </el-col>
          <el-col :span="6">
            <div class="entry">211111111111111111</div>
          </el-col>
          <el-col :span="14">
            <el-row :gutter="10">
              <el-col :span="8">
                <el-input v-model="input4">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-col>
              <el-col :span="16">
                <tabbar></tabbar>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px"></el-aside>
        <el-container>
          <el-main>
            <div class="main-left">
              <el-avatar
                src="https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
                :size="130"
              ></el-avatar>
              <h1 class="main-title">王建文技术博客</h1>
              <p class="description">一个用心帮助你成长的博客</p>
              <p class="start-action">
                <el-button type="success" size="medium ">开始阅读 →</el-button>
              </p>
              <div class="features">
                <el-row :gutter="40">
                  <el-col :span="8">
                    <div>
                      <h2>day day up</h2>
                      <p>记录每一天的进步, 一分耕耘，一分收获.</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <h2>程序员成长指北</h2>
                    <p>专注 Node.js 技术栈分享，从 前端 到 Node.js 再到 后端数据库，祝您成为优秀的高级 Node.js 全栈工程师</p>
                  </el-col>
                  <el-col :span="8">
                    <h2>koala</h2>
                    <p>一个有趣的且乐于分享的人。座右铭：今天未完成的，明天更不会完成。</p>
                  </el-col>
                </el-row>
              </div>
              <ul class="flex">
                <li class="blog-item">
                  <a href="https://juejin.im/user/5cf288385188254abb110e3b" target="_blank">
                    <img src="https://img.shields.io/badge/%E6%8E%98%E9%87%91-10k-42b983.svg" alt />
                    <i class="el-icon-edit-outline"></i>
                  </a>
                </li>
                <li class="blog-item">
                  <a href="https://segmentfault.com/u/na_5a545653c24d9" target="_blank">
                    <img src="https://img.shields.io/badge/思否-2.5k-42b983.svg" alt />
                    <i class="el-icon-edit-outline"></i>
                  </a>
                </li>
                <li class="blog-item">
                  <a href="https://segmentfault.com/u/na_5a545653c24d9" target="_blank">
                    <img src="https://img.shields.io/badge/慕课-认证作者-42b983.svg" alt />
                    <i class="el-icon-edit-outline"></i>
                  </a>
                </li>
              </ul>
              <div class="koala-blog text-left">
                 <div>这里是 koala 的博客, 最近在做一个node高级进阶的学习路线</div>
              </div>
              <div class="text-left">
                 <strong>加入我们</strong>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import tabbar from "@/components/tabbar.vue";
export default {
  name: "index",
  components: { tabbar },
  data() {
    return {
      value: true,
      input4: "",
      activeName: ""
    };
  }
};
</script>
<style lang="less" scoped>
.text-left{
  text-align: left;
  font-size:16px;
}
.flex {
  display: flex;
  justify-content: flex-start;
  .blog-item {
    font-size: 14px;
    margin-right: 5px;
    img {
      margin-right: 2px;
    }
  }
}
.el-header {
  line-height: 57px;
  text-align: left;
  border-bottom: 1px solid #eaecef;
  .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #505d6b;
    position: relative;
  }
  .entry {
    color: transparent;
  }
  /deep/.el-input__inner {
    width: 200px;
    border-radius: 35px;
    height: 34px;
  }
  /deep/.el-input__inner:focus {
    border-color: #42b983;
  }
  .el-input__icon {
    font-weight: 800;
    font-size: 18px;
    line-height: 57px;
    width: 30px;
  }
}
.el-main {
  .main-left {
    margin-right: 150px;
    .main-title {
      font-size: 2.4rem;
      margin: 1.8rem auto;
      color: #505d6b;
    }
    .description {
      font-size: 1.2rem;
      max-width: 35rem;
      line-height: 1.3;
      color: #909eac;
    }
    p {
      margin: 1.8rem auto;
    }
    .start-action {
      border-bottom: 1px solid #eaecef;
      padding-bottom: 20px;
      .el-button--medium {
        font-size: 18px;
      }
      .el-button--success {
        padding: 25px 45px;
        background: #42b983;
      }
    }
    .features {
      text-align: left;
      h2 {
        font-size: 1.4rem;
        font-weight: 500;
        border-bottom: none;
        padding-bottom: 0;
        color: #5e6d7d;
      }
      p {
        color: #748597;
      }
    }
    .koala-blog{
      border-left: .2rem solid #dfe2e5 ;
      padding: .25rem 0 .25rem 1rem;
      margin: 20px 0;
      font: 1rem;
      color: #999;
    }
  }
}
</style>
