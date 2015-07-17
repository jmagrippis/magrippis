<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [
                'username' => env('ADMIN_USERNAME'),
                'email' => env('ADMIN_EMAIL'),
                'password' => env('ADMIN_PASSWORD'),
                'first_name' => env('ADMIN_FIRST_NAME'),
                'last_name' => env('ADMIN_LAST_NAME'),
                'level' => 5
            ]
        );
    }
}
