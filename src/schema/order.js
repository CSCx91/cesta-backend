import graphql, { GraphQLBoolean } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import UserType from './user';
import ItemType from './item';
import {Item, User} from '../models';
const OrderType = new GraphQLObjectType({
    name:'Order',
    fields:()=>({
        id:{type:GraphQLString},
        date: {type:GraphQLDate},
        post_type: {type: GraphQLBoolean},
        item:{
            type:ItemType,
            resolve(parent,args){
                return Item.findById(parent.itemId);
            }
        },//
        buyer:{
            type:UserType,
            resolve(parent,args){
                return User.findById(parent.buyerId);
            }
        },//
        seller:{
            type:UserType,
            resolve(parent,args){
                return User.findById(parent.sellerId);
            }
        },//
        successful:{type:GraphQLBoolean}
    })
});
export default OrderType;