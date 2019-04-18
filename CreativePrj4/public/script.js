var app = new Vue({
    el: '#app',
    data: {
      items: [],
      Entrys: [],
      maps: [],

    },
    created() {
      this.getItems();
      this.getEntrys();
      this.getMaps();
    },
    methods: {
      async getItems() {
        try {
          let response = await axios.get("/api/characters");
          this.items = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async getEntrys(){
        try{
          let response = await axios.get("/api/entry")
          this.Entrys = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
      },
  async getMaps(){
    try{
      let response = await axios.get("/api/maps")
      this.maps = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
}
});

//footer and where it needs to go
//showing up of the photos on your personal page
//comments not showing up