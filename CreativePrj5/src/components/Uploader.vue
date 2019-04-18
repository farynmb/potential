<template>
<transition v-if="show" name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1 class="modal-title">Upload</h1>
        </div>
        <div class="modal-body">
          <p v-if="error" class="error">{{error}}</p>
          <form @submit.prevent="upload">
            <input v-model="user" placeholder="user">
            <p></p>
            <input v-model="date" placeholder="Date">
            <p></p>
            <textarea v-model="Entry" placeholder="Gratitude List"></textarea> 
            <p></p>
            <button type="button" @click="close" class="pure-button">Close</button>
            <button type="submit" class="pure-button pure-button-secondary">Upload</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Uploader',
  props: {
    show: Boolean,
  },
  data() {
    return {
        user: '',
      date: '',
      Entry: '',
      error: '',
    }
  },
   methods: {
  close() {
    this.$emit('escape');
  },

    async upload() {
      try {
        const formData = new FormData();
        formData.append('user', this.user)
        formData.append('date', this.date);
        formData.append('Entry', this.Entry);
        this.error = await this.$store.dispatch("upload", formData);
        if (!this.error) {
          this.user = '';
          this.date= '';
          this.Entry = null;
          this.$emit('uploadFinished');
        }
      } catch (error) {
        console.log(error);
      }
      },
    }
}
</script>
