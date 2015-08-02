<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Project;
use Magrippis\Models\Skill;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $skills = Skill::all()->lists('id')->toArray();

        factory(Project::class, 12)
            ->create()
            ->each(function($project) use ($faker, $skills) {
                $project->skills()->sync($faker->randomElements($skills, 4));
            });
    }
}
