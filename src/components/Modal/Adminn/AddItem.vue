<template>
    <appstore-add-outlined style="background: blanchedalmond; padding: 15px 15px; border-radius: 50%;"
        @click="showModal()" />
    <a-modal v-model:visible="visible" title="Add Posts" @click="handleAddPosts()">
        <template #footer>
            <a-button key="back" @click="handleCancel">Cancle</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleAddPosts()">Submit</a-button>
        </template>
        <div class="addInput">
            <span>Title</span>
            <a-textarea v-model:value="dataAddPosts.title" placeholder="Title Post" auto-size />

            <span>Body</span>
            <a-textarea v-model:value="dataAddPosts.body" placeholder="Body Post" :rows="4" />
        </div>
    </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue';
import { AppstoreAddOutlined } from '@ant-design/icons-vue';
import { Posts } from '../../Interfaces/interfaces';
import { PostsRepository } from '../../Repositories/Repositories';

const visible = ref<boolean>(false);
const loading = ref<boolean>(false);
const showModal = () => {
    visible.value = true;
};

const handleCancel = () => {
    visible.value = false;
};

let props = defineProps<{
    getPostsAdmin: Posts[]
}>();


//Handle add Post
const dataAddPosts = reactive<Posts>({
    userID: 1,
    id: 0
});

async function handleAddPosts() {
    try {
        if (dataAddPosts.title == '' || dataAddPosts.body == '') {
            alert('Nhập vào')
        } else {
            const idArr = props.getPostsAdmin.map(item => item.id);
            const maxId = idArr.reduce(function (accumulator: number, element: number) {
                return (accumulator > element) ? accumulator : element;
            });
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
                visible.value = false;
                props.getPostsAdmin.unshift({
                    ...dataAddPosts,
                    id: maxId + 1,
                });
                dataAddPosts.title = '';
                dataAddPosts.body = '';

            }, 2000);
            await PostsRepository.addPosts({
                ...dataAddPosts,
                id: maxId + 1,
                title: dataAddPosts.title,
                body: dataAddPosts.body
            });
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped>
.addInput span {
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin-bottom: 0.2rem;
}

.addInput span:nth-child(3) {
    margin-top: 2rem;
}
</style>