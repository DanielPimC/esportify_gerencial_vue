<template>
    <div>
        <p v-for="horario in horarios" :key="horario.id">
            {{ horario.horario_inicial }} - {{ horario.horario_final }} ---
            R$ {{ horario.preco }}
            DIA: {{ horario.id_dia_semana }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Horarios'
}
</script>

<style scoped>

</style>