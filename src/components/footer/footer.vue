<template>
  <div id="end">
    <div class="footer">
        <ul>
            <li @click="toHome()"><i class="iconfont">&#xe62e;</i></li>
            <li @click="toMusic()"><i class="iconfont">&#xe624;</i></li>
            <li @click="toHome()"><i class="iconfont">&#xe625;</i></li>
        </ul>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
  }
  .footer ul {
    padding: 0;
  }
  .footer li {
    list-style-type: none;
    float: left;
    background-color: #fff;
    line-height: 3rem;
    height: 3rem;
    width: 33.3%;
    text-align: center;
    border: .001rem solid #ddd;
  }
  .footer li:hover {
    background-color: #e8e5e5;
  }
  .iconfont {
      font-size: 2rem;
      color: #7b7a7a;
  }
</style>
