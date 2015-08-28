<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Category;
use Magrippis\Models\Photo;
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
        $category = Category::create([
            'name_en' => 'Personal',
            'description_en' => 'Encompasses the posts touching upon more personal content.',
            'type' => 'post'
        ]);

        $post = Post::create([
            'category_id' => $category->id,
            'title_en' => 'Here we go again!',
            'content_en' => '<p>
	Welcome to the latest version of my showcase site! It\'s no secret that I like to, well, <em>tinker</em> and it was high time I got rid of that old foundation to build something new, something exciting, something <em>updateable</em>, so I won\'t have to start from scratch whenever I have a stroke of inspiration on my downtime!
</p>

<p>
	In theory, this allows me to highlight the freshest developments in the business, such as the <strong>Angular Material</strong> module that\'s almost at version 1, or the rapidly maturing <strong>Laravel</strong> framework, while being able to nix the features that don\'t work out or are made obsolete by competing technologies. Who knows, maybe in a few months I\'ll have to swap out <strong>hhvm</strong> for <strong>PHP 7</strong>!
</p>

<p>
	Of course, most of the changes will be significantly tamer. I wanted to get a modern site up as soon as possible, so there are plenty of small features left on the wishlist, such as routing animations, or a demo for WebSockets, possibly via the contact form. Your feedback is more than welcome and you can even peruse and modify the code on <a href="https://github.com/Magrippinho/magrippis">GitHub</a>!
</p>

<p>
	For this part of the site specifically, <em>Tinkering Thoughts</em>, I would like it to be a place where I discuss my app-developing adventures, as well as the occasional outlet for personal issues. I am hoping for a post once a week; it\'s only a concern of time available, as I definitely have plenty of subjects I\'d like to touch upon... This project alone could provide content for months!
</p>

<p>Besides, without plenty of posts, why would I even bother with the filtering functions on the blog index? :-D</p>',
            'content_md_en' => 'Welcome to the latest version of my showcase site! It\'s no secret that I like to, well, *tinker* and it was high time I got rid of that old foundation to build something new, something exciting, something *updateable*, so I won\'t have to start from scratch whenever I have a stroke of inspiration on my downtime!

In theory, this allows me to highlight the freshest developments in the business, such as the **Angular Material** module that\'s almost at version 1, or the rapidly maturing **Laravel** framework, while being able to nix the features that don\'t work out or are made obsolete by competing technologies. Who knows, maybe in a few months I\'ll have to swap out **hhvm** for **PHP 7**!

Of course, most of the changes will be significantly tamer. I wanted to get a modern site up as soon as possible, so there are plenty of small features left on the wishlist, such as routing animations, or a demo for WebSockets, possibly via the contact form. Your feedback is more than welcome and you can even peruse and modify the code on [GitHub][]!

For this part of the site specifically, **Tinkering Thoughts**, I would like it to be a place where I discuss my app-developing adventures, as well as the occasional outlet for personal issues. I am hoping for a post once a week; it\'s only a concern of time available, as I definitely have plenty of subjects I\'d like to touch upon... This project alone could provide content for months!

Besides, without plenty of posts, why would I even bother with the filtering functions on the blog index? :-D

[github]: https://github.com/Magrippinho/magrippis'
        ]);

        $post->tags()->saveMany([
            new Tag(['name_en' => 'experiment']),
            new Tag(['name_en' => 'meta']),
            new Tag(['name_en' => 'update'])
        ]);

        $photo = Photo::create([
            'name_en' => 'Creating something with a bang!',
            'ordering' => 1,
            'featured' => true
        ]);

        $photo->uri = 'assets/img/posts/' . $photo->slug . '.jpg';

        $image = \Image::make(base_path('resources/assets/img/posts/new-beginnings.jpg'))
            ->save(public_path($photo->uri), 100);

        $photo->extension = substr($image->mime(), strrpos($image->mime(), '/') + 1);

        $post->photos()->save($photo);
    }
}
