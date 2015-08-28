<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('category_id')->nullable();
            $table->foreign('category_id')
                ->references('id')->on('categories')
                ->onDelete('cascade');
            $table->string('title_en', 250);
            $table->string('title_el')->nullable();
            $table->string('slug')->unique();
            $table->text('content_en');
            $table->text('content_md_en')->nullable();
            $table->text('content_el')->nullable();
            $table->text('content_md_el')->nullable();
            $table->boolean('featured')->default(false)->index();
            $table->timestamp('published_at')->default(DB::raw('CURRENT_TIMESTAMP'))->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
