<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('photoable_id');
            $table->string('photoable_type');
            $table->string('name_en')->nullable();
            $table->string('name_el')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_el')->nullable();
            $table->string('extension', 8);
            $table->tinyInteger('ordering')->default(1)->index();
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
        Schema::drop('photos');
    }
}
