<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20">
        <div v-if="$apollo.loading">Loading....</div>
        <div v-else-if="post">
            <div class="text-lg text-gray-600">
                By {{ post.user.name }} in links
            </div>
            <h1 class="text-5xl mt-10 font-bold mb-12">{{ post.title }}</h1>

            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">
                {{ post.body }}
            </p>

            <div class="mb-24 flex ">
                <div class="mr-6">
                    <img :src="post.user.avatar" alt="user image" class="w-16 h-16 rounded-full">
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-gray-600">Written by {{ post.user.name }}</div>
                    <div class="text-gray-600">Published in Links on May 19, 2020</div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>

import gql from "graphql-tag";

    export default {
        apollo: {
            post: {
                query: gql`query ($id: ID!) {
                    post(id: $id) {
                        title
                        body
                        user {
                            name
                            avatar
                        }
                    }
                }`,

                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },

                b() {
                    this.$router.push({
                       name: "404"
                    });
                }

            }
        }
    }
</script>
