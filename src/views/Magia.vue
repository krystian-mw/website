<template>
  <div style=""></div>
  <div id="message" style="font-size: 36px; color: white">Wpisz Imie</div>
  <input
    id="name"
    style="font-size: 36px; color: black"
    type="text"
    placeholder="Imie"
  />
  <button
    type="submit"
    v-on:click="submit"
    style="font-size: 36px; color: white"
  >
    Dalej
  </button>
</template>

<script>export default {
	methods: {
		async submit(ev) {
			const input = document.getElementById('name')
			const message = document.getElementById('message')
			const imie = input.value

			input.remove()
			ev.target.remove()

			setTimeout(() => {
				message.innerText = `Przekieruje do ZOOTUBE z wyszukiwaniem: "${imie}" za 3 sekundy`

				setTimeout(() => {
					message.innerText = `Przekieruje do ZOOTUBE z wyszukiwaniem: "${imie}" za 2 sekundy`

					setTimeout(() => {
						message.innerText = `Przekieruje do ZOOTUBE z wyszukiwaniem: "${imie}" za 1 sekundy`

						setTimeout(() => {
							message.innerText = `Przekieruje do ZOOTUBE z wyszukiwaniem: "${imie}" za 0 sekundy`
							setTimeout(() => {
								message.innerText = ``
								setTimeout(() => {
									window.location = `//zootube1.com/`
								}, 750)
							}, 750)
						}, 750)
					})
				}, 750)
			})
		}
	}
}
</script>
