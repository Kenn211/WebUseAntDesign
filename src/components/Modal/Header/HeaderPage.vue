<template>
    <div class="header">
        <h1 class="header-title">
            <ant-cloud-outlined /> {{$t("hello.title")}} Vanh
        </h1>
        <div class="header-lang">
            <a-select ref="select" style="width: 120px" @focus="focus" @change="handleChange">
                <a-select-option value="En">English</a-select-option>
                <a-select-option value="Vn">Việt Nam</a-select-option>
            </a-select>
        </div>
    </div>
</template>

<script setup lang="ts">
import i18n from "../../Locales/i18n";
import {
    AntCloudOutlined
} from "@ant-design/icons-vue";
const focus = () => {
    console.log('focus');
};

//change Language
const handleChange = (value: string) => {
    if (value === 'En') {
        i18n.global.locale = 'en';
    } else {
        i18n.global.locale = 'vn';
    }
};
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 20%;
    width: 80%;
    z-index: 10;
    background-color: #fff;
}

.header-title {
    margin-bottom: 0;
    font-size: 2rem;
    color: rgb(50, 181, 210);
}

.header-title ant-cloud-outlined {
    color: aqua;
}

.header-lang_select {
    width: 6rem;
    height: 2rem;
    outline: pink;
}

@media (max-width: 568px) {
    .header-title {
        font-size: 1rem;
    }
}

@media (width <=183px) {
    .header-lang {
        display: none;
    }
}
</style>