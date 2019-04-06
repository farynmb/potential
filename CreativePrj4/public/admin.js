var app = new Vue({
    el: '#admin',
    data: {
      findTitle: "",
      findItem: null,
      items: [],
      title: "",
      file: null,
      addItem: null,
      maps: null, //possibly needs to be a string
      entry: "",
      addEntry: null,
      Place_name: "",
      addMap: null,
      itemDescription: "", //may need to be set to something else to make it link to the textare
    },
    created() {
      this.getItems();
    },
    computed: {
      suggestions() {
        if(this.findTitle === "")
        {
          return [];
        }
        return this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      }
    },
    methods: {
      fileChanged(event) {
      this.file = event.target.files[0]
    },
    MapfileChanged(event) {
      this.maps = event.target.files[0]
    },
    async uploadMap(){
      try{
        const formData = new FormData();
               formData.append('photo', this.maps, this.maps.name)
               let r1 = await axios.post('/api/photos', formData);
               let r2 = await axios.post('/api/maps', {
                map_path: r1.data.path,
                Name_place: this.Place_name,
               });
               this.addMap = r2.data;
             } catch (error) {
               console.log(error);
       }
    },
    async uploadEntry(){
      try{
               let r2 = await axios.post('/api/entry', {
                entry: this.entry,
               });
               this.addEntry = r2.data;
             } catch (error) {
               console.log(error);
       }
    },
    async editItem(item) {
        axios.put("/api/characters/" + item._id, {
          title: this.findItem.title,
          itemDescription: this.findItem.itemDescription,
        }).then(async (response) => {
        this.findItem = null;
        await this.getItems();
        return true;
        })
       .catch((error)=> {
        console.log(error);
      });
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/characters',  {
          title: this.title,
          itemDescription: this.itemDescription,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getItems() {
      try {
        let response = await axios.get("/api/characters");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
        axios.delete("/api/characters/" + item._id)
        .then(async (response) =>{
        this.findItem = null;
        await this.getItems();
        return true;
        }).catch(function(error) {
        console.log(error);
      })
    }
  },
  });
  
  //Install mongo on digital Ocean
  //you also have to create a server block. It is given to you all in the tutorial
  