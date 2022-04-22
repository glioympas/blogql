<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
        <h2 class="text-4xl">
            <router-link :to="{name:'index'}" >All Posts</router-link> /  "{{ topic.name }}"</h2>
        <div v-if="$apollo.loading"></div>
        <div v-else>
            <PostListItem v-for="post in topic.posts"
                          :post="post"
                          :key="post.id"
                          class="mt-10"
            />
        </div>
    </div>
</template>


<script>

import gql from "graphql-tag";
import PostListItem from './components/PostListItem';

export default {
    components: {
        PostListItem
    },

    apollo: {
        topic: {
            query: gql`query($slug: String!) {
                    topic(slug: $slug) {
                        name
                        posts {
                            id
                            title
                            topic {
                                name
                                slug
                            }
                            user {
                                id
                                name
                            }
                        }
                    }
            }`,

            variables() {
               return {
                   slug: this.$route.params.slug
               }
            }
        }
    }
}
</script>
