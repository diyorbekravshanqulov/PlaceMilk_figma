<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menu = ref(["Покупателям", "Поставщикам", "Частые вопросы"]);
const inputRef = ref(null);

const removeReadonly = () => {
  if (inputRef.value) {
    inputRef.value.removeAttribute("readonly");
    inputRef.value.focus();
    // Move the cursor to the end of the input
    const value = inputRef.value.value;
    inputRef.value.value = "";
    inputRef.value.value = value;
  }
};

// const setReadonly = () => {
//   if (inputRef.value) {
//     inputRef.value.setAttribute("readonly", true);
//   }
// };

// const clickOutside = {
//   beforeMount(el, binding) {
//     el.clickOutsideEvent = function (event) {
//       // Check if the click was outside the element and its children
//       if (!(el === event.target || el.contains(event.target))) {
//         binding.value(event, el);
//       }
//     };
//     document.body.addEventListener("click", el.clickOutsideEvent);
//   },
//   unmounted(el) {
//     document.body.removeEventListener("click", el.clickOutsideEvent);
//   },
// };

// // Register the directive
// const directives = {
//   clickOutside
// };

// // Custom directive usage inside the onMounted hook
// onMounted(() => {
//   directives.clickOutside.beforeMount(inputRef.value, {
//     value: setReadonly
//   });
// });

// onUnmounted(() => {
//   directives.clickOutside.unmounted(inputRef.value);
// });
</script>

<template>
  <div class="bg-white container flex flex-wrap">
    <div
      class="flex items-center justify-end gap-[30%] w-full mt-[15px] px-[2%]"
    >
      <div class="flex items-center gap-9">
        <a
          class="font-light text-[13px] font-[Roboto]"
          v-for="(item, index) in menu"
          :key="index"
          href="#"
          >{{ item }}</a
        >
      </div>
      <div class="flex divide-x divide-[#000]">
        <img
          class="px-5 font-light text-[13px] font-[Roboto]"
          src="../../public/russian.svg"
          alt="Russian flag"
        />
        <p class="px-5 font-light text-[13px] font-[Roboto]">Русский</p>
        <p class="px-5 font-light text-[13px] font-[Roboto]">₽</p>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-12 items-center w-full mt-[1%]">
      <div class="grid grid-cols-2 items-center">
        <img src="../../public/site_bar.svg" alt="Site bar" />
        <img class="mt-[10%]" src="../../public/logo.svg" alt="Logo" />
      </div>
      <div
        class="border-[2px] border-purple-300 h-[40%] col-span-2 mt-[1%] flex relative"
      >
        <span
          class="absolute top-1/2 -translate-y-1/2 left-0 px-[25px] py-[11px]"
          >Везде</span
        >
        <input
          class="w-full h-full pl-[15%] pr-[12%]"
          type="text"
          id="search-input"
          ref="inputRef"
          readonly
        />
        <img
          @click="removeReadonly"
          class="absolute top-1/2 -translate-y-1/2 right-0 px-[25px]"
          src="../../public/search.svg"
          alt="Search"
        />
      </div>
      <div class="grid grid-cols-3 gap-[50px] place-items-center mr-[10%]">
        <div v-for="(item, index) in 3" :key="index">
          <img class="mx-auto" src="../../public/user.svg" alt="" />
          <p class="font-[Roboto] mx-auto mt-[5px]">Войти</p>
        </div>
      </div>
    </div>
  </div>
</template>
