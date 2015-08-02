<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiplomasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diplomas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('institution_en');
            $table->string('institution_el')->nullable();
            $table->string('name_en');
            $table->string('name_el')->nullable();
            $table->text('summary_en');
            $table->text('summary_el')->nullable();
            $table->timestamp('started_at')->index();
            $table->timestamp('completed_at')->index();
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
        Schema::drop('diplomas');
    }
}
