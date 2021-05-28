import mongoose from'mongoose'
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

// test for pre hooks
const toySchema = mongoose.Schema({ name: String, created: Date });



toySchema.pre('save', async function () {
   let testword=await 30
  console.log(testword)
  return new Promise((resolve, reject) => {
    reject(new Error('something went wrong'));
  });
});
const Toy = mongoose.model('Toy', toySchema)
const firstoy = new Toy({ name: 'tank' })
firstoy.save(function (err, firstoy) {
  if (err) return console.error(err);
});

