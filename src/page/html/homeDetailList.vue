<template>
   <div id="homeDetailList">
       <div class="list">
            <div class="list-body" v-for="(item,index) in detailList">
                <img :src="item.url">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option  v-for="(elem,id) in item.selectList" :label="elem.name" :value="elem.name"></el-option>
                </el-select>
            </div>
       </div>
   </div> 
</template>

<script src="../js/homeDetailList.js"></script>

<style scoped>
.list {
    width: 100%;
    position: relative;
    top: 17.5rem;
    overflow-y:auto; 
    overflow-x:hidden; 
    width:100%; 
    height:21rem;
}
.list img {
    width: 100%;
    height: 12rem;
}
.list-body {
    width: 90%;
    height: 14rem;
    border: .1rem solid #f9f2f2;
    margin-left: 1.1rem;
    margin-bottom: 1rem; 
    position: relative;
}
.el-select {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-input__inner {
      border-radius: 0 !important;
      border: .1rem solid #f9f2f2 !important;
  }
</style>