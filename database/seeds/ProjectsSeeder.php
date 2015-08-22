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
        $projects = [
            [
                'category_id' => 1,
                'name' => 'Gus\' Drive-In',
                'description_en' => '',
                'link' => 'http://www.gussdi.com/',
                'completed_at' => '',
                'ordering' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Seagull Worldwide',
                'description_en' => '',
                'link' => 'http://seagull.gr/',
                'completed_at' => '',
                'ordering' => 2
            ],
            [
                'category_id' => 1,
                'name' => 'Silia D.',
                'description_en' => '',
                'link' => 'http://www.siliad.gr/',
                'completed_at' => '',
                'ordering' => 3
            ],
            [
                'category_id' => 1,
                'name' => 'Woodline Saliveros',
                'description_en' => '',
                'link' => 'http://www.woodline.gr/',
                'completed_at' => '',
                'ordering' => 4
            ],
            [
                'category_id' => 1,
                'name' => 'Georgantis Engineering',
                'description_en' => '',
                'link' => 'http://georgantis.com.gr/',
                'completed_at' => '',
                'ordering' => 5
            ],
            [
                'category_id' => 1,
                'name' => 'Sparta Taxi Services',
                'description_en' => '',
                'link' => 'http://www.spartataxi.gr/',
                'completed_at' => '',
                'ordering' => 6
            ]
        ];

        $faker = Faker\Factory::create();

        $skills = Skill::all()->lists('id')->toArray();

        factory(Project::class, 12)
            ->create()
            ->each(function($project) use ($faker, $skills) {
                $project->skills()->sync($faker->randomElements($skills, 4));
            });
    }
}
