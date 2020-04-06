<template>
    <div class="member-add-ori" >
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <el-card class="mb_10">
            <el-row class="budget-box scene-box">
                <div class="public-label">所属广告计划</div>
                <p class="plan-name">{{planName.value}}</p>
            </el-row>
        </el-card>
        <el-card class="ori-main">
            <el-row class="title">
                制作创意
                <span class="tips">
                    <i class="red">*</i> 所有创意大小不能超过1.9M
                </span>
            </el-row>
            <el-divider></el-divider>
            <el-form
                :model="addOriForm"
                :rules="addOriFormRules"
                ref="addOriFormRef"
                label-width="120px"
                label-position="left"
            >
                <el-form-item label="选择创意" >
                    <el-tabs v-model="choice_ori" type="card" class="budget-tabs">
                        <el-tab-pane label="新建" name="choiceOne">
                        </el-tab-pane>
                        <el-tab-pane label="创意库" name="choiceTwo">
                        </el-tab-pane>
                    </el-tabs>
                </el-form-item>
                <el-form-item label="创意名称" prop="plan_name">
                    <el-input v-model="addOriForm.plan_name"></el-input>
                </el-form-item>
                <el-form-item label="主题" prop="theme">
                    <el-input v-model="addOriForm.theme"></el-input>
                </el-form-item>
                <el-form-item label="签名" prop="autograph">
                    <el-input v-model="addOriForm.autograph"></el-input>
                </el-form-item>
                <el-form-item label="文本设置" prop="setting">
                    <el-input
                        type="textarea"
                        v-model="addOriForm.setting"
                        maxlength="300"
                        placeholder="文字描述300个字符以内"
                       
                    ></el-input>
                </el-form-item>
                <el-form-item label="短链接" prop="link">
                    <el-input
                        v-model="addOriForm.link"
                        type="text"
                        placeholder="短链接地址规范 http://www.xxx.com/abc?z=1"
                       
                    ></el-input>
                </el-form-item>
                <el-form-item label="视频素材" prop="video_url">
                    <el-upload
                        class="img-upload"
                        :show-file-list="false"
                        :action="uploadVideoUrl"
                        :before-upload="videoBeforeUpload"
                        :on-remove="videoRemove"
                        :on-success="videoUploadSuccess"
                    >
                        <video autoplay controls v-if="addOriForm.video_url" class="avatar">
                            <source :src="addOriForm.video_url" type="video/mp4" />
                        </video>
                        <template v-else>
                            <svg-icon icon-class="upload" class="upload-icon" />
                            <div class="el-upload__text">上传视频</div>
                        </template>
                        <div class="el-upload__tip my-tip" slot="tip">
                            <el-button @click="sourceBtn('video')" data-type="视频">素材库</el-button>
                        </div>
                    </el-upload>
                    <div class="upload-title">*尺寸：不得大于400k。支持MP4、OGG、FLV、WMV、RMVB格式
                        </div>
                </el-form-item>
                <el-form-item label="图片素材" prop="image_url">
                    <el-upload
                        class="img-upload"
                        :show-file-list="false"
                        :action="uploadImgUrl"
                        :on-remove="imgRemove"
                        :on-success="imgUploadSuccess"
                    >
                        <img v-if="addOriForm.image_url" :src="addOriForm.image_url" class="avatar">
                        <template v-else>
                            <svg-icon icon-class="upload" class="upload-icon" />
                            <div class="el-upload__text">上传图片</div>
                        </template>
                        <div class="el-upload__tip my-tip" slot="tip">
                            <el-button @click="sourceBtn('img')" data-type="图片">素材库</el-button>
                        </div>
                    </el-upload>
                    <div class="upload-title">*尺寸：宽高比1920×1080、800×1000不得大于400k。支持JPG、PNG、GIF格式
                        </div>
                </el-form-item>
                <el-form-item label="发送号码" prop="number">
                        <el-button icon="el-icon-folder-opened">导入文档</el-button>
                        <el-button icon="el-icon-folder-opened" @click="showBatchDialog">批量输入</el-button>
                        <el-input type="number" v-model="addOriForm.number" clearable placeholder="请输入手机号码" class="phone-input">
                        </el-input><el-button type="primary" plain @click="goAddPhone">添加</el-button>
                </el-form-item>
                <el-form-item prop="text">
                    <el-input
                            type="textarea"
                            v-model="addOriForm.text"
                            maxlength="300"
                            :rows="5"
                            placeholder="请您选择富信内容，再输入或上传手机号码"
                        ></el-input>
                </el-form-item>

                <el-form-item label="发送时间">
                    <el-row class="budget-box time-box">
                        <el-tabs v-model="timeActiveName" type="card" class="budget-tabs">
                            <el-tab-pane label="立即发送" name="timeOne"></el-tab-pane>
                            <el-tab-pane label="定时发送" name="timeTwo">
                                <el-date-picker
                                    v-model="addOriForm.send_time"
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
                    <el-button @click="goReturn">返回</el-button>
                    
                </el-form-item>
            </el-form>
            <div class="ori-box">
                <el-row class="public-label">创意预览</el-row>
                <el-tabs v-model="phoneActiveName" type="card" class="budget-tabs">
                    <el-tab-pane label="Ios" name="applePhone">
                        <div class="public-box">
                            <div class="apple move-area" v-el-drag-dialog v-el-drag-dialog-video v-el-drag-dialog-text>
                                <div class="drag-move"  >
                                    <div class="dec preview">
                                        <span class="drag-text"></span>
                                        <p>{{addOriForm.plan_name}}</p>
                                        {{addOriForm.setting}}
                                        <el-link type="primary" :underline="false">{{addOriForm.link}}</el-link>
                                        
                                    </div>
                                </div>
                                <div >
                                <div class="drag-move" >
                                    <div  class="preview-img preview">
                                        <span class="drag-img"></span>
                                        <img  :src="addOriForm.image_url" alt  v-if="addOriForm.image_url"/>
                                    </div>
                                </div>
                                </div>
                                <div class="drag-move" >
                                    <div class="preview-viedo preview">
                                        <span class="drag-video"></span>
                                        <video autoplay controls v-if="addOriForm.video_url">
                                            <source :src="addOriForm.video_url" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <p class="text">拖 动 素 材 改 变 位 置</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Android" name="androidPhone">
                        <div class="public-box">
                            <div class="android move-area" v-el-drag-dialog v-el-drag-dialog-video v-el-drag-dialog-text>
                                <div class="drag-move"  >
                                    <div class="dec preview">
                                        <span class="drag-text"></span>
                                        <p>{{addOriForm.plan_name}}</p>
                                        {{addOriForm.setting}}
                                        <el-link type="primary" :underline="false">{{addOriForm.link}}</el-link>
                                        
                                    </div>
                                </div>
                                <div >
                                <div class="drag-move" >
                                    <div  class="preview-img preview">
                                        <span class="drag-img"></span>
                                        <img  :src="addOriForm.image_url" alt  v-if="addOriForm.image_url"/>
                                    </div>
                                </div>
                                </div>
                                <div class="drag-move" >
                                    <div class="preview-viedo preview">
                                        <span class="drag-video"></span>
                                        <video autoplay controls v-if="addOriForm.video_url">
                                            <source :src="addOriForm.video_url" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <p class="text">拖 动 素 材 改 变 位 置</p>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>

        <!-- 创意库弹出框 -->
        <el-dialog title="我的创意" :visible.sync="oriDialogVisible" width="50%" @close="oriDialogClosed">
            <div class="ori-content">
                <div v-for="item in oriImg" :key="item.id" class="ori-box">
                    <el-card class="inner-box">
                        <img :src="item.image_url" :alt="item.name" />
                        <video autoplay controls>
                            <source :src="item.video_url" type="video/mp4" />
                        </video>
                        <p class="describe">{{ item.setting }}</p>
                        <el-link type="primary" :underline="false">{{item.link}}</el-link>
                        <el-divider class="line"></el-divider>
                        <p class="ori-title">{{ item.plan_name }}</p>
                        <p class="id">ID:{{ item.id }}</p>
                        <el-divider class="line"></el-divider>
                        <div class="btn-box">
                            <el-button type="primary" size="mini" @click="goToEdit(item)">立即编辑</el-button>
                        </div>
                    </el-card>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="oriDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="oriDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 素材库图片弹出框 -->
        <el-dialog :visible.sync="sourceDialogVisible" width="50%" @close="sourceDialog">
            <el-tabs v-model="sourcDialogName" class="source-dialog">
                <el-tab-pane :label="'我的'+ titleText" name="mySourceImg">
                    <div class="source-content">
                        <!-- 上传图片 -->
                        <template v-if="titleText == '图片'">
                            <div v-for="item in sourceImg" :key="item.id" class="source-box">
                                <div class="inner-box">
                                    <el-dropdown
                                        trigger="click"
                                        v-if="imgChoose == item.id"
                                        class="img-menu"
                                        @command="handleCommand"
                                    >
                                        <span class="el-dropdown-link">
                                            <svg-icon icon-class="menu" class="icon-menu" />
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item command="重命名" :data-id="item.id">重命名</el-dropdown-item>
                                            <el-dropdown-item
                                                command="删除"
                                                :data-id="item.id"
                                                ref="dataNum"
                                            >删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-radio-group v-model="imgChoose">
                                        <el-radio border :label="item.id">
                                            <img
                                                :src="item.url"
                                                :alt="item.name"
                                                @click="choiceImg(item.id)"
                                            />
                                        </el-radio>
                                    </el-radio-group>
                                </div>
                                <!-- 图片名称 -->
                                <p class="img-name" v-if="!item.imgname_edit">{{item.name}}</p>
                                <!-- 编辑图片名称 -->
                                <el-input
                                    v-else
                                    v-focus
                                    v-model="item.name"
                                    size="mini"
                                    class="edit-img-name"
                                    @keyup.enter.native="inputBlur(item.id)"
                                    @blur="inputBlur(item.id)"
                                ></el-input>
                            </div>
                        </template>
                        <!-- 上传视频 -->
                        <template v-else>
                            <div v-for="item in sourceVideo" :key="item.id" class="source-box">
                                <div class="inner-box">
                                    <el-dropdown
                                        trigger="click"
                                        v-if="imgChoose == item.id"
                                        class="img-menu"
                                        @command="handleCommand"
                                    >
                                        <span class="el-dropdown-link">
                                            <svg-icon icon-class="menu" class="icon-menu" />
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item command="重命名" :data-id="item.id">重命名</el-dropdown-item>
                                            <el-dropdown-item
                                                command="删除"
                                                :data-id="item.id"
                                                ref="dataNum"
                                            >删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-radio-group v-model="imgChoose">
                                        <el-radio border :label="item.id">
                                            <video autoplay>
                                                <source
                                                    :src="item.url"
                                                    type="video/mp4"
                                                    @click="choiceImg(item.id)"
                                                />
                                            </video>
                                        </el-radio>
                                    </el-radio-group>
                                </div>
                                <!-- 视频名称 -->
                                <p class="img-name" v-if="!item.imgname_edit">{{item.name}}</p>
                                <!-- 编辑视频名称 -->
                                <el-input
                                    v-else
                                    v-focus
                                    v-model="item.name"
                                    size="mini"
                                    class="edit-img-name"
                                    @keyup.enter.native="inputBlur(item.id)"
                                    @blur="inputBlur(item.id)"
                                ></el-input>
                            </div>
                        </template>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button @click="sourceDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUrl">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 批量导入弹框 -->
        <el-dialog
            title="批量号码输入"
            :visible.sync="batchDialogVisible"
            width="50%"
            @close="batchDialogColsed"
            >
            <el-input
                type="textarea"
                :rows="10"
                placeholder="多个手机号码以逗号格式隔开"
                v-model="batchTextarea"
                @blur="checkText"
                @keyup.native="batchTextarea=batchTextarea.replace(/[^\r\n0-9,]/g,'')"
                >
            </el-input>
            <p class="gray">当前共 2000个号码</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="batchDialogVisible = false">返 回</el-button>
                <el-button type="primary" @click="batchDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import elDragDialogVideo from '@/directive/el-drag-dialog-video' // base on element-ui
import elDragDialogText from '@/directive/el-drag-dialog-text' // base on element-ui
export default {
    directives: { elDragDialog ,elDragDialogVideo,elDragDialogText},
    created(){
        this.planName = JSON.parse(this.$route.query.item)
    },
    data() {
        // 自定义校验短链接
        var checkUrl  = (rule, value, callback) => {
            const regUrl = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/;
            if (regUrl.test(value)) {
                // 合法的短链接
                return callback();
            }
            // 不合法
            return callback(new Error('请输入合法的短链接'))
        };
        return {
            // 所属广告计划名称
            planName:'',
            // 步骤条
            activeIndex: 2,
            // 选择创意
            choice_ori: "choiceOne",
            // 发送时间
            timeActiveName:'timeOne',
            // 添加创意表单
            addOriForm: {
                plan_name: "",
                theme:"",
                autograph:"",
                setting: "",
                link: "",
                image_url:"",
                video_url:"",
                number:"",
                text:"",
                send_time:"",
                phoneText:""
            },
            addOriFormRules: {
                plan_name: [
                    {
                        required: true,
                        message: "请输入创意名称",
                        trigger: "blur"
                    }
                ],
                theme: [
                    {
                        required: true,
                        message: "请输入主题",
                        trigger: "blur"
                    }
                ],
                autograph: [
                    {
                        required: true,
                        message: "请输入签名",
                        trigger: "blur"
                    }
                ],
                setting: [
                    {
                        required: true,
                        message: "请输入文本设置",
                        trigger: "blur"
                    }
                ],
                link: [
                    {
                        required: true,
                        message: "短链接地址规范 http://www.xxx.com/abc?z=1",
                        trigger: "blur"
                    },
                    { validator: checkUrl, trigger: 'blur' }
                    
                ],
                image_url: [
                    {
                        required: true,
                        message: "请选择图片素材",
                        trigger: "change"
                    }
                ],
                video_url: [
                    {
                        required: true,
                        message: "请选择视频素材",
                        trigger: "change"
                    }
                ],
            },
            // 创意预览区域
            phoneActiveName: "applePhone",
            // 图片素材库，视频素材库 弹框-公共title
            titleText: "",
            // 视频上传的服务器地址
            uploadVideoUrl: "/upload/video",

            // 图片上传的服务器地址
            uploadImgUrl: "https://jsonplaceholder.typicode.com/posts/",
            //创意库弹出框
            oriDialogVisible: false,
            /********************************素材库弹框*****************/
            //素材库弹出框
            sourceDialogVisible: false,
            //素材库弹出框-我的图片
            sourcDialogName: "mySourceImg",
            // 图片单选
            imgChoose: 0,
            // 图片的数据
            sourceImg: [
                {
                    id: 0,
                    name: "img1.jpg",
                    imgname_edit: false,
                    url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg"
                },
                {
                    id: 1,
                    name: "img2.jpg",
                    imgname_edit: false,
                    url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg"
                },
                {
                    id: 2,
                    name: "img3.jpg",
                    imgname_edit: false,
                    url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg"
                }
            ],
            // 视频的数据
            sourceVideo: [
                {
                    id: 0,
                    imgname_edit: false,
                    name: "0.mp4",
                    url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                },
                {
                    id: 1,
                    imgname_edit: false,
                    name: "0.mp4",
                    url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                },
                {
                    id: 2,
                    imgname_edit: false,
                    name: "0.mp4",
                    url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                }
            ],
            /********************************创意库弹框*****************/
            oriImg: [
                {
                    id: 0,
                    image_url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg",
                    video_url:
                        "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                    setting:
                        "这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述",
                    plan_name: "海底捞",
                    link: "http://www.baidu.com",
                    exposure_link: "",
                    click_link: "",

                },
                {
                    id: 1,
                    image_url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg",
                    video_url:
                        "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                    setting: "这是描述",
                    plan_name: "海底捞",
                    link: "http://www.baidu.com",
                    exposure_link: "",
                    click_link: "",
                },
                {
                    id: 2,
                    image_url:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg",
                    video_url:
                        "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                    setting: "这是描述",
                    plan_name: "海底捞",
                    link: "http://www.baidu.com",
                    exposure_link: "",
                    click_link: "",
                }
            ],
            /*******************批量输入弹框******************/
            batchDialogVisible:false,
            batchTextarea:''

        };
    },
    methods: {
        //创意库的立即编辑按钮
        goToEdit(item){
            this.oriDialogVisible = false;
            this.addOriForm = item
        },
        // 监听创意弹框关闭事件
        oriDialogClosed(){
            this.choice_ori = 'choiceOne'
        },
        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },
        //素材库按钮点击事件
        sourceBtn(title) {
            this.sourceDialogVisible = true;
            if (title == "img") {
                this.titleText = "图片";
            } else {
                this.titleText = "视频";
            }
            console.log(this.titleText);
        },
        //视频上传前的配置
        videoBeforeUpload(file) {
            console.log(file);
            const videoSize = file.size / 1024 / 1024 < 100;
            if (
                [
                    "video/mp4",
                    "video/ogg",
                    "video/flv",
                    "video/avi",
                    "video/wmv",
                    "video/rmvb"
                ].indexOf(file.type) == -1
            ) {
                this.$message.error("请上传正确的视频格式");
                return false;
            }
            if (!videoSize) {
                this.$message.error("上传视频大小不能超过100MB哦!");
                return false;
            }
        },
        //视频移除的事件
        videoRemove(file) {},
        // 图片上传成功之后调用的函数
        videoUploadSuccess(response, file) {
             this.addOriForm.video_url = URL.createObjectURL(file.raw);
        },
        //图片移除的事件
        imgRemove(file) {},
        // 图片上传成功之后调用的函数
        imgUploadSuccess(response, file) {
            this.addOriForm.image_url = URL.createObjectURL(file.raw);
        },
        //***************创意库********************//

        /**********************素材库的我的图片**********************/
        // 监听素材库弹框的关闭事件
        sourceDialog() {
            this.sourcDialogName = "mySourceImg";
        },
        // 点选图片选择
        choiceImg(id) {
            const i = this.sourceImg.find(item => {
                return item.id === id;
            });
        },
        // 图片右上角的菜单点击事件
        handleCommand(name) {
            if (name == "重命名") {
                this.$refs.dataNum.forEach(item => {
                    const id = item.$attrs["data-id"];
                    if (this.titleText == "图片") {
                        let i = this.sourceImg.find(item => {
                            return item.id === id;
                        });
                        i.imgname_edit = true;
                    } else {
                        let i = this.sourceVideo.find(item => {
                            return item.id === id;
                        });
                        i.imgname_edit = true;
                    }
                });
            } else if (name == "删除") {
                this.$refs.dataNum.forEach(item => {
                    const id = item.$attrs["data-id"];
                    this.$confirm("确定要删除素材吗", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    })
                        .then(() => {
                            //发起数据请求

                            if (this.titleText == "图片") {
                                this.sourceImg.splice(id, 1);
                            } else {
                                this.sourceVideo.splice(id, 1);
                            }

                            this.$message.success("删除成功");
                        })
                        .catch(() => {
                            this.$message.error("已经取消删除");
                        });
                });
            }
        },
        // 修改图片名称失去焦点时-事件
        inputBlur(id) {
            if (this.titleText == "图片") {
                let i = this.sourceImg.find(item => {
                    return item.id === id;
                });
                i.imgname_edit = false;
                // 发起数据请求
            } else {
                let i = this.sourceVideo.find(item => {
                    return item.id === id;
                });
                i.imgname_edit = false;
                // 发起数据请求
            }

            this.$message.success("修改名称成功");
        },
        //点击素材库弹框的确定按钮提交事件
        submitUrl(){
            if (this.titleText == "图片") {
                this.addOriForm.image_url = this.sourceImg[this.imgChoose].url
                // 发起数据请求
            } else {
                this.addOriForm.video_url = this.sourceVideo[this.imgChoose].url
                // 发起数据请求
            }
            this.sourceDialogVisible = false
        },

        /*******************批量输入弹框******************/
        showBatchDialog(){
            this.batchDialogVisible = true
        },
        //当输入框失去焦点时检验用户输入的格式
        checkText(){
            const textreg= /^1[3578][0-9]{9}(,1[3578][0-9]{9})*$/.test(this.batchTextarea)
            if(!textreg) {
                this.$message.error('您输入的手机号码格式不对')
            }

        },
        // 监听批量输入弹框的关闭事件
        batchDialogColsed(){
            this.batchTextarea = ''    
        },
        // 点击添加按钮跳转到添加号码页面
        goAddPhone(){
            this.$router.push('/extension/add-phone')
        }
    },
    watch:{
        choice_ori(name){
            if(name == 'choiceTwo'){
                this.oriDialogVisible = true;
                console.log(name)
            }
                
        }
    }
};
</script>
<style lang="scss" scoped>
.member-add-ori {
    margin: 30px;
    .plan-name{
        line-height: 40px;
        font-size: 14px;
        color: #606266;
        font-weight:bold;
    }
    .el-input{
        width:400px;
    }
    .phone-input{
        width:177px;
        margin-left:100px;
        position:relative;
        left:1px;
    }
    .el-textarea{
        width:400px;
        margin-top:10px;
    }
    .img-upload{
        width:400px;
    }
    .avatar {
        width: 358px;
        height: 90px;
        display: block;
    }
    .ori-main {
        position: relative;
        .ori-box {
            position: absolute;
            left: 50%;
            top: 10%;
            .public-label {
                text-align: center;
            }
            .public-box {
                display: flex;
                .move-area{
                    .dec {
                        font-family: sans-serif;
                        font-size: 14px;
                        position:relative;
                    }
                    .preview{
                        position:relative;
                        top:0;
                        left:0;
                        .drag-img,.drag-text,.drag-video{
                            width:208px;
                            height:100%;
                            position:absolute;
                            top:0;
                            left:0;
                            
                        }
                        .drag-img{
                            height:20px;
                        }
                        .drag-video{
                            height:20px;
                            z-index:2;
                        }
                        
                        
                    }
                    img {
                        width: 100%;
                        
                    }
                    video {
                        width: 100%;
                        position:relative;
                    }
                }
                .apple {
                    width: 250px;
                    height: 600px;
                    padding: 85px 20px 20px;
                    box-sizing: border-box;
                    border: 1px solid red;
                    
                }
                .text {
                    margin-left: 20px;
                    text-align: center;
                    writing-mode: vertical-lr;
                }
            }

            .android {
                width: 250px;
                height: 500px;
                padding: 85px 10px 20px;
                box-sizing: border-box;
                border: 1px solid blue;
            }
        }
    }
    .source-dialog {
        position: relative;
        top: -45px;
        .el-tab-pane {
            display: flex;
        }
        .img-upload{
            width:100%;
        }
    }
    .source-content {
        width: 100%;
        max-height: 360px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        .source-box {
            position: relative;
            margin: 0 10px 10px 0;
            .edit-img-name{
                width:220px;
            }
            .inner-box {
                width: 220px;
                height: 150px;
                position: relative;
                overflow: hidden;
                .el-radio-group {
                    position: absolute;
                    width: 100%;
                    height: 100%;

                    .el-radio {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        z-index: 3;

                        img {
                            width: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        video {
                            width: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                            z-index: 2;
                        }
                    }
                }

                .img-menu {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    z-index: 4;
                    .icon-menu {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            > .img-name {
                text-align: center;
                height: 28px;
                line-height: 28px;
                font-size: 13px;
            }
        }
    }
    /*创意弹框*/
    .ori-content {
        width: 100%;
        max-height: 950px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        .ori-box {
            margin: 0 10px 10px 0;
            .inner-box {
                width: 220px;
                height: 470px;
                position: relative;
                overflow: hidden;
                .line {
                    margin: 10px 0;
                }
                img {
                    width: 100%;
                }
                video {
                    width: 100%;
                }
                .describe {
                    max-height: 90px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    overflow: hidden;
                    line-height: 18px;
                }
                .ori-title {
                    margin-bottom: 5px;
                }
                .btn-box {
                    text-align: center;
                }
            }
        }
    }
}
</style>

<style lang="scss">
.member-add-ori {
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
    .ori-box{
        .budget-tabs{
            .el-tabs__header{
                margin-bottom:20px;
            }
        }
         
    }
    .edit-img-name{
        text-align: center;
        .el-input__inner{
            width:auto;
            text-align: center;
        }
    }
}

</style>