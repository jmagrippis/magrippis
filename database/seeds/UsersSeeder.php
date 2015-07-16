<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Magrippis\Models\User::create(
            [
                'username' => env('DB_CONNECTION'),
                'email' => 'j@magrippis.com',
                'password' => 'this is johnny',
                'first_name' => 'Johnny',
                'last_name' => 'Magrippis',
                'level' => 5
            ]
        );
    }
}
