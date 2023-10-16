import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useErrStore = defineStore('errStore', () => {
  // state
  const err = ref('');

  // getters

  // actions
  function setError(error) {
    err.value = error;
  }

  // return
  return { err, setError };
});
