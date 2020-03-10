import graphql, { GraphQLBoolean, GraphQLList } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';

const ItemType= new GraphQLObjectType({
    name:'Item',
    fields:()=>({
        id:{type:GraphQLString},
        price:{type: GraphQLInt},
        condition:{type: GraphQLInt},
        description:{type:GraphQLString},
        pictures:{type:GraphQLList(GraphQLString)},
        category:{type:GraphQLList(GraphQLString)},
        negotiable:{type:GraphQLBoolean}
    })
});
export default ItemType;