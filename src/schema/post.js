import graphql, { GraphQLBoolean, GraphQLList } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import ItemType from './item';
import UserType from './user';
import CommentType from './comment';
const PostType = new GraphQLObjectType({
    name:'Post',
    fields:()=>({
        id:{type:GraphQLString},
        view: {type:GraphQLInt},
        date_of_post: {type:GraphQLDate},
        expore_date: {type:GraphQLDate},
        post_type: {type: GraphQLBoolean},
        item:{
            type: ItemType,
            resolve(parent,args){
                return {};
            }
        },//
        poster:{
            type: UserType,
            resolve(parent,args){
                return {};
            }
        },//
        comments:{
            type: new GraphQLList(CommentType),
            resolve(parent,args){
                return {};
            }
        },//
        idDone:{type: GraphQLBoolean}
    })
});
export default PostType;