<template>
    <div>
        <h1 class="display-4 mb-3">Lista de Pokémon</h1>
        <ul class="list-group list-group-flush list-group-numbered text-uppercase mb-3">
            <li class="list-group-item" v-for="(item, index) in this.list" :key="index">
                {{ item.name }}
                <router-link class="btn btn-warning float-end" :to="{ name: 'Info', params: { name: item.name } }">
                    <i class="fa-solid fa-eye"></i>
                </router-link>
            </li>
        </ul>
        <button class="btn btn-warning w-100" @click="getList()">CARGAR MÁS</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListView",
    data() {
        return {
            list: [],
            limit: 20,
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`).then(
                (response) => (
                    this.list = response.data.results
                )
            );
            this.limit = this.limit + 20;
        }
    },
}
</script>
