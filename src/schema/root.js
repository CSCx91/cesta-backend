import graphql from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';
import UserType from './user';
import ItemType from './item';
import OrderType from './order';
import PostType from './post';
import CommentType from './comment';
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        User:{
            type: UserType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return {};
            }
        }
    }
});

export default RootQuery;