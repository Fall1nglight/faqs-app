<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFaqsStore } from '../stores/faqs';
import { useErrStore } from '../stores/err';

// store
const faqsStore = useFaqsStore();
const errStore = useErrStore();
const { faqs } = storeToRefs(faqsStore);

// do it with suspense
faqsStore.fetchFaqs();

// actions
async function handleDelete(id) {
  if (!confirm('Are you sure to delete this faq?')) return;

  try {
    await faqsStore.deleteFaq(id);
  } catch (error) {
    errStore.setError(error);
  }
}
</script>

<template>
  <section class="faqs px-5 pb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 mb-5">
          <div class="display-6 text-light text-center">
            Frequently Asked Questions
          </div>
        </div>

        <div class="col-xl-4">
          <ul class="list-group">
            <li v-for="faq in faqs" :key="faq._id" class="list-group-item">
              <p class="lead">
                {{ faq.question }}
              </p>
              <p class="lead d-flex">
                - {{ faq.answer }}
                <i
                  @click="handleDelete(faq._id)"
                  class="bi bi-x-circle ms-auto"
                ></i>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bi-x-circle {
  cursor: pointer;
}

.list-group {
  background: transparent !important;
}

.list-group-item {
  background: transparent !important;
  border: none;
  padding: 1.5rem;
  border: 1px solid #fff;
  margin-bottom: 15px;
  border-radius: 6px;
  color: #fff;
}
</style>
