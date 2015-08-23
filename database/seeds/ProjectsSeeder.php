<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Photo;
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
                'description_en' => 'Slick showcase site for a popular diner in the United States, including an interactive menu.',
                'link' => 'http://www.gussdi.com/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 5, 1, 2015)),
                'ordering' => 1,
                'skills' => [
                    1, 3, 7, 8, 9, 11, 13, 16, 18, 22, 23, 27, 31, 32, 39, 40, 41, 65, 74, 76, 78, 81, 93
                ],
                'photos' => [
                    [
                        'name_en' => 'Gus\' Drive-In Splash Image',
                        'location' => 'gussdi-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 1,
                'name' => 'Seagull Worldwide',
                'description_en' => 'Massive single-page-style site, with extra pages for the blog, personnel and services, as well as advanced real-time package tracking.',
                'link' => 'http://seagull.gr/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 12, 11, 2014)),
                'ordering' => 2,
                'skills' => [
                    1, 3, 7, 8, 9, 11, 13, 14, 16, 17, 18, 22, 23, 27, 32, 39, 40, 41, 65, 74, 76, 78, 81, 93
                ],
                'photos' => [
                    [
                        'name_en' => 'Seagull Worldwide Splash Image',
                        'location' => 'seagull-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 1,
                'name' => 'Silia D.',
                'description_en' => 'Modern eShop for one of the most popular shoe stores in Greece, featuring live chat and including a completely custom CMS, CRM, and order-management system.',
                'link' => 'http://www.siliad.gr/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 9, 1, 2014)),
                'ordering' => 3,
                'skills' => [
                    1, 6, 7, 8, 9, 11, 12, 16, 17, 18, 22, 23, 27, 32, 39, 40, 41, 61, 65, 67, 69, 73, 74, 76, 77, 81
                ],
                'photos' => [
                    [
                        'name_en' => 'Silia D. Splash Image',
                        'location' => 'siliad-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 1,
                'name' => 'WoodLine Saliveros',
                'description_en' => 'Venerable portfolio site for a large furniture and wallpaper company, featuring custom Wordpress plugins.',
                'link' => 'http://www.woodline.gr/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 7, 1, 2012)),
                'ordering' => 4,
                'skills' => [
                    1, 6, 7, 8, 18, 22, 23, 32, 33, 65, 74, 76, 97, 98, 99
                ],
                'photos' => [
                    [
                        'name_en' => 'WoodLine Saliveros Splash Image',
                        'location' => 'woodline-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 1,
                'name' => 'Georgantis Engineering',
                'description_en' => 'Elegant and functional portfolio site for a notable Civil Engineer based in Greece.',
                'link' => 'http://georgantis.com.gr/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 7, 1, 2013)),
                'ordering' => 5,
                'skills' => [
                    1, 6, 7, 8, 11, 12, 18, 25, 65, 74, 76, 97, 98, 99
                ],
                'photos' => [
                    [
                        'name_en' => 'Georgantis Splash Image',
                        'location' => 'georgantis-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 1,
                'name' => 'Sparta Taxi Services',
                'description_en' => 'Striking single-page-site, with tons of responsive breakpoints, live driver tracking and a slick Click2Call interface.',
                'link' => 'http://www.spartataxi.gr/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 7, 1, 2015)),
                'ordering' => 6,
                'skills' => [
                    1, 3, 7, 8, 9, 11, 16, 18, 22, 23, 27, 31, 39, 40, 41, 65, 74, 76, 78, 81, 87, 90
                ],
                'photos' => [
                    [
                        'name_en' => 'Sparta Taxi Services Splash Image',
                        'location' => 'sparta-taxi-splash.jpg'
                    ]
                ]
            ]
        ];

        foreach ($projects as $project) {
            $project_data = $project;
            unset($project_data['skills']);
            unset($project_data['photos']);
            $new_project = Project::create($project_data);

            $new_project->skills()->sync($project['skills']);

            foreach ($project['photos'] as $key => $photo) {
                $path = 'assets/img/projects/' . $new_project->id . '/' . $photo['location'];

                $image = \Image::make(base_path('resources/assets/img/projects/') . $photo['location'])
                    ->save(public_path($path), 100);

                $new_project->photos()->save(new Photo([
                    'uri' => $path,
                    'name_en' => $photo['name_en'],
                    'extension' => substr($image->mime(), strrpos($image->mime(), '/') + 1),
                    'ordering' => $key + 1
                ]));
            }

        }

        $faker = Faker\Factory::create();

        $skills = Skill::all()->lists('id')->toArray();

        factory(Project::class, 6)
            ->create(['category_id' => 2])
            ->each(function($project) use ($faker, $skills) {
                $project->skills()->sync($faker->randomElements($skills, 4));
            });
    }
}
