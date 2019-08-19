<template>
<div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
    <table class="table">
        <thead class="thead-default">
        <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
        </tr>
        </thead>
        <tbody v-for = "item in getMenuItems" v-bind:key = "item.name">
        <tr>
            <td>
            <strong>{{ item.name }}</strong>
            </td>
        </tr>
        <tr v-for = "option in item.options" v-bind:key = "option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
            <button 
                v-on:click = "addToBasket(item,option)" 
                class="btn btn-sm btn-outline-success">+</button>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
        <div v-if = "baskets.length > 0">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <td>数量</td>
                        <td>品种</td>
                        <td>价格</td>
                    </tr>
                </thead>
                <tbody v-for ="item in baskets" v-bind:key="item.name">
                    <tr>
                        <td>
                            <button class="btn btn-sm" v-on:click = "delQuantity(item)">-</button>
                            <span>{{ item.quantity }}</span>
                            <button class="btn btn-sm" v-on:click = "addQuantity(item)">+</button>
                        </td>
                        <td>{{ item.name }}{{ item.size }}</td>
                        <td>{{ item.price * item.quantity }}</td>
                    </tr>
                </tbody>
            </table>
            <p>总价：{{total + 'RMB'}}</p>
            <button class="btn btn-success btn-block">提交</button>
        </div>
        <div v-else>
            {{ basketText }}
        </div>
    </div> <!-- 购物车结束 -->
    
    
</div>
</template>
<script>
    export default {
        
        data(){
            return{
                
                baskets:[],
                basketText:"购物车没有任何内容",
                // getMenuItems:{}
            }
        },
        computed:{
            //在vuex中获取数据
            getMenuItems(){
                // return this.$store.state.menuItems

                //通过getters 获取数据
                return this.$store.getters.getMenuItems
            },

            // 购物车总价
            total(){
                let totalCost = 0;
                for(let index in this.baskets){
                    //console.log(index);
                    let single = this.baskets[index];
                    totalCost += single.quantity * single.price;
                }
                return totalCost;
            }
        },
        created(){
            this.getData()
        },
        methods:{
            // 请求数据，将管理页面添加的信息 动态添加到菜单页面
            getData(){
                //fetch请求
                // fetch("https://pizza-app-5582d.firebaseio.com/menu.json")
                // .then(
                //     (res)=>{return res.json()}
                // )
                // .then(
                //     (data) =>{
                //         this.getMenuItems = data;
                //     }
                // )
                
                //axios请求(没有配置原型时,要每个页面都引入 import axios from 'axios')
                // axios.get("menu.json")
                //     .then(
                //         (res)=>{
                //             return this.getMenuItems = res.data
                //         }
                //     )

                //axios请求(配置了vue原型的用法)
                // this.http.get("menu.json")
                //     .then(
                //         (res)=>{
                //             return this.getMenuItems = res.data
                //         }
                //     )

                //将请求 下来的数据存储到vuex中
                this.http.get("menu.json")
                    .then(
                        (res)=>{
                            this.$store.commit("setMenuItems",res.data)
                        }
                    )
            },
            //加入购物车
            addToBasket(item,option){
                //先把购物车数组存起来
                let basket = {
                    name:item.name,
                    size:option.size,
                    price:option.price,
                    quantity:1
                };
                //如果购物车有东西就是长度大于0 的时候,就要进行筛选相同的信息,数组去重
                if(this.baskets.length > 0){
                    let result = this.baskets.filter(
                            (singleBasket)=>{
                                return (singleBasket.name === item.name && singleBasket.price === option.price)
                            }
                        )
                    //去重
                    if(result !=null && result.length >0){
                        //console.log(result);
                        result[0].quantity ++;
                    }else{
                        this.baskets.push(basket) 
                    }

                }else{//如果购物车什么都没有的话,就将pizza信息数组放进购物车
                    this.baskets.push(basket)
                }
                
            },
            //减少数量
            delQuantity(item){
                item.quantity--;
                //当数量小于1的时候调用删除该数组的方法
                if(item.quantity <1){
                    this.removeFromBaskets(item);
                }
            },
            //增加数量
            addQuantity(item){
                item.quantity++;
            },
            //当数量小于1的时候删除该数组
            removeFromBaskets(item){
                this.baskets.splice(this.baskets.indexOf(item),1);
            }
        }
    }


</script>