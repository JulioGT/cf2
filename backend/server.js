const express = require('express');
const fetch = require("node-fetch");
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

const app = express();

//Make request to https://blockchain.info
const blocks = async function getBlocks() {
  try {
    console.log('fetching data...');
    // const { time } = req.params;
    const response = await fetch('https://blockchain.info/blocks/1573858800000?format=json');
    const data = await response.json();
    const blocks =  data.blocks;
    // console.log(blocks);
    return blocks;
    // res.send(blocks);

  }catch(err){
    console.log(err);
  }
}

//Gets the details of every block
async function getBlockDetails(blockhash){
  try {
    console.log('fetching detail data...');
    const response = await fetch(`https://blockchain.info/rawblock/${blockhash}`);
    const data = await response.json();
    return data;

  }catch(err){
    console.log(err);
  }
}

const BlockType = new GraphQLObjectType({
  name: 'Block',
  description: 'This represents a block',
  fields: () => ({
    hash: { type: GraphQLString },
    time: { type: GraphQLFloat },
    height: { type: GraphQLInt }
  })
})

const DetailBlockType = new GraphQLObjectType({
  name: 'DetailBlock',
  description: 'This represents the detail of a specific block',
  fields: () => ({
    hash: { type: GraphQLString },
    prev_block: { type: GraphQLString },
    height: { type: GraphQLInt },
    size: { type: GraphQLInt },
    fee: { type: GraphQLInt }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',

  fields: () => ({
    blocks: {
      type: new GraphQLList(BlockType),
      description: 'List of All Blocks',
      resolve: blocks
    },
    details: {
      type: DetailBlockType,
      description: 'Shows the details of a specific block',
      args: {
        hash: { type: GraphQLString }
      },
      resolve: (parent, args) => getBlockDetails(args.hash)
    }
  })
})

const schema = new GraphQLSchema ({
  query: RootQueryType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(8888., () => console.log('Server Running'))