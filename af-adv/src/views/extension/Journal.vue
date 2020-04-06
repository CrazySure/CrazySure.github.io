<template>
    <div class="journal">
        <el-card>
            <el-row>操作日志</el-row>
            <el-divider></el-divider>
            <!-- 日历控件 -->
            <el-date-picker
                v-model="journalDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="journalChange"
                class="mb"
            ></el-date-picker>
            <!-- table表格 -->
            <el-table
                :data="dateTableData"
                style="width: 100%"
                border
                :header-cell-style="{background:'#edf5ff',fontWeight:'bold',color:'#666'}"
            >
                <el-table-column align="center" prop="time" label="操作时间"></el-table-column>
                <el-table-column align="center" prop="name" label="操作人"></el-table-column>
                <el-table-column align="center" prop="obj_name" label="操作对象名称"></el-table-column>
                <el-table-column align="center" prop="type.name" label="操作类型"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
import { getJournalDateTableData } from "@/api/table";
export default {
    data() {
        return {
            //日历控件
            journalDate: "",
            dateTableData: []
        };
    },
    methods: {
        //获取日志表格数据
        getDateTableData() {
            getJournalDateTableData().then(res => {
                this.dateTableData = res.data.items;
                console.log(this.dateTableData);
            });
        },
        // 用户选中日期之后触发的事件
        journalChange() {
            this.getDateTableData();
        }
    },
    
};
</script>
<style lang="scss" scoped>
.journal {
    margin: 30px;
}
</style>