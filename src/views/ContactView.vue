<template>
    <div>
        <h1 class="display-4 mb-3">Contacto</h1>
        <div class="container" v-if="!this.correct">
            <form class="text-uppercase" @submit.prevent="this.handleSubmit">
                <div class="mb-3 row">
                    <label for="name" class="col-4 col-form-label">nombre: </label>
                    <div class="col-8">
                        <input type="text" class="form-control" name="name" placeholder="Introduce tu Nombre" required
                            v-model="this.name">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="email" class="col-4 col-form-label">email: </label>
                    <div class="col-8">
                        <input type="email" class="form-control" name="email" placeholder="Introduce tu Email" required
                            v-model="this.email">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="message" class="col-4 col-form-label">mensaje: </label>
                    <div class="col-8">
                        <textarea class="form-control" name="message" rows="3" required v-model="this.message"></textarea>
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="offset-sm-4 col-sm-8">
                        <button type="submit" class="btn btn-warning float-end">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <h4 class="display-6 text-center" v-else>Gracias por rellenar el formulario</h4>
    </div>
</template>

<script>
export default {
    name: "ContactView",
    data() {
        return {
            correct: false,
            name: "",
            email: "",
            message: "",
        }
    },
    methods: {
        handleSubmit() {
            this.correct = true;
        },
    },
}
</script>
