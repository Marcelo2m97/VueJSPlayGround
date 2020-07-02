const app = new Vue({
    el: ".app",
    data: {
        titulo: 'Hola mundo con Vue.js',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 5},
            {nombre: 'Platano', cantidad: 0}
        ],
        nuevoNombre: '',
        nuevaCantidad: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            if(this.nuevaCantidad === ''){
                this.frutas.push({
                    nombre: this.nuevoNombre,
                    cantidad: 0
                })
            }else{
                this.frutas.push({
                    nombre: this.nuevoNombre,
                    cantidad: this.nuevaCantidad
                })
            }
            
            this.titulo = 'Hola mundo, de nuevo con Vue.js'
        }
    },
    computed: {
        sumarTotal() {
            this.total = 0
            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total
        }
    }
})