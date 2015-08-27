<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Category;
use Magrippis\Models\Post;
use Magrippis\Models\Tag;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = factory(Category::class, 3)->create();

        factory(Post::class, 3)
            ->create()
            ->each(function ($post) use ($categories) {
                $categories->random()->posts()->save($post);
                $post->tags()->saveMany(factory(Tag::class, 5)->make()->all());
            });
    }
}
