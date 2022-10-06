<template>
    <div class="slider">
        <div class="slider-header">
            <img src="../../../assets/275732687_1633272063704273_6830161393603287007_n.jpg" alt="">
            <span>Nguyễn Việt Anh</span>
        </div>

        <div class="slider-menu">
            <ul class="menu-list">
                <router-link style="width: 100%;" to="/">
                    <li class="menu-item" active-class="active" extra>
                        <home-outlined class="menu-item_icon" />
                        <span class="menu-item_title">{{$t("slider.home")}}</span>
                    </li>
                </router-link>

                <router-link style="width: 100%;" to="/admin">
                    <li class="menu-item" active-class="active" exact>
                        <user-outlined class="menu-item_icon" />
                        <span class="menu-item_title">{{$t("slider.admin")}}</span>
                    </li>
                </router-link>

                <li class="menu-item">
                    <contacts-outlined class="menu-item_icon" />
                    <span class="menu-item_title">{{$t("slider.contacts")}}</span>
                </li>

                <li class="menu-item">
                    <home-outlined class="menu-item_icon" />
                    <span class="menu-item_title">{{$t("slider.home")}}</span>
                </li>

                <li class="menu-item">
                    <home-outlined class="menu-item_icon" />
                    <span class="menu-item_title">{{$t("slider.home")}}</span>
                </li>

                <li class="menu-item">
                    <logout-outlined class="menu-item_icon" />
                    <span class="menu-item_title">{{$t("slider.logout")}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    HomeOutlined,
    UserOutlined,
    ContactsOutlined,
    LogoutOutlined,
} from '@ant-design/icons-vue';
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
}

li {
    list-style-type: none;
}

.slider {
    background: #fff;
    padding: 20px 20px 40px 40px;
    overflow-x: hidden;
    perspective: 1px;
    transform-style: preserve-3d;
    perspective-origin: right top;
    top: 0px;
    bottom: 0;
    position: fixed;
    overflow-y: scroll;
    z-index: 10;
    transition: all 1s ease;
    width: 20%;
}

.slider::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.slider-header {
    height: 5rem;
    text-align: center;
}

.slider-header img {
    width: 60px;
    height: 70%;
    border-radius: 50%;
}

.slider-header span {
    font-size: 18px;
    margin-left: 10px;
    font-weight: 500;
}

.slider-menu {
    width: 100%;
    margin-top: 1.5rem;
}

.menu-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

.menu-item {
    width: 100%;
    font-size: 20px;
    padding: 10px 0px;
    background-color: pink;
    margin-bottom: 0.5rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    justify-items: center;
}

.menu-item:hover {
    background-color: #ed768a;
    cursor: pointer;
}

.menu-item_icon {
    padding: 10px;
    background-color: #e78999;
    border-radius: 30px;
    margin-left: 10px;
}

.menu-item_icon,
.menu-item_title {
    color: #333;
}

.menu-item_title {
    margin-left: 5px;
}

@media (max-width: 1000px) {
    .menu-item_title {
        display: none;
    }

    .slider-header span {
        display: none;
    }
}

@media (max-width: 586px) {
    .slider {
        padding: 20px 0;
    }
}
</style>