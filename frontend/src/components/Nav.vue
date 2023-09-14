<template>
  <Disclosure as="nav" class="bg-[#FFB800]" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-32 items-center justify-between">
        <!-- Mobile view -->
        <div class="flex items-center space-x-4 justify-between sm:justify-start">
          <!-- Mobile menu button -->
          <div class="sm:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#ffd100] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Logo/Icon -->
          <div class="flex-shrink-0">
            <img class="h-32 w-auto" src="../assets/logo2.png" alt="Your Company" />
          </div>
        </div>

        <!-- Menu Items - centered -->
        <div class="hidden sm:flex sm:space-x-4 sm:mx-auto">
          <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href" 
            :class="[item.current ? 'bg-[#FFB800] text-white' : 'text-gray-800 hover:bg-[#ffd100] hover:text-white', 'rounded-md px-3 py-2 text-lg font-medium']" 
            :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </router-link>
        </div>

        <!-- Login Button - right -->
        <div class="hidden sm:flex sm:items-center">
          <button @click="navigateToLogin" class="text-lg text-gray-800 hover:bg-[#ffd100] hover:text-white px-3 py-2 rounded-md font-medium border-2 border-[#ff9c00]">
            Login
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden bg-[#FFB800]">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          :class="[item.current ? 'bg-[#FFB800] text-white' : 'text-gray-800 hover:bg-[#ffd100] hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" 
          :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </router-link>
        <!-- Login Button for Mobile -->
        <button @click="navigateToLogin" class="text-gray-800 hover:bg-[#ffd100] hover:text-white block rounded-md px-3 py-2 text-base font-medium border-2 border-[#ff9c00]">Login</button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { watch, ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigation = ref([
    { name: 'Home', href: '/home', current: false },
    { name: 'Aktuelles', href: '/news', current: false },
    { name: 'Leistungen', href: '/services', current: false },
    { name: 'Team', href: '/team', current: false },
    { name: 'Online Termin buchen', href: '/date-booking', current: false },
])

watch(() => route.path, (newPath, oldPath) => {
    navigation.value.forEach(item => {
        if (item.href === oldPath) {
            item.current = false;
        }
        if (item.href === newPath) {
            item.current = true;
        }
    });
}, { immediate: true });

const navigateToLogin = () => {
    router.push('/login')
}
</script>





