<template>
    <div class="add-phone" >       
        <el-card>
            <div class="main">
            <el-form
                :model="addPhoneForm"
                :rules="addPhoneFormRules"
                ref="addPhoneFormRef"
                label-width="120px"
                label-position="left"
            >
                <el-form-item label="富信内容">
                    <el-button type="primary" plain>点击选择创意</el-button>
                </el-form-item>
                <el-form-item label="富信内容" prop="content">
                    <el-input v-model="addPhoneForm.content" placeholder="请输入富信内容"></el-input>
                </el-form-item>
                <el-form-item label="发送号码" prop="number">
                        <el-button icon="el-icon-folder-opened">导入文档</el-button>
                        <el-button icon="el-icon-folder-opened">批量输入</el-button>
                        <el-input type="number" v-model="addPhoneForm.number" clearable placeholder="请输入手机号码" class="phone-input">
                        </el-input><el-button type="primary" plain >添加</el-button>
                        
                </el-form-item>
                <el-form-item prop="text">
                    <el-input
                            type="textarea"
                            v-model="addPhoneForm.text"
                            maxlength="300"
                            :rows="5"
                            placeholder="请您选择富信内容，再输入或上传手机号码"
                            class="my-textarea"
                        ></el-input>
                </el-form-item>
                <el-form-item label="发送时间">
                    <el-row class="budget-box time-box">
                        <el-tabs v-model="timeActiveName" type="card" class="budget-tabs">
                            <el-tab-pane label="立即发送" name="timeOne"></el-tab-pane>
                            <el-tab-pane label="定时发送" name="timeTwo">
                                <el-date-picker
                                    v-model="addPhoneForm.send_time"
                                    type="datetime"
                                    range-separator="至"
                                    placeholder="选择日期时间"
                                ></el-date-picker>
                            </el-tab-pane>
                        </el-tabs>
                    </el-row>
                    <p class="gray">*已审核创意可以立即发送，新建未审核创意审核通过后，才能发送。请注意审核状态</p>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                    <el-button @click="goReturn">重置</el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-card>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 发送时间
            timeActiveName:'timeOne',
            // 添加创意表单
            addPhoneForm: {
                content:"",
                number:"",
                text:"",
                send_time:"",
            },
            addPhoneFormRules: {
                content: [
                    {
                        required: true,
                        message: "请输入富信内容",
                        trigger: "blur"
                    }
                ],
                
            },
        };
    },
    methods: {
        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },   
    },
};
</script>
<style lang="scss" scoped>
.add-phone {
    margin: 30px;
    .el-input{
        width:600px;
    }
    .main{
        width:60%;
    }
    .phone-input{
        width:177px;
        margin-left:100px;
        position:relative;
        left:1px;
    }
    .my-textarea{
        width:600px;
        margin-top:10px;
    }
    
}
</style>

<style lang="scss">
.add-phone {
    .time-box .el-tabs__content{
        left:200px;
        top:-40px;
    }
    .budget-tabs{
        height:40px;
    }
    .budget-tabs .el-tabs__header{
        margin:0;
    }
}

</style>