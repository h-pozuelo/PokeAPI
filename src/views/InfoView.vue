<template>
    <div>
        <h1 class="display-4 mb-3">Detalles de Pokémon</h1>
        <CardComponent v-bind:pokemon="this.pokemon"></CardComponent>
    </div>
</template>

<script>
import axios from 'axios';
import CardComponent from '@/components/CardComponent.vue';

export default {
    name: "InfoView",
    components: {
        CardComponent,
    },
    data() {
        return {
            pokemon: {},
        }
    },
    created() {
        this.getPokemon();
    },
    methods: {
        getPokemon() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`).then(
                (response) => (
                    this.pokemon = response.data
                )
            );
        }
    },
}
</script>
