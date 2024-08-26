<template>
    <div>
        <div class="dias-semana">
            <div class="dia_semana" v-for="dia in dias_semana" :key="dia.id">
                <span class="dia_semana_texto" @click="verIdDia(dia.id)">{{ dia.dia }}</span>

                <div v-if="horarios.id_dia_semana == dia.id">
                    <Horarios 
                        @passarProps="passarProps"     
                    />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Horarios from './Horarios.vue'
export default {
    name: 'DiasSemana',
    data() {
        return {
            dias_semana: [],
            horarios: [],
        }
    },
    components: {
        Horarios
    },
    props: {
        horariosQuadra: Object
    },
    methods: {
        async buscarDiasSemana() {
            try {
                const res = await axios.get('http://localhost:3000/dias_semana')
                this.dias_semana = res.data
            } catch (error) {
                console.error(error)
            }
        },
        verIdDia(id){
            console.log(id)
        },
    },
    created() {
        this.buscarDiasSemana()
    }
}
</script>

<style scoped>
.dias-semana {
    border-bottom: 1px solid #ddd;
    @apply flex content-center m-[20px] p-[5px] rounded-lg text-[15px]
}

.dias-semana span {
    border: 1px solid black;
    transition: 0.5s;
    @apply cursor-pointer py-[5px] px-[10px] rounded-lg
}

.dias-semana span:hover {
    @apply underline
}
</style>