import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFaqsStore = defineStore('faqs', () => {
  // state
  /**
   * @type {{_id: string, question: string, asnwer: string}[]}
   */
  const faqs = ref([]);

  // getters

  // actions

  // return
  return { faqs };
});
