<template>
    <div class="admin">
        <div class="admin-list">
            <div class="admin-list-title">
                <span>{{$t("adminPage.admin")}}</span>
            </div>
            <div class="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{{$t("adminPage.img")}}</th>
                            <th>{{$t("adminPage.title")}}</th>
                            <th>{{$t("adminPage.body")}}</th>
                            <th>{{$t("adminPage.options")}}</th>
                        </tr>
                    </thead>
                    <tbody v-for="item,index in getPostsAdmin" :key="item.id">
                        <tr>
                            <td>{{item.id}}</td>
                            <td>
                                <img src="https://img.pikbest.com/backgrounds/20190911/green-summer-watercolor-drawing-landscape-background_2761434.jpg!c1024wm0"
                                    alt="">
                            </td>
                            <td>
                                {{item.title}}
                            </td>
                            <td>
                                {{item.body}}
                            </td>
                            <td>
                                <a-dropdown>
                                    <template #overlay>
                                        <a-menu>
                                            <UpdateItem @eventUpdate="eventUpdate" :itemUpdate="item"></UpdateItem>
                                            <a-menu-item @click="handleDeleteItemPosts(item.id)" key="2">
                                                <delete-outlined /> {{$t("adminPage.delete")}}
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <a-button>
                                        {{$t("adminPage.options")}}
                                    </a-button>
                                </a-dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <a-affix :offset-bottom="bottom">
                    <AddItem @eventEmit="eventUpdate" type="primary" :getPostsAdmin="getPostsAdmin"></AddItem>
                </a-affix>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { DeleteOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { Posts } from '../Interfaces/interfaces';
import { PostsRepository } from '../Repositories/Repositories';
import UpdateItem from '../Modal/Adminn/UpdateItem.vue';
import AddItem from '../Modal/Adminn/AddItem.vue';


const bottom = ref<number>(100);

//get Posts Admin
let getPostsAdmin = ref<Posts[]>([]);
(async () => {
    const res = await PostsRepository.getPosts();
    Object.assign(getPostsAdmin.value, res.data);
    console.log(getPostsAdmin.value);
})();

//Handle Delete Items Posts
async function handleDeleteItemPosts(id: number) {
    try {
        let choice = confirm("U sure ?");
        if (choice == true) {
            await PostsRepository.deletePosts(id);
            getPostsAdmin.value = getPostsAdmin.value.filter((item) => item.id != id)
        } else {
            console.log("ok k xóa")
        }
    } catch (error) {
        console.log(error);
    }
}

//EventUpdate item
function eventUpdate(data: Posts) {
    function findIdData(findId: Posts) {
        return findId.id === data.id;
    }
    const findId = getPostsAdmin.value.indexOf(
        Object(getPostsAdmin.value.find(findIdData))
    );
    getPostsAdmin.value[findId] = data;
}
</script>

<style scoped>
.admin {
    width: 80%;
    background-color: pink;
    position: relative;
    height: 100%;
    left: 20%;
    top: 150px;
    border-top-left-radius: 30px;
}

.admin-list {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 2rem;
}

@media (width: 568px) {}

.admin-list-title {
    position: relative;
    background-color: rgb(244, 98, 122);
    height: 3rem;
    width: 95%;
    top: -3rem;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.admin-table {
    overflow-x: scroll;
}

thead tr {
    width: 100%;
    display: grid;
    grid-template-columns: 2% 20% 30% 35% 9%;
    gap: 1%;
    border-bottom: 1px solid rgb(141, 119, 119);
    width: 95%;
    padding: 10px 0;
}

tbody tr {
    display: grid;
    grid-template-columns: 2% 20% 30% 35% 9%;
    gap: 1%;
    width: 95%;
    border-bottom: 1px solid rgb(141, 119, 119);
    padding: 10px 0;
}

tbody tr td:nth-child(1) {
    text-align: center;
}

tbody tr td:nth-child(2) img {
    width: 100%;
}

tbody tr td:nth-child(3) {
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

tbody tr td:nth-child(4) {
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

tbody tr td:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
}

tbody tr td:last-child button {
    border-radius: 26px;
}

.btn-add-posts {
    background-color: aqua;
    position: fixed;
    border-radius: 50%;
    bottom: 8%;
    right: 1%;
}
</style>