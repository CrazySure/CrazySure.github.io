<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
        <div class="card">
            <div class="card-body">
            <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
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
                <div class="form-group">
                <label for="confirm-password">确认密码</label>
                <input 
                    type="password"
                    class="form-control"
                    v-model="confirmPassword"
                    >
                </div>
                <button type="submit" class="btn btn-block btn-success">注册</button>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// 引入axios
import axios from 'axios'
export default{
    data(){
        return{
            email:'',
            password:'',
            confirmPassword:''
        }
    },
    methods:{
        onSubmit(){
            if(this.password == this.confirmPassword){
                const formData = {
                    email:this.email,
                    password:this.password,
                    confirmPassword:this.confirmPassword
                };
                axios.post('/users.json',formData)
                    .then(
                        response =>{
                            this.$router.push({name:'loginLink'})
                        }
                    )
            } else{
                alert('两次密码输入不一致，请重新输入');
            }  
        }
    }
}
</script>
      