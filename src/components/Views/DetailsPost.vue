<template>
    <div class="details">
        <div class="details-post">
            <div class="details-post-item">
                <div class="details-post-item_img">
                    <!-- <img src="https://raw.githubusercontent.com/Tuanxu5/news/main/src/assets/News/new0.png" /> -->
                    <a-image style="height: 250px; width: 100%;"
                        src="https://raw.githubusercontent.com/Tuanxu5/news/main/src/assets/News/new0.png" />
                </div>

                <div class="details-post-item_content">
                    <div class="details-post-item_content_user">
                        <img src="../../assets/153009982_1372918013073014_5602522590634311777_n.jpg" alt="">
                        <div class="details-post-item_content_user_title">
                            <span>Mr. Vanh</span>
                            <br />
                            <span>
                                <hourglass-outlined />Nov 21,2001
                            </span>
                        </div>
                    </div>
                    <span class="details-post-item_content_title">{{listDetailsPosts.title}}</span>
                    <br />
                    <span class="details-post-item_content_body">{{listDetailsPosts.body}}</span>
                </div>
            </div>

            <Comment></Comment>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    HourglassOutlined
} from '@ant-design/icons-vue';
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Posts } from "../Interfaces/interfaces";
import Comment from "../Modal/Details/Comment.vue";
import { PostsRepository } from '../Repositories/Repositories';

const {
    params: { idPosts },
} = useRoute();

//Get API products
const listDetailsPosts = ref<Posts>({
    userID: 1,
    id: 1
});
(async () => {
    try {
        const res = await PostsRepository.getDetails(idPosts)
        listDetailsPosts.value = res.data;
        console.log(listDetailsPosts.value);
    } catch (error) {
        console.log(error);
    }
})();
</script>

<style scoped>
.details {
    width: 80%;
    background-color: pink;
    position: relative;
    height: 100%;
    left: 20%;
    top: 150px;
    border-top-left-radius: 30px;
}

.details-post {
    width: 95%;
    height: auto;
    border-radius: 30px;
    position: relative;
    z-index: 3;
    top: -4rem;
    left: 2rem;
    bottom: 0;
    display: grid;
    grid-template-columns: 100%;
    background-color: #fdeeee;
    box-shadow: 5px 5px 5px 5px #df9aa6;
    padding: 30px;
    overflow-wrap: break-word;
}

@media (width <=140px) {
    .details-post {
        overflow: hidden;
    }
}

.details-post-item {
    display: grid;
    grid-template-columns: 50% 47%;
    gap: 3%;
    width: 100%;
    height: auto;
}

@media (width <=586px) {
    .details-post-item {
        grid-template-columns: 100%;

    }

    .details-post {
        left: 0;
    }
}

.details-post-item_img {
    width: 100%;
    max-height: 246px;
}

.details-post-item_img img {
    width: 100%;
    height: 246px;
}

.details-post-item_content_user img {
    width: 12%;
    border-radius: 10px;
}

.details-post-item_content_user {
    display: flex;
}

.details-post-item_content_user_title {
    margin-left: 1rem;
}

.details-post-item_content_user_title span:nth-child(1) {
    font-size: 16px;
    font-weight: 500;
}

.details-post-item_content_user_title span:nth-child(3) {
    font-size: 13px;
    opacity: 0.7;
}

.details-post-item_content_title {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    margin-top: 10px 0;
    display: block;
}

.details-post-item_content_body {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
}
</style>
