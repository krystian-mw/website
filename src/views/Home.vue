<template>
  <div class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">{{ $t('home:entry:name') }}</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">{{$t('home:entry:title')}}</h1>
        <p class="leading-normal text-2xl">{{ $t('home:entry:slogan') }}</p>
        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >Skontaktuj się</button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <h1 class="text-3xl">&lt; Web Developer / &gt;</h1>
        <div class="w-full flex flex-col md:flex-row md:w-4/5 z-50 mx-auto">
          <div class="md:w-1/2"></div>
          <div class="md:w-1/2">
            <p>{{ $t('home:hero:google') }}</p>
            <img class="w-full" src="../assets/Hero/GoogleTools.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $t from "../i18n";

export default {
  methods: {
    $t,
  },
};
</script>