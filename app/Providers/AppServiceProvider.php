<?php

namespace Magrippis\Providers;

use Illuminate\Support\ServiceProvider;
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
        Project::created(function ($model) {
            $path = public_path('assets/img/projects/' . $model->id);
            if (!\File::exists($path)) {
                \File::makeDirectory($path, 0755, true);
            }
        });

        Project::deleted(function ($model) {
            $path = public_path('assets/img/projects/' . $model->id);
            if (\File::exists($path)) {
                \File::deleteDirectory(public_path('assets/img/projects/' . $model->id));
            }
        });
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
}
