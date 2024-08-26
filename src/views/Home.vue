<template>
    <h1>Minhas quadras</h1>
    <div>
        <Quadras />
    </div>
</template>

<script>
import Quadras from '../components/Quadras.vue'

export default {
    name: 'Home',
    data() {
        return {
            burguers: null,
            burguer_id: null,
            quadras: [],
            msg: '',
            showModal: false
        }
    },
    components: {
        Quadras
    }
}
</script>

<style scoped>

</style>