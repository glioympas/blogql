<template>
    <div>
        <router-link :to="{name: 'post', params: { id: post.id } }">
            <div class="text-2xl pb-3 font-semibold hover:underline">{{ post.title }}</div>
        </router-link>
        <div class="text-sm text-gray-600">
             <router-link :to="{name:'author', params: { id: post.user.id } }">
                 by {{ post.user.name }}
             </router-link> &nbsp;in <router-link class="hover:underline" :to="{name: 'topic', params: {slug: post.topic.slug}}">
            {{ post.topic.name}}
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>
