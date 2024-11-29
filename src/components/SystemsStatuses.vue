<template>
  <div>   
    <div class="container">
      <h1>Detalles del Sistema</h1>
      <table v-if="loading == false && systemList && systemList.length > 0">
        <thead>
          <tr>
            <th>Nombre Platafoma</th>
            <th>Version</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in systemList" :key="index">
            <td>{{ item.plataformName }}</td>
            <td>{{ item.version }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Cargando plataformas...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getPlataformas } from "@/services/plataforma";

const systemList = ref([]);
let intervalId = ref();
const loading = ref(false);

const obtenerPlataformas = async () => {
  try {
    loading.value =true;
    const plataformas = await getPlataformas();

    systemList.value = plataformas;
  } catch (error) {
    console.error("Error al obtener plataformas:", error);
  }
  finally{
    loading.value = false;
  }
};


onMounted(() => { 
  obtenerPlataformas(); 
  intervalId= setInterval(() => {
    obtenerPlataformas();
  }, 10000);
});
onUnmounted(() => { 
    clearInterval(intervalId);    
  });
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background-color: #f4f4f4;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

p {
  text-align: center;
  font-size: 16px;
  color: #666;
}
</style>