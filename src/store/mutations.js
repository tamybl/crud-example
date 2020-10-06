export const mutations = {
    updateUsers (state, users) {
        state.users = users;
    },
    loadingStatus(state, loading) {
        state.loading = loading;
    },
    removeUser(state, id) {
        state.users.splice(id, 1);
    },
    saveUser(state, editedUser) {
        let pos = state.users.map((user) => { return user.id; }).indexOf(editedUser.id);
        state.users.splice(pos, 1, editedUser);
    }
}