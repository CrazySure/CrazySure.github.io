<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
        <div class="card">
            <div class="card-body">
            <img class="mx-auto d-block" src="../../src/assets/icon.png" alt>
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                <label for="email">邮箱</label>
                <input
                    type="email" 
                    class="form-control" 
                    v-model="email"
                 >
                </div>
                <div class="form-group">
                <label for="password">密码</label>
                <input 
                    type="password" 
                    class="form-control" 
                    v-model="password"
                >
                </div>
                <button type="submit" class="btn btn-block btn-success">登录</button>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>
      
<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            password:'',
            
        }
    },
    // 组件内守卫
    beforeRouteEnter:(to,from,next) =>{
        next(vm => vm.$store.dispatch("setUser",null))
    },
    methods:{
        onSubmit(){
            axios.get('/users.json')
                .then(
                    response =>{
                        //console.log(response)//
                        const data = response.data;
                        const users =[];
                        //console.log(data);//两条数据
                        for(let key in data){//循环数组
                            const user = data[key]
                            //console.log(user)
                            users.push(user)//把数组放到users里面去
                        }
                        //console.log(users)//数组里面的n个对象

                        //过滤数组里面和用户匹配的密码
                        let result = users.filter(
                            (user)=>{
                                //数据库里面的用户邮箱和密码 和 用户登录输入的邮箱密码完全匹配
                                return user.email ===this.email && user.password === this.password
                            }
                        );

                        //判断result 的长度是否不为空 或者长度大于0,长度小于0说明是空对象 邮箱和密码不匹配
                        if(result != null && result.length > 0){
                            this.$store.dispatch("setUser",result[0].email);
                            this.$router.push({name:'homeLink'});
                        }else{
                            alert('邮箱或密码不正确，请重新输入');
                            this.$store.dispatch("setUser",null)
                        }
                    }
                )
        }
    }
}
</script>
      