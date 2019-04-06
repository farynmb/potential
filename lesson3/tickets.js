
var express = require('express');

const bodyParser = require("body-parser");
var app = express();
app.use(express.static('public'));
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost:27017/test',{
useNewUrlParser: true
});

//SCHEMA
const ticketSchema = new mongoose.Schema({
name: String,
problem: String,
});

//Virtual Parameter
ticketSchema.virtual('id')
.get(function(){
return this._id.toHexString();
});

ticketSchema.set('toJSON',{
virtuals: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);


app.post('/api/tickets', async (req, res) => {
const ticket = new Ticket ({
name: req.body.problem
});
try {
await ticket.save();
res.send(ticket);
}catch (error) {
console.log(error);
res.sendStatus(500);
}
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));



// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});



// create a virtual paramter that turns the default _id field into id
ticketSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

// Ensure virtual fields are serialised when we turn this into a JSON object
ticketSchema.set('toJSON', {
  virtuals: true
});



app.post('/api/tickets', async (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    problem: req.body.problem
  });
  try {
    await ticket.save();
    res.send(ticket);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/tickets/:id', async (req, res) => {
  try {
    await Ticket.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
