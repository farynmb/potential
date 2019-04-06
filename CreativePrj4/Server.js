//create a portfolio that will be just like the website you did for ordinary objects.
//wedding planner app
//budgeting
//artsy
//music
/*requirments
The site uses Vue for the front end
The site uses Node, Express, and Mongo on the back end
The site uses an API between the front end and back end, and supports create, read, update, and delete operations
The site contains a footer that links to your public GitHub repository */

//Imaginary world creator

//STYLES.CSS
  //format on admin
  //format on upload
//FINISH UPLOAD PROCESS
//TURN IN
//figure out why add maps is not showing up.


const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/world', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: './public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const characterSchema = new mongoose.Schema({
  title: String,
  itemDescription: String,
  path: String,
});

const MapSchema = new mongoose.Schema({
  map_path: String,
Name_place: String,
});

const entrySchema = new mongoose.Schema({
  entry: String,
});

// Create a model for items in the museum.
const characters = mongoose.model('Characters', characterSchema);
const maps = mongoose.model('Maps', MapSchema);
const entry = mongoose.model('Entry', entrySchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});


// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/characters', async (req, res) => {
  const item = new characters({
    title: req.body.title,


    
    

    
    //Adding an item description box
//Finally, you will need to modify the back end so that the scheme has this field and so that the API for creating an item will include this.
itemDescription: req.body.itemDescription,
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/maps', async (req, res) => {
  const item = new maps({
    Name_place: req.body.Name_place,
    map_path: req.body.map_path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

  app.post('/api/entry', async (req, res) => {
    const item = new entry({
      entry: req.body.entry,
    });
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
// Get a list of all of the items in the museum.
app.get('/api/characters', async (req, res) => {
  try {
    let items = await characters.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/entry', async (req, res) => {
  try {
    let items = await entry.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/maps', async (req, res) => {
  try {
    let items = await maps.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get('/api/deleteAll', async (req, res) =>{
  try{
    await characters.remove();
    await entry.remove();
    await maps.remove();
    res.sendStatus(200);
  }catch (error){
    console.log(error);
    res.sendStatus(500);
  }
});
app.delete('/api/characters/:id', async (req, res) =>{
  try{
await characters.deleteOne({'_id':req.params.id});
res.sendStatus(200);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
});
//Finally, you will need to modify the back end so that the scheme has this field and so that the API for updating an item will include this.
app.put('/api/characters/:id', async (req, res) =>{
  try{
   let item = await Item.findOne({'_id':req.params.id});
   item.itemDescription = req.body.itemDescription; //may need to double check this...i dont think its exactly right
   item.title = req.body.title;
   item.save();
   res.sendStatus(200);
  }catch (error){
    console.log(error);
    res.sendStatus(500);
  }
});

//DELETE ENTRY
app.delete('/api/entry/:id', async (req, res) =>{
  try{
await entry.deleteOne({'_id':req.params.id});
res.sendStatus(200);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
});
//DELETE MAPS
app.delete('/api/maps/:id', async (req, res) =>{
  try{
await maps.deleteOne({'_id':req.params.id});
res.sendStatus(200);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
