<template>
    
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" v-on:click = "goTo()">跳转</button>
    </div>
</template>

<script>
    export default{
        methods:{
            goTo:function(){
                // this.$router.go(-1);//跳转到上次浏览的页面

                // this.$router.replace('menu');//跳转到指定页面
                // this.$router.replace({name:'menuLink'});//跳转到指定页面

                // this.$router.push('admin');//push跳转
                this.$router.push({name:'menuLink'});//push跳转更常用
            }
        }
    }
</script>