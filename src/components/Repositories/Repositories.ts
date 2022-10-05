import axios from "axios"
import { Comments, Posts } from "../Interfaces/interfaces";

export const PostsRepository = {
    getDetails(id: string | string[]){
        return axios.get<Posts>(`http://localhost:3000/posts/${id}`)
    },

    getPosts(){
        return axios.get<Posts[]>(`http://localhost:3000/posts`);
    },

    addPosts(dataAdd: Posts){
        return axios.post(`http://localhost:3000/posts`, dataAdd);
    },

    updatePosts(id: number, dataUpdate: Posts){
        return axios.patch(`http://localhost:3000/posts/${id}`, dataUpdate);
    },

    deletePosts(id: number){
        return axios.delete(`http://localhost:3000/posts/${id}`);
    }
}

export const CommentsRepository = {
    getComments(postId: string | string[]){
        return axios.get<Comments[]>(`http://localhost:3000/comments/`,{
            params: {
                postId: postId
            }
        })
    },

    getAllComments(){
        return axios.get<Comments[]>(`http://localhost:3000/comments`)
    },

    addComments(dataAdd: Comments){
        return axios.post(`http://localhost:3000/comments`,dataAdd)
    }
}