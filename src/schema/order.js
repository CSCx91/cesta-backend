import graphql, { GraphQLBoolean } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import UserType from './user';
import ItemType from './item';
const OrderType = new GraphQLObjectType({
    name:'Order',
    fields:()=>({
        id:{type:GraphQLString},
        date: {type:GraphQLDate},
        post_type: {type: GraphQLBoolean},
        item:{
            type:ItemType,
            resolve(parent,args){
                return {};
            }
        },//
        buyer:{
            type:UserType,
            resolve(parent,args){
                return {};
            }
        },//
        seller:{
            type:UserType,
            resolve(parent,args){
                return {};
            }
        },//
        successful:{type:GraphQLBoolean}
    })
});
export default OrderType;