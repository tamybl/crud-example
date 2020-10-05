export const actions = {
    fetchData({ commit }) {
        fetch('https://jsonplaceholder.typicode.com/users') // invocando a la Url de jso.placeholder
            .then(response => response.json()) // obtengo el json de respuesta
            .then(json => {
                //console.log(JSON.stringify(json))--Toda la data 
                commit('updateData', json.slice(1, 10)) //ejecuto mi funcion update data filtrando a solo 10 registros
                console.log('updateData', json.slice(1, 10)) // Ver datos por consola
                commit('loadingData', false) // cuando  se espera el Request aparece loading Data 

            })

    }
}