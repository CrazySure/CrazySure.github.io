<template>
    <div class="choose-ori">
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <!-- 新建广告组-选择现有的广告组 -->
        <el-card>
            <el-row class="mb">
                <el-autocomplete
                    v-model="state"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入广告计划名称或id搜索"
                    @select="handleSelect"
                    :disabled="stateDisabled"
                    clearable
                ></el-autocomplete>
            </el-row>
            <el-row>
                <dl v-if="planName.length > 0 " class="plan-list">
                    <dt>广告组列表</dt>
                    <dd>
                        <a
                            href="javascript:;"
                            v-for="(item,index) in planName"
                            :key="index"
                            type="primary"
                            @click="goAddOri(item)"
                        >{{item.value}}</a>
                    </dd>
                </dl>
                <span v-else>还没有广告广告计划，请新建广告计划!</span>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //步骤条
            activeIndex: 2,
            /*****************选择广告计划列表*********************/
            planName: [],
            state: "",
            timeout: null,
            stateDisabled: false
        };
    },
    created() {
        this.planName = this.loadAll();
        if (this.planName.length <= 0) {
            this.stateDisabled = true;
        }
    },
    methods: {
        /*远程搜索开始*****************************/
        loadAll() {
            return [
                {
                    value: "奔驰1",
                    id: "45445"
                },
                {
                    value: "奔驰2",
                    id: "4544556"
                },
                {
                    value: "奔驰3",
                    id: "454245"
                },
                {
                    value: "奔驰5",
                    id: "4544535556"
                },
                {
                    value: "奔驰6",
                    id: "4542425"
                },
                {
                    value: "奔驰7",
                    id: "4544555563"
                },
                
                
            ];
        },
        querySearchAsync(queryString, cb) {
            var planName = this.planName;
            var results = queryString
                ? planName.filter(this.createStateFilter(queryString))
                : planName;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return state => {
                return (
                    state.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        handleSelect(item) {
            console.log(item);
            this.$router.push({
                name:'AddOri',
                query:{
                    item:JSON.stringify(item)
                }
            })
        } /*远程搜索结束*/,
        goAddOri(item){
            this.$router.push({
                name:'AddOri',
                query:{
                    item:JSON.stringify(item)
                }
            })
        },

        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },
     
    }
};
</script>
<style lang="scss" scoped>
.choose-ori {
    margin: 30px;


    .plan-list {
        dt {
            margin-bottom: 10px;
        }
        dd {
            border: 1px solid #ddd;
            padding: 10px;
            max-height: 300px;
            overflow-y: auto;

            a {
                margin-bottom: 10px;
                display: block;
                &:hover {
                    color: #2a8df8;
                }
            }
        }
    }
}
</style>