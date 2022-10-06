<template>
    <a-menu-item @click="showModal()" key="1">
        <UserOutlined /> {{$t("adminPage.update")}}
        <a-modal v-model:visible="visible" title="Update Posts">
            <template #footer>
                <a-button key="back" @click="handleCancel">Cancle</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleUpdatePosts()">Submit</a-button>
            </template>

            <div class="updateInput">
                <span>{{$t("adminPage.title")}}</span>
                <a-textarea v-model:value="dataUpdate.title" placeholder="Title" auto-size />
                <span>{{$t("adminPage.body")}}</span>
                <a-textarea v-model:value="dataUpdate.body" placeholder="Body" :rows="4" />
            </div>
        </a-modal>
    </a-menu-item>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { ref, defineProps, reactive, defineEmits } from 'vue';
import { Posts } from '../../Interfaces/interfaces';
import { PostsRepository } from '../../Repositories/Repositories';

const visible = ref<boolean>(false);
const loading = ref<boolean>(false);
const showModal = () => {
    visible.value = true;
};

//Emit data Update
const emit = defineEmits<{
    (e: "eventUpdate", data: Posts): void
}>();

const props = defineProps<{
    itemUpdate: Posts
}>();

//Handle Update Posts
let dataUpdate = reactive<Posts>({
    userID: props.itemUpdate.userID,
    id: props.itemUpdate.id,
    body: props.itemUpdate.body,
    title: props.itemUpdate.title
});

async function handleUpdatePosts() {
    try {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            visible.value = false;
            PostsRepository.updatePosts(props.itemUpdate.id, {
                ...dataUpdate,
                body: dataUpdate.body,
                title: dataUpdate.title
            })
        }, 2000);
        const dataEmit = {
            ...dataUpdate
        }
        emit("eventUpdate", dataEmit);
    } catch (error) {
        console.log(error);
    }
}

const handleCancel = () => {
    visible.value = false;
};


</script>

<style scoped>
.ant-modal-header {
    background-color: blanchedalmond;
}

.updateInput span {
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin-bottom: 0.2rem;
}

.updateInput span:nth-child(3) {
    margin-top: 2rem;
}
</style>