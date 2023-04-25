<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PokéAPI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav col-lg-8">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Home' }">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'List' }">Lista</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Contact' }">Contacto</router-link>
                        </li>
                    </ul>
                    <form class="d-flex col-lg-4" role="search">
                        <input class="form-control me-2" type="search" placeholder="Introduce un Pokémon"
                            v-model="this.name">
                    </form>
                </div>
            </div>
        </nav>
        <ul class="list-group m-3 text-uppercase" v-if="this.list.length > 0">
            <li class="list-group-item list-group-item-action" v-for="(item, index) in this.list" :key="index">
                <a class="nav-link" :href="'/list/info/' + item.name">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MenuComponent",
    data() {
        return {
            name: "",
            list: [],
            maxId: 1008,
        }
    },
    watch: {
        name: async function (request) {
            if (this.name) {
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.maxId}`);
                const responseList = response.data.results;
                this.list = responseList.filter(
                    (item) => (
                        item.name.includes(request)
                    )
                );
            } else {
                this.list = [];
            }
        }
    },
}
</script>
