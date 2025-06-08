import Vuex from 'vuex'
import Vue  from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        modalShow:false,
        currentRoutePath:"",
    },
    mutations:{
        openModal(state){
            state.modalShow = true;
        },
        closeModal(state){
            state.modalShow = false;
        },
        setCurrentRoutePath(state,path){
            state.currentRoutePath = path;
        }
    }
})

export default store