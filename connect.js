const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = "mongodb+srv://bansalsid2000:My%64mongodb7@cluster0.1q28hsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

async function connectMongoDB(url)
{



    //   async function run() {
    //     try {
    //       // Connect the client to the server
    //        await client.connect();
    //       // Send a ping to confirm a successful connection
    //       await client.db("admin").command({ ping: 1 });
    //       console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //     } finally {
    //       // Ensures that the client will close when you finish/error
    //       await client.close();
    //     }
    //   }
    //   run().catch(console.dir);
    
    return mongoose.connect(url);

}

module.exports = {connectMongoDB, }