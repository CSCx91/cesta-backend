import graphql from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import OrderType from './order';
import PostType from './post';
const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLString},
        first_name:{type: GraphQLString},
        first_name:{type: GraphQLString},
        email:{type: GraphQLString},
        list_of_bought:{
            type:OrderType,
            resolve(parent,args){
                return {};
            }
        },//order
        list_of_sold:{
            type:PostType,
            resolve(parent,args){
                return {};
            }
        },//post
        list_of_requested:{
            type:PostType,
            resolve(parent,args){
                return {};
            }
        },//post
        list_of_accepted:{
            type:OrderType,
            resolve(parent,args){
                return {};
            }
        },//order
        //rating:{type: GraphQLInt},
        //numbers_of_rate:{type: GraphQLInt},
        phone_number:{type: GraphQLString},
    })
});
export default UserType;