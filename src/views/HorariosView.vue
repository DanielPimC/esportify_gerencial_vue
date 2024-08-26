<template>
    <div>
        <DiasSemana :HorariosQuadra="horariosQuadra"/>
    </div>
</template>

<script>
import axios from 'axios'
import DiasSemana from '../components/DiasSemana.vue'
export default {
    name: 'HorariosView',
    components: {
        DiasSemana,
    },
    data() {
        return {
            horariosQuadra: []
        }
    },
    methods: {
        async getHorarios() {
            try {
                const getHorarios = await axios.get(`http://localhost:3000/horarios/?id_quadra=${this.id_quadra}`)
                console.log(getHorarios.data)
                this.horariosQuadra = getHorarios.data
                console.log(typeof(this.horariosQuadra))
            }catch(error) {
                console.error(error)
            }
        }
    },
    created() {
        this.getHorarios()
    },
    computed: {
        id_quadra() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>