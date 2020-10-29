<template>
  <div id="home">
    <el-container>
      <el-header><book-header></book-header></el-header>
      <el-container>
        <el-aside width="200px"><book-aside></book-aside></el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BookHeader from '../components/BookHeader'
import BookAside from '../components/BookeAside'
export default {
  name: "home",
  components: {BookHeader,BookAside},
};
</script>

<style>
</style>