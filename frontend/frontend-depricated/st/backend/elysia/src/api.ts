// api.ts
import { Elysia } from 'elysia';
import Content from '../db/index';
// import { Schema, model, connect } from 'mongoose';
const mongoose = require('mongoose');
const uri = "mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const app = new Elysia();

app.get('/', async (req: any, res: any) => {

    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
        const content = await Content.find({});

        // if (!content) {
        //   return res.status(404).json({ message: "Content not found" })
        // }
    
        console.log(content)

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

export default app;
