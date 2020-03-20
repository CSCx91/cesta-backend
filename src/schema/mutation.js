import graphql from 'graphql';
import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLBoolean} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import UserType from './user';
import ItemType from './item';
import OrderType from './order';
import PostType from './post';
import CommentType from './comment';
import {User, Comment, Item, Order, Post} from '../models';
const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addItem:{
            type: ItemType,
            args:{
                title:{type:GraphQLString},
                condition:{type: GraphQLString},
                price:{type:GraphQLInt},
                description:{type: GraphQLString},
                pictures:{type:GraphQLList(GraphQLString)},
                category:{type:GraphQLList(GraphQLString)},
                negotiable:{type:GraphQLBoolean}
            },
            resolve(parent,args){
                let item=new Item({
                    title: args.title,
                    condition: args.condition,
                    description: args.description,
                    price: args.price,
                    pictures: args.pictures,
                    category: args.category,
                    negotiable: args.negotiable
                });
                return item.save();
            }
        },
        addUser:{
            type: UserType,
            args:{
                first_name:{type:GraphQLString},
                last_name:{type: GraphQLString},
                email:{type:GraphQLString},
                phone_number:{type:GraphQLString}
            },
            resolve(parent,args){
                let user=new User({
                    first_name: args.first_name,
                    last_name: args.lastname,
                    email: args.email,
                    phone_number: args.phone_number,
                    list_of_boughtIds:[],
                    list_of_soldIds:[],
                    list_of_requestedIds:[],
                    list_of_acceptedIds:[]
                });
                return user.save();
            }
        },
        addPost:{
            type: PostType,
            args:{
                date_of_post: {type:GraphQLDate},
                expore_date: {type:GraphQLDate},
                post_type: {type: GraphQLBoolean},
                itemId: {type: GraphQLString},
                posterId: {type: GraphQLString}           
            },
            resolve(parent,args){
                let post=new Post({
                    view:0,
                    date_of_post:args.date_of_post,
                    post_type:args.post_type,
                    itemId:args.itemId,
                    expire_date:args.expire_date,
                    posterId:args.posterId,
                    commentIds:[],
                    isDone:false
                });
                return post.save();
            }
        },
        addComment:{
            type: CommentType,
            args:{
                date_of_post: {type:GraphQLDate},
                authorId: {type: GraphQLString},
                postId: {type: GraphQLString},
                context: {type: GraphQLString}
            },
            resolve(parent,args){
                let comment=new Comment({
                    date_of_post: args.date_of_post,
                    authorId: args.authorId,
                    postId: args.postId,
                    context: args.context
                });
                return comment.save((error,comment)=>{
                    Post.findByIdAndUpdate(args.postId,{
                        $push:{"commentIds":comment.id}  
                    },(err,model)=>{
                        if (err) console.log(error);
                        return model;
                    })

                });
            }
        },
        resolvePost:{
            type: OrderType,
            args:{
                postId:{type: GraphQLString},
                date:{type: GraphQLDate},
                acceptorId: {type: GraphQLString}
            },
            resolve(parent, args){
                let post=Post.findById(postId);
                let order=new Order({
                    date: args.date,
                    post_type: post.post_type,
                    itemId: post.itemId,
                    buyerId: (post.post_type)?(args.acceptorId):(post.posterId),
                    seller: (post.post_type)?(post.posterId):(args.acceptorId),
                    successful:true

                });
                post.update({"isDone":true});
                return order.save();
            }
        }
    }
});

export default Mutation;
