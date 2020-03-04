<template>
  <div>
    <button style="height: 50px;width: 100px" @click="parseContent()">渲染</button>
    <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
    <div id="content" v-html="msg"></div>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "editor",
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      msg:
        '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://35.201.165.105:8000/controller.php",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: process.env.BASE_URL + "UEditor/"
      }
    };
  },
  methods: {
    parseContent() {
      // eslint-disable-next-line
      uParse("#content", { rootPath: process.env.BASE_URL + "UEditor/" });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#content {
  text-align: left;
}
</style>

