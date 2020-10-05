export const state = {
    //State Guarda la Variable  que viene de Json.placeholder. 
    _albums: [],
    get albums() {
        return this._albums;
    },
    set albums(value) {
        this._albums = value;
    },
    loading: true
}