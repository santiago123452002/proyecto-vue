<template>
  <div>
    <h1>Lista de Clientes</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Ciudad</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.id }}</td>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.direccion }}</td>
          <td>{{ cliente.ciudad }}</td>
          <td>{{ cliente.telefono }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientes: [], // Aquí se almacenarán los datos de los clientes
    };
  },
  mounted() {
    this.obtenerClientes(); // Llamamos la función cuando el componente se monta
  },
  methods: {
    obtenerClientes() {
      // Aquí simulas la obtención de datos de los clientes. Puedes reemplazar esto con una llamada a tu API
      this.clientes = [
        {
          id: "C0001",
          nombre: "Carlos Cuesta Iglesias",
          direccion: "Edificio del parque, piso 2, Ucaldas",
          ciudad: "Manizales",
          telefono: "3115551234",
        },
        {
          id: "C0002",
          nombre: "David Bohm",
          direccion: "Laboratorio de física cuántica, LFCB",
          ciudad: "Bogotá",
          telefono: "3115551010",
        },
        // ... otros clientes
      ];
    },
  },
};
</script>
