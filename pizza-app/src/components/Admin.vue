<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new-pizza -->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table table-default">
                <thead>
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for ="item in getMenuItems" v-bind:key = "item.name">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>
                            <button v-on:click = "deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>
<script>
    import NewPizza from './NewPizza.vue'
    export default{
        data(){
            return{
                // getMenuItems:[]
            }
        },
        computed:{
            //在vuex中获取数据
            getMenuItems:{
                get(){
                    // return this.$store.state.menuItems

                    //通过getters 获取数据
                    return this.$store.getters.getMenuItems
                },
                set(){

                }
                
            },
        },
        components:{
            'app-new-pizza':NewPizza
        },
        created(){
            //fetch请求
            // fetch("https://pizza-app-5582d.firebaseio.com/menu.json")
            //     .then(
            //         (res)=>{return res.json()}
            //     )
            //     .then(
            //         (data) =>{
            //             let menuArry = [];
            //             for(let key in data){
            //                 data[key].id = key;//给数组定义一个id值，即唯一的标识
            //                 menuArry.push(data[key]);//把每一组放进数组里面去
            //             }
            //             this.getMenuItems = menuArry;
            //         }
            //     )

            //axios请求
            this.http.get("menu.json")
                    .then(
                        (res)=>{
                            return res.data
                        }
                    )
                    .then(
                        (data)=>{
                            let menuArry =[];
                            for(let key in data){
                                data[key].id = key;
                                menuArry.push(data[key]);
                            }
                            // this.getMenuItems = menuArry;
                            //数据同步
                            this.$store.commit("setMenuItems",menuArry)   
                        }
                    )
        },
        methods:{
            deleteData(item){
                //fetch请求方法
                // fetch("https://pizza-app-5582d.firebaseio.com/menu/" + item.id +"/.json",{
                //     methods:"DELETE",
                //     headers:{
                //         'Content-type' :'application/json'
                //     }
                // })
                // .then(
                //     (res) => res.json()
                // )
                // .then(
                //     (data)=> this.$router.push({name:'menuLink'})
                // )
                // .catch(
                //     (err) => console.log(err)
                // )

                //axios请求方法
                this.http.delete("menu/" +item.id + "/.json")
                        .then(
                            () =>{
                                this.$store.commit("removeMenuItems",item)
                            }
                        )
            }
        }

























        // data(){
        //     return{
        //         name:'herry'
        //     }
        // }
        //组件内守卫
        // beforeRouteEnter:(to,from,next)=>{
        //         next(
        //             //回调函数
        //             nm=>{
        //                 alert('hello' + nm.name)
        //             }
        //         );
        // },
        // beforeRouteLeave:(to,from,next)=>{
        //     if(confirm('确定离开吗') ==true){
        //         next();
        //     }else{
        //         next(false);
        //     }
        // }
        
    }
</script>