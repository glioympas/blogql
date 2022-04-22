import Vue from 'vue';
import VueRouter from 'vue-router';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import moment from 'moment';

import './bootstrap';
import PostList from './PostList';
import Post from './Post';
import TopicPostList from "./TopicPostList";
import AuthorPostList from "./AuthorPostList";


Vue.use(VueRouter);
Vue.use(VueApollo);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPostList
    },


    // 404
    {
        path: '*',
        name: '404',
        component: {
            template: `
                <div>
                <h3>Page not found - Let's keep it simple for this demo app</h3>
                </div>
            `
        }
    }
];

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://localhost:8000/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('timeago', (value) => moment(value).fromNow() );

new Vue({
    el: '#app',
    router,
    apolloProvider
});
