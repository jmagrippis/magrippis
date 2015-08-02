<?php

use Illuminate\Database\Seeder;

class JobsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        factory(Magrippis\Models\Job::class, 7)->make()->each(function ($job) use ($faker) {
            $job->joined_at = $faker->dateTimeThisDecade($job->left_at);
            $job->save();
        });
    }
}
