<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsersSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(JobsSeeder::class);
        $this->call(DiplomasSeeder::class);
        $this->call(ProjectsSeeder::class);

        Model::reguard();
    }
}
