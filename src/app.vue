<template>
    <div
        ref="root"
        id="root"
    >
        <router-view v-slot="{ Component }" class="body">
            <transition>
                <keep-alive :include="cacheComponents">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>
<script setup name="app-root">
import { ref } from 'vue';
import 'virtual:windi.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/scss/global/animate.min.css'
import '@/assets/scss/style.scss'

const cacheComponents = ref('')
</script>
