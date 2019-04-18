<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.name}}</h1>
      </div>
      <div>
        <p>
          <a @click="toggleUpload"><i class="fas fa-book"></i></a>
          <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
        </p>
      </div>
    </div>
   <uploader :show="show" @escape="escape" @uploadFinished="uploadFinished" />
    <Gratitude :entries="entries" />
     </div>
  <div v-else>
    <p>If you would like to upload a text entry of what you are grateful for, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
    
  </div>
</div>
</template>

<script>


import EscapeEvent from '@/components/EscapeEvent.vue'
import Uploader from '@/components/Uploader.vue'
import Gratitude from '@/components/Gratitude.vue'

export default {
  name: 'MyGratitude',
  components: {
      EscapeEvent,
    Uploader,
     Gratitude,
  },
  data() {
    return {
      show: false,
    }
  },

computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("getUser");
  },
      entries() {
      return this.$store.state.entries;
    },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    escape() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
    async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyEntries");
  },
      async uploadFinished() {
      this.show = false;
      try {
        this.error = await this.$store.dispatch("getMyEntries");
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: rgb(0, 0, 0);
  font-size: 2em;
  font-family: sans-serif;
}

.header svg {
  margin-top: 12px;
}
</style>