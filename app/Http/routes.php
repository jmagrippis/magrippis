<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'api/v1'], function () {

    Route::resource('categories', 'CategoriesController', ['only' => ['index', 'show']]);
    Route::resource('skills', 'SkillsController', ['only' => ['index']]);

});

Route::any('{path?}', function () {
    return view('angular');
})->where('path', '.+');