<template>
  <div class="app-container">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" @click="navigateTo('clientes')">Clientes</li>
        <li class="nav-item" @click="navigateTo('mercancias')">Mercancías</li>
        <li class="nav-item" @click="navigateTo('acerca')">Acerca</li>
        <li class="nav-item" @click="navigateTo('contacto')">Contacto</li>
      </ul>
    </nav>

    <div class="content">
      <ClientesComponent v-if="currentView === 'clientes'" />
      <MercanciasComponent v-if="currentView === 'mercancias'" />
      <AcercaComponent v-if="currentView === 'acerca'" />
      <ContactoComponent v-if="currentView === 'contacto'" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ClientesComponent from './components/ClientesComponent.vue';
import MercanciasComponent from './components/MercanciasComponent.vue';
import AcercaComponent from './components/AcercaComponent.vue';
import ContactoComponent from './components/ContactoComponent.vue';

export default {
  components: {
    ClientesComponent,
    MercanciasComponent,
    AcercaComponent,
    ContactoComponent,
  },
  setup() {
    const currentView = ref('clientes');

    const navigateTo = (view) => {
      currentView.value = view;
    };

    return {
      currentView,
      navigateTo,
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #333;
  color: white;
  padding: 15px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover {
  background-color: #555;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f4f4f4;
}

.content > div {
  display: none;
}

.content > div.active {
  display: block;
}
</style>
