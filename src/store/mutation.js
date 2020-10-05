export const mutations = {
    updateData(state, album) {
        state.albums = album
        console.log(album)

    },
    loadingData(state, loading) {
        state.loading = loading
    }

    // En mutacion de Setean lso valores de respuesta de servicio a albums. albums  que se declaro en state.js 
}