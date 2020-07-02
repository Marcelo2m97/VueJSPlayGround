const app = new Vue({
    el: ".app",
    data: {
        titulo: 'Hola mundo con Vue.js',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 5},
            {nombre: 'Platano', cantidad: 0}
        ],
        nuevaFruta: ''
    },
    methods:{
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.titulo = 'Hola mundo, de nuevo con Vue.js'
        }
    }
})