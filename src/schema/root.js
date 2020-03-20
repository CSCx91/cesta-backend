import graphql, { GraphQLList } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';
import UserType from './user';
import ItemType from './item';
import OrderType from './order';
import PostType from './post';
import CommentType from './comment';
import {User, Item, Post, Order, Comment} from '../models';
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        User:{
            type: UserType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return User.findById(args.id);
            }
        },
        Users:{
            type: GraphQLList(UserType),
            resolve(parent, args){
                return User.find();
            }
        },
        Item:{
            type: ItemType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return Item.findById(args.id);
            }
        },
        Items:{
            type: GraphQLList(ItemType),
            resolve(parent, args){
                return Item.find();
            }
        },
        Post:{
            type: PostType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return Post.findById(args.id);
            }
        },
        Posts:{
            type: GraphQLList(PostType),
            resolve(parent, args){
                return Post.find();
            }
        },
        Order:{
            type: OrderType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return Order.findById(args.id);
            }
        },
        Orders:{
            type: GraphQLList(OrderType),
            resolve(parent, args){
                return Order.find();
            }
        },
        Comment:{
            type: CommentType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return Comment.findById(args.id);
            }
        },
        Comments:{
            type: GraphQLList(CommentType),
            resolve(parent, args){
                return Comment.find();
            }
        },

    }
});

export default RootQuery;