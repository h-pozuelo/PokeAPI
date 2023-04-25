<template>
    <div>
        <h1 class="display-4 mb-3">Inicio</h1>
        <div class="card mb-3">
            <router-link :to="{ name: 'Info', params: { name: this.pokemon.name } }">
                <img class="card-img-top" :src="this.pokemon.sprites.front_default" :alt="this.pokemon.name">
            </router-link>
        </div>
        <ul class="list-group list-group-horizontal text-center">
            <li class="list-group-item list-group-item-warning list-group-item-action w-100" @click="this.backward();">
                <i class="fa-solid fa-backward"></i>
            </li>
            <router-link class="list-group-item list-group-item-action w-100"
                :to="{ name: 'Info', params: { name: this.pokemon.name } }">
                {{ this.id }}
            </router-link>
            <li class="list-group-item list-group-item-warning list-group-item-action w-100" @click="this.forward();">
                <i class="fa-solid fa-forward"></i>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "HomeView",
    data() {
        return {
            pokemon: {},
            id: 0,
            minId: 1,
            maxId: 1008,
        }
    },
    created() {
        this.id = this.getRndInteger(this.minId, this.maxId);
        this.getPokemon();
    },
    methods: {
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getPokemon() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(
                (response) => (
                    this.pokemon = response.data
                )
            );
        },
        backward() {
            if (this.id > this.minId) {
                this.id = this.id - 1;
                this.getPokemon();
            }
        },
        forward() {
            if (this.id < this.maxId) {
                this.id = this.id + 1;
                this.getPokemon();
            }
        },
    },
}
</script>
