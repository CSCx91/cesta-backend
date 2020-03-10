import graphql, { GraphQLBoolean } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import UserType from './user';
const CommentType = new GraphQLObjectType({
    name:'Comment',
    fields:()=>({
        id:{type:GraphQLString},
        date_of_post: {type:GraphQLDate},
        author:{
            type:UserType,
            resolve(parent,args){
                return {};
            }
        },
        context:{type:GraphQLString}
    })
});
export default CommentType;