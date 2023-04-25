<template>
    <div class="card text-uppercase">
        <img class="card-img-top" :src="this.pokemon.sprites.front_default" :alt="this.pokemon.name">
        <div class="card-body">
            <div class="row mb-3">
                <h4 class="card-title display-6 col">{{ this.pokemon.name }}</h4>
                <ul class="list-group list-group-horizontal justify-content-end col">
                    <li class="list-group-item list-group-item-warning" v-for="(type, index) in this.pokemon.types"
                        :key="index">
                        {{ type.type.name }}
                    </li>
                </ul>
            </div>
            <p class="card-text mb-3">peso: {{ (this.pokemon.weight * 0.1).toFixed(2) }} kg</p>
            <p class="card-text mb-3">altura: {{ (this.pokemon.height * 0.1).toFixed(2) }} m</p>
            <p class="card-text mb-3">habilidades: </p>
            <ul class="list-group list-group-numbered">
                <li class="list-group-item list-group-item-warning" v-for="(ability, index) in this.pokemon.abilities"
                    :key="index">
                    {{ ability.ability.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
}
</script>
