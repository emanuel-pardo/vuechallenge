import api from './api'; 


export async function getPlataformas() {
   
    try {
        const response =  await api.get(); 
        console.log(response.data)
        return response.data.statuses; 
    } catch (error) {
        console.error('Error al obtener plataformas:', error);
     
    }
}