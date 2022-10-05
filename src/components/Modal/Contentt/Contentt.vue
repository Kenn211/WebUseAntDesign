<template>
        <div class="content">
            <div class="post">
                <div class="post-item"  v-for="item,index in getPosts" :key="item.id">
                        <div class="post-item_img">
                            <img src="https://raw.githubusercontent.com/Tuanxu5/news/main/src/assets/News/new0.png" alt="">
                        </div>
                            <div class="post-item-content">
                                <span class="post-item-content_title">{{item.title}}</span>
                                <br/>
                                <span style="overflow-wrap: break-word;" class="post-item-content_body">{{item.body}}</span>
                                <div class="post-item-content-bottom">
                                    <div class="post-item-content_user">
                                        <img src="../../../assets/153009982_1372918013073014_5602522590634311777_n.jpg" alt="">
                                        <div class="post-item-content_user_title">
                                            <span>Mr.Vanh</span>
                                            <br/>
                                            <span>Nov 21,2001</span>
                                        </div>
                                    </div>
                                <div class="post-item-content-viewdetails">
                                    <router-link :to="{name: 'details', params: {idPosts: item.id}}"><a-button type="">{{$t("content.viewDetails")}} <arrow-right-outlined /></a-button></router-link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import {
ArrowRightOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { Posts } from '../../Interfaces/interfaces';
import { PostsRepository } from '../../Repositories/Repositories';

const getPosts = ref<Posts[]>([]);
(async () => {
    const res = await PostsRepository.getPosts()
    getPosts.value = res.data
})()

</script>

<style scoped>
.content {
    width: 80%;
    background-color: pink;
    position: relative;
    height: 100%;
    left: 20%;
    top: 150px;
    border-top-left-radius: 30px;
}

.content::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}
.post{
    display: grid;
    grid-template-columns: 45% 45%;
    row-gap: 1%;
    column-gap: 5%;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    bottom: 0;
    position: relative;
    top: -4rem;
}

@media (max-width: 768px) {
    .post{
        grid-template-columns: 100%;
        padding-left: 0;
    }
}

@media (width <= 586px) {
    .post{
        grid-template-columns: 100%;
        padding-left: 0;
    }
}


.post-item {
    width: 100%;
    height: auto;
    background-color: #fdeeee;
    border-radius: 10px;
}

.post-item:hover{
    box-shadow: 5px 5px 5px 5px #df9aa6;
}
.post-item_img img{
    width: 100%;
    height: 246px;
    border-radius: 30px;
    padding: 10px;
}
.post-item-content-bottom{
    display: flex;
    justify-content: space-between;
}
.post-item-content{
    padding: 10px;
}

.post-item-content_user {
    display: flex;
}
.post-item-content_user img {
    width: 10%;
    border-radius: 10px;
}
    
.post-item-content_user_title{
    margin-left: 1rem;
}

.post-item-content_user_title span:nth-child(1){
    font-weight: 500;
}

.post-item-content_user_title span:nth-child(3){
    font-size: 12px;
    opacity: 0.7;
}

.post-item-content_title{
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    overflow-wrap: break-word;
}

.post-item-content-bottom{
    margin-top: 2rem;;
}

@media(width <= 568px){
    .post-item-content-bottom{
        flex-direction: column;
        overflow: hidden;
    }
}
</style>