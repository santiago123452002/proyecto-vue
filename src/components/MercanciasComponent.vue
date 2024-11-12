<template>
  <div>
    <h1>Mercancías</h1>
    <form @submit.prevent="crearMercancia">
      <input v-model="nuevaMercancia.nombre" placeholder="Nombre de Mercancía" required />
      <input v-model="nuevaMercancia.precio" placeholder="Precio" required />
      <button type="submit">Crear Mercancía</button>
    </form>

    <ul>
      <li v-for="mercancia in mercancias" :key="mercancia.id">
        {{ mercancia.nombre }} - ${{ mercancia.precio }}
        <button @click="eliminarMercancia(mercancia.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../router/api';



export default {
  name: 'MercanciasComponent',  // Cambiar el nombre a "MercanciasComponent"
  data() {
    return {
      mercancias: [],
      nuevaMercancia: {
        nombre: '',
        precio: ''
      }
    };
  },
  methods: {
    async obtenerMercancias() {
      try {
        const response = await api.get('/mercancia');
        this.mercancias = response.data;
      } catch (error) {
        console.error('Error al obtener mercancias:', error);
      }
    },
    async crearMercancia() {
      try {
        const response = await api.post('/mercancia', this.nuevaMercancia);
        this.mercancias.push(response.data);
        this.nuevaMercancia = { nombre: '', precio: '' };
      } catch (error) {
        console.error('Error al crear mercancia:', error);
      }
    },
    async eliminarMercancia(id) {
      try {
        await api.delete(`/mercancia/${id}`);
        this.mercancias = this.mercancias.filter(mercancia => mercancia.id !== id);
      } catch (error) {
        console.error('Error al eliminar mercancia:', error);
      }
    }
  },
  mounted() {
    this.obtenerMercancias();
  }
};
</script>
