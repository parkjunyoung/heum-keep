<template>
  <div>

    <Sidebar />  

    <el-col :span="18" class="contents">

      <Select/>

      <router-view></router-view>

    </el-col>

  </div>
</template>

<script>
import { 
  Row,
  Col
} from 'element-ui';
import Sidebar from "./components/Sidebar";
import Select from './components/Select';
export default {
  name: "App",
  components: {
    Sidebar,
    "el-col" : Col,
    Select
  }
};
</script>

<style>
.contents { padding: 10px 20px }
</style>
