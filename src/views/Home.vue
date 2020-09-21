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
        <div class="w-full flex flex-col md:flex-row md:w-4/5 z-50 mx-auto">
          <div class="md:w-1/2"></div>
          <div class="md:w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
  <WaveBottom />
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full mt-2 text-5xl font-bold leading-tight text-center text-darkblue"
      >Każda Usługa</h1>
      <p class="w-full mb-2 text-xl font-bold leading-tight text-center text-blue">posiada</p>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img class="w-full" src="../assets/Hero/RWD.svg" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-lightblue font-bold leading-none mb-3">Responsive Web Design</h3>
            <p
              class="text-gray-600 mb-8"
            >Ponieważ każdy klient lub potencjalny klient powinien zapoznać się lub korzystać z twoich usług w jakikolwiek sposób mu jest najwygodniej.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3
            class="text-3xl text-lightblue font-bold leading-none mb-3"
          >Optymizacja</h3>
          <p
            class="text-gray-600 mb-8"
          >Ponieważ niedoskonała strona jest gorsza od nieistniejącej</p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="w-full" src="../assets/Hero/OptimisationTools.svg" />
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-6">
          <img class="h-24 w-full" src="../assets/Hero/mobile-empty.svg" />
        </div>
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-lightblue font-bold leading-none mb-3">Aplikacja MyWebsite</h3>
          <p
            class="text-gray-600 mb-8"
          >Prosto od nas. Monitoruj na bieżąco swoją stronę, pisz artykuły na blogu, rozmawiaj z klientami ...</p>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3
            class="text-3xl text-lightblue font-bold leading-none mb-3"
          >{{ $t('home:hero:google') }}</h3>
          <p
            class="text-gray-600 mb-8"
          >Nięzbedne w każdy sposób, od monitorowania użytkowników i jakości strony, aż po nabywania klientów i budowania marki.</p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="w-full" src="../assets/Hero/GoogleTools.svg" />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Dodatkowe Usługi</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

    </div>
  </section>
</template>

<script>
import WaveBottom from "../components/WaveBottom";
import $t from "../i18n";

export default {
  methods: {
    $t,
  },
  components: {
    WaveBottom,
  },
};
</script>