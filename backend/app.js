const redis = require('redis');
var request = require('request');
const express = require('express');
const fetch = require("node-fetch");
// const heapProfile = require('heap-profile');

const app = express();
//Default ports
const port = 6000;
const redisPort = 6379;

const client = redis.createClient(redisPort); 

//FOR MEMORY LEAK PURPOSES
/********************
heapProfile.start();
 
// Write a snapshot to disk every 10 minutes
// You can then open the file and see what's going on with your server.
setInterval(() => {
  heapProfile.write((err, filename) => {
    console.log(`heapProfile.write. err: ${err} filename: ${filename}`);
  });
}, 600000).unref();
*/

//Make request to https://blockchain.info
let getFacts = async () => {
  try {
    console.log('fetching data...');
    const response = await fetch('https://blockchain.info/blocks/1573858800000?format=json');
    const data = await response.json();
    
    return data;

  }catch(err){
    console.log(err);
  }
}

//Cache middleware
function cache(req, res, next){
  const { time } = req.params;
  client.get(time, (err, data) => {
    if(err) throw err;
    
    if(data !== null){
      res.send(data);
    } else {
      next();
    }
  })
}

app.get('/', cache, (req, res) => res.send('Hallo'));

//from FRONTEND: sends data back to the Dashboard table
//app.get('/getblocks/:time', cache, getBlocks); 
app.get('/getblocks/:time', async (req, res) => {
  let responseFact = await getFacts();
  console.log(responseFact);
  res.send(responseFact);
});

// app.get('/getblocks', (req, res) => {
  //MEMORY LIKING: UNCOMMENT FOR DEMONSTRATION PURPOSES ONLY
  // const garbage = new Array(100000);  
//   var options = {
//     url: 'https://blockchain.info/blocks/1573858800000?format=json'
//   };

//   request(options, (error, response, body) => {
//     if(!error && response.statusCode == 200) {
//       res.send(body);
//     } else {
//       console.log(error);
//     }
//   })
// })

app.get('/getblockdetails/:blockhash', (req, res) => {
  var options = {
    url: `https://blockchain.info/rawblock/${req.params.blockhash}`
  };

  request(options, (error, response, body) => {
    if(!error && response.statusCode == 200) {
      res.send(body);
    } else {
      console.log(error);
    }
  })
})

app.listen(port, () => console.log(`Hallo, hören auf Anschluss: ${port}`));