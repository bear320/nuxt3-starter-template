import { defineStore } from 'pinia';

export const useAppStore = defineStore(
  'app',
  () => {
    const app = ref<string>('Nuxt3 starter template');
    const greet = (name: string) => `Hello, ${name}!`;
    return { app, greet };
  },
  { persist: true }
);
