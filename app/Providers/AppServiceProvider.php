<?php

namespace Magrippis\Providers;

use Illuminate\Support\ServiceProvider;
use Magrippis\Models\Category;
use Magrippis\Models\Post;
use Magrippis\Models\Project;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Category::created(['Magrippis\Providers\AppServiceProvider', 'createDirectory']);
        Category::deleted(['Magrippis\Providers\AppServiceProvider', 'deleteDirectory']);

        Post::created(['Magrippis\Providers\AppServiceProvider', 'createDirectory']);
        Post::deleted(['Magrippis\Providers\AppServiceProvider', 'deleteDirectory']);

        Project::created(['Magrippis\Providers\AppServiceProvider', 'createDirectory']);
        Project::deleted(['Magrippis\Providers\AppServiceProvider', 'deleteDirectory']);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Check if a directory exists and create it if necessary
     * @param string $model
     */
    public static function createDirectory($model)
    {
        $path = public_path('assets/img/' . $model->getTable() . '/' . $model->id);
        if (!\File::exists($path)) {
            \File::makeDirectory($path, 0755, true);
        }
    }

    /**
     * Check if a directory exists, if so delete it
     * @param string $model
     */
    public static function deleteDirectory($model)
    {
        $path = public_path('assets/img/' . $model->getTable() . '/' . $model->id);
        if (\File::exists($path)) {
            \File::deleteDirectory(public_path($path));
        }
    }
}
