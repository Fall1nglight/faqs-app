import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const uri = 'http://localhost:3000/api/faqs';

export const useFaqsStore = defineStore('faqs', () => {
  // state
  const faqs = ref([]);
  const errorMsg = ref('');

  // getters

  // actions
  async function fetchFaqs() {
    try {
      const { data } = await axios.get(uri);

      // got empty array from mongoDB
      if (!data.result.length) return;

      faqs.value.push(...data.result);
    } catch (error) {
      return error;
    }
  }

  async function uploadFaq(faq) {
    try {
      const { data } = await axios.post(uri, faq);

      if (!data.result) throw new Error('Failed to upload faq!');

      faqs.value.push(data.result);
    } catch (error) {
      return error;
    }
  }

  async function deleteFaq(id) {
    try {
      const { data } = await axios.delete(`${uri}/${id}`);

      if (!data.success) throw new Error(`Failed to delete faq (id: ${id})`);

      faqs.value = faqs.value.filter((faq) => faq._id !== id);
    } catch (error) {
      return error;
    }
  }

  // return
  return { faqs, errorMsg, fetchFaqs, uploadFaq, deleteFaq };
});
