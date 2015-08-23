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
            //Websites
            [
                'category_id' => 1,
                'name' => 'Gus\' Drive-In',
                'description_en' => 'Slick showcase site for a popular diner in the United States, including an interactive menu.',
                'link' => 'http://www.gussdi.com/',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 5, 1, 2015)),
                'ordering' => 1,
                'skills' => [
                    1,
                    3,
                    7,
                    8,
                    9,
                    11,
                    13,
                    16,
                    18,
                    22,
                    23,
                    27,
                    31,
                    32,
                    39,
                    40,
                    41,
                    65,
                    74,
                    76,
                    78,
                    81,
                    93
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
                    1,
                    3,
                    7,
                    8,
                    9,
                    11,
                    13,
                    14,
                    16,
                    17,
                    18,
                    22,
                    23,
                    27,
                    32,
                    39,
                    40,
                    41,
                    65,
                    74,
                    76,
                    78,
                    81,
                    93
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
                    1,
                    6,
                    7,
                    8,
                    9,
                    11,
                    12,
                    16,
                    17,
                    18,
                    22,
                    23,
                    27,
                    32,
                    39,
                    40,
                    41,
                    61,
                    65,
                    67,
                    69,
                    73,
                    74,
                    76,
                    77,
                    81
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
                    1,
                    6,
                    7,
                    8,
                    18,
                    22,
                    23,
                    32,
                    33,
                    65,
                    74,
                    76,
                    97,
                    98,
                    99
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
                    1,
                    6,
                    7,
                    8,
                    11,
                    12,
                    18,
                    25,
                    65,
                    74,
                    76,
                    97,
                    98,
                    99
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
                    1,
                    3,
                    7,
                    8,
                    9,
                    11,
                    16,
                    18,
                    22,
                    23,
                    27,
                    31,
                    39,
                    40,
                    41,
                    65,
                    74,
                    76,
                    78,
                    81,
                    87,
                    90
                ],
                'photos' => [
                    [
                        'name_en' => 'Sparta Taxi Services Splash Image',
                        'location' => 'sparta-taxi-splash.jpg'
                    ]
                ]
            ],
            //Apps
            [
                'category_id' => 2,
                'name' => 'AgedUp',
                'description_en' => 'Promotional awareness app for people with Alzheimer\'s disease and their caretakers, including useful info and brain training exercises.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 8, 15, 2015)),
                'ordering' => 1,
                'skills' => [
                    1,
                    2,
                    3,
                    7,
                    8,
                    9,
                    11,
                    18,
                    22,
                    23,
                    28,
                    31,
                    36,
                    37,
                    39,
                    40,
                    41,
                    45,
                    46,
                    50,
                    51,
                    75,
                    76,
                    77,
                    87,
                    90,
                    97,
                    98
                ],
                'photos' => [
                    [
                        'name_en' => 'AgedUp Tips Screen with open menu and one exercise screen',
                        'location' => 'aged-up-tips-and-exercises.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 2,
                'name' => 'Taxaki',
                'description_en' => 'Premiere taxi-hailing app for various areas in Greece, with driver stats and reviews, as well as live tracking.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 7, 1, 2015)),
                'ordering' => 1,
                'skills' => [
                    1,
                    6,
                    7,
                    8,
                    11,
                    12,
                    16,
                    17,
                    18,
                    20,
                    22,
                    23,
                    27,
                    31,
                    32,
                    39,
                    40,
                    41,
                    45,
                    46,
                    47,
                    50,
                    65,
                    74,
                    76,
                    78,
                    87,
                    90,
                    91
                ],
                'photos' => [
                    [
                        'name_en' => 'Taxaki Driver Select screen and map screen with taxi location',
                        'location' => 'taxaki-drivers-and-map.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 2,
                'name' => 'Pouliseto',
                'description_en' => 'Fast and easy bartering app, allowing you to take a photo of any item you own, and sell it quickly without commission fees.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 6, 15, 2015)),
                'ordering' => 1,
                'skills' => [
                    1,
                    6,
                    7,
                    8,
                    11,
                    12,
                    14,
                    16,
                    18,
                    20,
                    22,
                    23,
                    27,
                    31,
                    32,
                    39,
                    40,
                    41,
                    42,
                    45,
                    46,
                    47,
                    61,
                    74,
                    76,
                    77,
                    87,
                    90
                ],
                'photos' => [
                    [
                        'name_en' => 'Pouliseto Category Index screen and Add Listing screen',
                        'location' => 'pouliseto-splash-and-add-listing.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 2,
                'name' => 'Frontier Fighter',
                'description_en' => 'Multiplatform 2D physics-based shoot-em-up, featuring vector graphics and detailed procedural backgrounds.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 8, 1, 2014)),
                'ordering' => 1,
                'skills' => [
                    45,
                    49,
                    53,
                    54,
                    58,
                    59,
                    60,
                    97,
                    98
                ],
                'photos' => [
                    [
                        'name_en' => 'Frontier Fighter Splash Screen',
                        'location' => 'frontier-fighter-splash.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 2,
                'name' => 'Hyltec Leakage Tester',
                'description_en' => 'Chimney and flue leakage tester using software coded in C, complete with a web-based interactive tutorial counterpart for training.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 3, 1, 2014)),
                'ordering' => 1,
                'skills' => [
                    1,
                    6,
                    7,
                    8,
                    11,
                    18,
                    74,
                    76,
                    79
                ],
                'photos' => [
                    [
                        'name_en' => 'Hyltec Leakage Checker Web Tutorial Interface',
                        'location' => 'hyltec-leakage-checker-interface.jpg'
                    ]
                ]
            ],
            [
                'category_id' => 2,
                'name' => 'Design Your Own',
                'description_en' => 'Versatile app using html5 Canvas, for clothing customization and printing preset or custom designs on clothes and business cards.',
                'completed_at' => date('Y-m-d G:i:s', mktime(0, 0, 0, 12, 1, 2013)),
                'ordering' => 1,
                'skills' => [
                    1,
                    6,
                    7,
                    8,
                    11,
                    12,
                    16,
                    18,
                    74,
                    76,
                    79,
                    93,
                    97,
                    98
                ],
                'photos' => [
                    [
                        'name_en' => 'Design Your Own Web App Interface',
                        'location' => 'design-your-own-interface.jpg'
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
    }
}
