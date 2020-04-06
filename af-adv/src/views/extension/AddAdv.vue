<template>
    <div class="add-adv">
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <el-card>
            <!-- 场景选择 -->
            <el-row class="mb">
                <span>场景选择</span>
                <el-radio-group v-model="scene" class="scene-choice">
                    <router-link to="/extension/aofei-scene">
                        <el-radio-button label="场景化推广">
                            场景化营销
                            <div>
                                <svg-icon icon-class="info" />奥菲大数据场景营销
                            </div>
                        </el-radio-button>
                    </router-link>
                    <router-link to="/extension/member-scene">
                        <el-radio-button label="会员自通道">
                            会员自通道
                            <div>
                                <svg-icon icon-class="info" />自有会员信息发布
                            </div>
                        </el-radio-button>
                    </router-link>
                </el-radio-group>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //步骤条
            activeIndex: 0,
            //场景选择
            scene: "",
        }
    },
};
</script>
<style lang="scss" scoped>
.add-adv {
    margin: 30px;
}
</style>