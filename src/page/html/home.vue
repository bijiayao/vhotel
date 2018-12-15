<template>
  <div id="home">
	<el-carousel trigger="click" height="200px">
		<el-carousel-item v-for="item in imgList" :key="item">
            <img v-bind:src="item"/>
		</el-carousel-item>
	</el-carousel>
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-blue">
          <h3>音乐</h3>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-blue">
          <h3>图片</h3>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-blue">
          <h3>相声</h3>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-blue">
          <h3>哈哈</h3>
        </div></el-col>
    </el-row>
    <div>
        <home-detail-list></home-detail-list>
    </div>
    <end></end>
  </div>
</template>

<script src="../js/home.js"></script>

<style scoped>
.el-carousel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.el-carousel__item img {
    width: 100%;    
    height: 13rem;
    opacity: 0.75;
  }
  .el-row {
    position: fixed;
    width: 100%;
    top: 13rem;
    margin-right: -.5rem;
    margin-bottom: .5rem;
    margin-left: 3px !important;
    &:last-child {
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding-left: 1px !important;
    padding-right: 1px !important;
    margin-left: .3rem;
  }
  .el-col h3{
    margin: 0;
    padding: 1rem 1rem 1rem 1.3rem;
  }
  .el-col-6 {
    width: 23%;
}
  .bg-blue {
    background: #94c6fa;
  }
  .grid-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    border-radius: 4px;
    min-height: 3.5rem;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
