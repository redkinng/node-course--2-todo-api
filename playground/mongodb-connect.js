const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Call Garima',
    //   completed: false
    // }, (err, res)=>{
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(res.ops, undefined, 2));
    // })
    //
    // db.collection('Users').insertOne({
    //   name: 'Hardeep',
    //   age: 25,
    //   location: 'Hyderabad'
    // },(err, result)=>{
    //     if(err){
    //       return console.log('unable to insert to the collection');
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //
    // })

    db.close();
});
