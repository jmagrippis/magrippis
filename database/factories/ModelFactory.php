<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Magrippis\Models\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => $faker->word . $faker->word,
        'remember_token' => str_random(10),
    ];
});

$factory->define(Magrippis\Models\Job::class, function (Faker\Generator $faker) {
    return [
        'company' => $faker->company,
        'title_en' => $faker->bs,
        'summary_en' => '<p>' . $faker->paragraph . '</p>',
        'left_at' => $faker->dateTimeThisDecade()
    ];
});

$factory->define(Magrippis\Models\Diploma::class, function (Faker\Generator $faker) {
    return [
        'institution_en' => $faker->company,
        'name_en' => $faker->bs,
        'summary_en' => '<p>' . $faker->paragraph . '</p>',
        'completed_at' => $faker->dateTimeThisDecade()
    ];
});

$factory->define(Magrippis\Models\Project::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->company,
        'description_en' => $faker->paragraph(),
        'link' => $faker->url,
        'completed_at' => $faker->dateTimeThisDecade(),
        'category_id' => $faker->numberBetween(1, 2)
    ];
});

$factory->define(Magrippis\Models\Post::class, function (Faker\Generator $faker) {
    return [
        'title_en' => $faker->company,
        'content_en' => '<p>' . $faker->paragraph() . '</p>' .
            '<p>' . $faker->paragraph() . '</p>' .
            '<p>' . $faker->paragraph() . '</p>',
        'published_at' => $faker->dateTimeThisYear()
    ];
});

$factory->define(Magrippis\Models\Tag::class, function (Faker\Generator $faker) {
    return [
        'name_en' => $faker->word,
    ];
});

$factory->define(Magrippis\Models\Category::class, function (Faker\Generator $faker) {
    return [
        'name_en' => $faker->word . ' ' . $faker->word,
        'description_en' => $faker->paragraph(),
        'type' => 'post'
    ];
});
