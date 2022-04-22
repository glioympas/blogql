<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
       'title' => $faker->sentence(),
       'body' => $faker->text(),
       'user_id' => \App\User::query()->inRandomOrder()->first()->id,
       'topic_id' => \App\Topic::query()->inRandomOrder()->first()->id
    ];
});
