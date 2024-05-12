
const mongoose = require('mongoose');
const uri = "mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha";
import Content from './db/index';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const content = await Content.find({})
    console.log(content);
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
