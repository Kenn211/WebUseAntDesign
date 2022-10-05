<template>
    <div class="comment">
        <div class="comment-title">{{$t("content.comment")}}</div>
        <div class="comment-box">
            <div class="cmt-input">
                <div class="cmt-input-user">
                    <img src="../../../assets/153009982_1372918013073014_5602522590634311777_n.jpg" alt="">
                    <div>NVApewpew@gmail.com</div>
                </div>
                <div class="cmt-input-box">
                    <a-textarea v-model:value="commentsBox" placeholder="Comment here" allow-clear />
                    <div class="cmt-input-icon">
                        <span v-for="item,index in getComments" :key="item.id">
                            <div v-show="index < 1">
                                <send-outlined @click="handleAddComments(item)" />
                            </div>
                        </span>
                        <br />
                        <span>
                            <link-outlined />
                        </span>
                        <br />
                        <span>
                            <github-outlined />
                        </span>
                    </div>
                </div>
            </div>

            <div class="list-comment" v-for="item in getComments" :key="item.id">
                <a-comment>
                    <template #actions>
                        <span key="comment-basic-like">
                            <a-tooltip title="Like">
                                <template v-if="action === 'liked'">
                                    <LikeFilled @click="like" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like" />
                                </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                                {{ likes }}
                            </span>
                        </span>
                        <span key="comment-basic-dislike">
                            <a-tooltip title="Dislike">
                                <template v-if="action === 'disliked'">
                                    <DislikeFilled @click="dislike" />
                                </template>
                                <template v-else>
                                    <DislikeOutlined @click="dislike" />
                                </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                                {{ dislikes }}
                            </span>
                        </span>
                        <span key="comment-basic-reply-to">Reply to</span>
                    </template>
                    <template #author><a>{{item.email}}</a></template>
                    <template #avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                    </template>
                    <template #content>
                        <p>
                            {{item.body}}
                        </p>
                    </template>
                    <template #datetime>
                        <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                            <span>{{ dayjs().fromNow() }}</span>
                        </a-tooltip>
                    </template>
                </a-comment>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    SendOutlined,
    LinkOutlined,
    GithubOutlined,
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined
} from "@ant-design/icons-vue";
import dayjs from 'dayjs';
import { ref } from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Comments } from "../../Interfaces/interfaces";
import { useRoute } from "vue-router";
import { CommentsRepository} from "../../Repositories/Repositories";
dayjs.extend(relativeTime);


const likes = ref<number>(0);
const dislikes = ref<number>(0);
const action = ref<string>();

const like = () => {
    likes.value = 1;
    dislikes.value = 0;
    action.value = 'liked';
};

const dislike = () => {
    likes.value = 0;
    dislikes.value = 1;
    action.value = 'disliked';
};

const {
    params: { idPosts },
} = useRoute();

//Get Comments by IdPost
let getComments = ref<Comments[]>([]);
(async () => {
    try {
        const res = await CommentsRepository.getComments(idPosts)
        getComments.value = res.data;
    } catch (error) {
        console.log(error);
    }
})();

//Get All Comments
const getAllComments = ref<Comments[]>([]);
(async () => {
    try {
        const res = await CommentsRepository.getAllComments()
        getAllComments.value = res.data;
    } catch (error) {
       console.log(error); 
    }
})();

//Handle add Comments
const commentsBox = ref<string>('');
async function handleAddComments(item: Comments) {
    try {
        const idArrComments = getAllComments.value.map(item => item.id);
        const maxIdComments = Math.max.apply(Math, idArrComments);
        const dataComment: Comments = {
            postId: item.postId,
            id: maxIdComments  + 1,
            email: 'NVApewpew@gmail.com',
            body: commentsBox.value,
            name: 'Vanh'
        }
        if (commentsBox.value == '' || commentsBox.value == null) {
            alert('Nhập vào bạn eei...')
        } else {
            commentsBox.value = "";
            getComments.value.unshift(dataComment);
            await CommentsRepository.addComments({...dataComment});
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped>
.comment-box {
    width: 100%;
    border-radius: 30px;
    background-color: #fff;
    overflow-y: scroll;
    height: 320px;
    border: 40px solid #fff;
}

.cmt-input {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.cmt-input-user {
    display: flex;
}

.cmt-input-user img {
    width: 4%;
    border-radius: 10px;
}

.cmt-input-user div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.2rem;
    font-size: 13px;
    opacity: 0.8;
}

.cmt-input-icon {
    margin-left: 5px;
    cursor: pointer;
}

.cmt-input-box {
    display: flex;
    margin-left: 2rem;
}

@media (width <= 586px){
    .cmt-input-box{
        margin-left: 0;
    }
}

.comment-title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
}

.comment-box::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
}
</style>