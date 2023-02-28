import { defineComponent, toRefs } from 'vue'
export default defineComponent({
    name: 'global-header',
    props: {
        page: String
    },
    setup(props) {
        // 父子组件通讯 ===>
        // eslint-disable-next-line no-unused-vars
        const { page } = $(toRefs(props))
        // 父子组件通讯 <===
        return () => <div class="global-header">{page}</div>
    }
})
