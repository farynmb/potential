<template>
<div class="home">
  <Gratitude :entries="entries" />
</div>
</template>

<script>
// @ is an alias to /src
import Gratitude from '@/components/Gratitude.vue'

export default {
  name: 'home',
  components: {
    Gratitude
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    }
  },
  async created() {
    await this.$store.dispatch("getAllEntries");
  },
}
</script>