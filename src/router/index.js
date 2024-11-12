import { createRouter, createWebHistory } from "vue-router";
import ClientesComponent from "../components/ClientesComponent.vue";
import MercanciasComponent from "../components/MercanciasComponent.vue";
import AcercaComponent from "../components/AcercaComponent.vue"; // Verifica esta ruta
import ContactoComponent from "../components/ContactoComponent.vue";

const routes = [
  { path: "/", component: ClientesComponent },
  { path: "/mercancias", component: MercanciasComponent },
  { path: "/acerca", component: AcercaComponent }, // Asegúrate de que la ruta esté bien
  { path: "/contacto", component: ContactoComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
