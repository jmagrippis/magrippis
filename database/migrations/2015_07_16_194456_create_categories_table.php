<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_en');
            $table->string('name_el');
            $table->text('description_en')->nullable();
            $table->text('description_el')->nullable();
            $table->tinyInteger('ordering')->default(1)->index();
            $table->boolean('featured')->default(0);
            $table->string('type', 64)->default('post');
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
        Schema::drop('categories');
    }
}
