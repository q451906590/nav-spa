import state from './state';
import getters from './getters';
import mutations from './mutations';

const nav = {
  namespaced: true,
  state,
  getters,
  mutations,
}

export default nav