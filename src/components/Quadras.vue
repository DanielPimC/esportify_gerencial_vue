<template>
    <div class="quadras-container">
        <div class="quadras-list">
            <div class="quadra" v-for="quadra in quadras" :key="quadra.id">
                {{ quadra.nome }}
                <router-link :to="`/horarios/${quadra.id}`">
                    Ver horários
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Quadras',
    data() {
        return {
            quadras: [],
            quadra_id: ''
        }
    },
    methods: {
        async buscarQuadras() {
            try {
                const res = await axios.get('http://localhost:3000/quadras')
                console.log(res.data)
                this.quadras = res.data
            } catch (error) {
                console.error(error)
            }
        }
    },
    created() {
        this.buscarQuadras()
    }
}
</script>

<style scoped>
.quadra {
    border: 1px solid black;
    @apply relative w-[100%] h-[100%] bg-[#5f535331] p-[20px] text-center flex flex-col justify-center items-center rounded-lg
}

.quadras-container {
    @apply grow p-[20px] m-10
}

.quadras-list {
    @apply flex p-0 flex-wrap gap-[20px]
}
</style>