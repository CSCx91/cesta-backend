import graphql, { GraphQLList } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import OrderType from './order';
import PostType from './post';
import {Post, Order} from '../models';
const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLString},
        first_name:{type: GraphQLString},
        first_name:{type: GraphQLString},
        email:{type: GraphQLString},
        list_of_bought:{
            type:GraphQLList(OrderType),
            resolve(parent,args){
                return parent.list_of_boughtIds.map(id=>Order.findById(id));
            }
        },//order
        list_of_sold:{
            type:GraphQLList(PostType),
            resolve(parent,args){
                return parent.list_of_soldIds.map(id=>Post.findById(id));
            }
        },//post
        list_of_requested:{
            type:GraphQLList(PostType),
            resolve(parent,args){
                return parent.list_of_requestedIds.map(id=>Post.findById(id));
            }
        },//post
        list_of_accepted:{
            type:GraphQLList(OrderType),
            resolve(parent,args){
                return parent.list_of_acceptedIds.map(id=>Order.findById(id));
            }
        },//order
        //rating:{type: GraphQLInt},
        //numbers_of_rate:{type: GraphQLInt},
        phone_number:{type: GraphQLString},
    })
});
export default UserType;