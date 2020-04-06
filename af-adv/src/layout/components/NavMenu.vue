<template>
  <div class="navmenu">
    <ul>
      <li v-for="(item,index) in menuList" :key="index" >
        <router-link :to="item.link">{{item.title}} <span></span> </router-link>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeClass: 0,
      menuList: [
        {
          title: "首页",
          link: "/home"
        },
        {
          title: "推广",
          link: "/extension"
        },
        {
          title: "报表",
          link: "/report"
        },
        {
          title: "财务",
          link: "/finance"
        },
        {
          title: "素材库",
          link: "/images"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.navmenu {
  width: 60%;
  > ul {
    height: 90px;
    line-height: 90px;
    li {
      float: left;
      width:6%;
      margin: 0 3%;
      
      .active{
        position: relative;
        span{
          display: block;
          width:80%;
          height:1px;
          background:#000;
          position: absolute;
          bottom:-10px;
          left:50%;
          transform: translate(-50%)
        }
      }
      
    }
  }
//  .router-link-active{
//         display: block;
//         width:100%;
//         text-align:center;
//         position:relative;
//       } 
}
</style>