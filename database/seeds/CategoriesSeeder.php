<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Category;
use Magrippis\Models\Skill;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $project_categories = [
            [
                'name_en' => 'Web',
                'ordering' => 1,
                'type' => 'project'
            ],
            [
                'name_en' => 'App',
                'ordering' => 2,
                'type' => 'project'
            ]
        ];

        foreach ($project_categories as $category) {
            Category::create($category);
        }

        $skill_categories = [
            [
                'name_en' => 'Front-end Development',
                'description_en' => 'The area I got into the earliest, as dealing with just what the end-user was going to see seemed like a nice, simple entry point into web development. With the advent of client-side operations however, the front-end world isn\'t restricted to making pretty, multi-browser, responsive CSS3 animations, but is, in fact, looking more exciting than ever before!',
                'ordering' => 1,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'Javascript'
                    ],
                    [
                        'name_en' => 'ECMAScript 6'
                    ],
                    [
                        'name_en' => 'Angular JS'
                    ],
                    [
                        'name_en' => 'React JS'
                    ],
                    [
                        'name_en' => 'jQuery'
                    ],
                    [
                        'name_en' => 'HTML5'
                    ],
                    [
                        'name_en' => 'CSS3'
                    ],
                    [
                        'name_en' => 'Sass'
                    ],
                    [
                        'name_en' => 'Less'
                    ],
                    [
                        'name_en' => 'Responsive Design'
                    ],
                    [
                        'name_en' => 'Twitter Bootstrap'
                    ],
                    [
                        'name_en' => 'Zurb\'s Foundation'
                    ],
                    [
                        'name_en' => 'Waypoints'
                    ],
                    [
                        'name_en' => 'End-to-end Testing'
                    ],
                    [
                        'name_en' => 'AJAX'
                    ],
                    [
                        'name_en' => 'Websockets'
                    ]
                ]
            ],
            [
                'name_en' => 'Back-end Development',
                'description_en' => 'Curious by nature, it was predetermined I\'d eventually make my way into back-end development, to find out what feeds the stuff I\'ve been tinkering with on the front-end. From launching simple blogs backed by Drupal, to creating my own custom solutions with the help of Symfony, from hard-coded data to RESTful APIs, back-end development is where I\'ve acquired the most skills over the years, and there\'s still ample room to grow!',
                'ordering' => 2,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'PHP'
                    ],
                    [
                        'name_en' => 'Python'
                    ],
                    [
                        'name_en' => 'Java'
                    ],
                    [
                        'name_en' => 'Ruby'
                    ],
                    [
                        'name_en' => 'SQL'
                    ],
                    [
                        'name_en' => 'MySQL'
                    ],
                    [
                        'name_en' => 'PostgreSQL'
                    ],
                    [
                        'name_en' => 'NoSQL'
                    ],
                    [
                        'name_en' => 'MongoDB'
                    ],
                    [
                        'name_en' => 'Laravel'
                    ],
                    [
                        'name_en' => 'Symfony'
                    ],
                    [
                        'name_en' => 'Laravel'
                    ],
                    [
                        'name_en' => 'Django'
                    ],
                    [
                        'name_en' => 'REST API'
                    ],
                    [
                        'name_en' => 'CMS'
                    ],
                    [
                        'name_en' => 'Wordpress'
                    ],
                    [
                        'name_en' => 'Drupal'
                    ],
                    [
                        'name_en' => 'Joomla'
                    ],
                    [
                        'name_en' => 'Unit Testing'
                    ],
                    [
                        'name_en' => 'Acceptance Testing'
                    ],
                    [
                        'name_en' => 'Test Driven Development'
                    ],
                    [
                        'name_en' => 'Gulp'
                    ],
                    [
                        'name_en' => 'Bower'
                    ],
                    [
                        'name_en' => 'Node.js'
                    ],
                    [
                        'name_en' => 'Caching'
                    ],
                    [
                        'name_en' => 'Redis'
                    ],
                    [
                        'name_en' => 'Queueing'
                    ]
                ]
            ],
            [
                'name_en' => 'App Development',
                'description_en' => 'The day\'s trending keyword as, besides the mobile market exploding, "everything is an App" nowadays. With gaming being my passion, I\'ve always been experimenting in app development, but it\'s fairly recently I have been able to work on commercial projects.',
                'ordering' => 3,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'iOS'
                    ],
                    [
                        'name_en' => 'Android'
                    ],
                    [
                        'name_en' => 'Objective-C'
                    ],
                    [
                        'name_en' => 'C++'
                    ],
                    [
                        'name_en' => 'C#'
                    ],
                    [
                        'name_en' => 'Cordova'
                    ],
                    [
                        'name_en' => 'Ionic'
                    ],
                    [
                        'name_en' => 'Unreal Engine'
                    ],
                    [
                        'name_en' => 'Unity3D'
                    ],
                    [
                        'name_en' => '2D Modeling'
                    ],
                    [
                        'name_en' => '3D Modeling'
                    ],
                    [
                        'name_en' => 'Rigging'
                    ],
                    [
                        'name_en' => 'Animation'
                    ],
                    [
                        'name_en' => 'Multiplatform'
                    ],
                    [
                        'name_en' => 'PC'
                    ],
                    [
                        'name_en' => 'Mac'
                    ]
                ]
            ],
            [
                'name_en' => 'API Integration',
                'description_en' => 'Everything\'s an App, but everything also has an API, and seamlessly integrating with some of them is essential for making a modern app successful. Here follow those APIs I most commonly interact with.',
                'ordering' => 4,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'Facebook'
                    ],
                    [
                        'name_en' => 'Parse'
                    ],
                    [
                        'name_en' => 'Firebase'
                    ],
                    [
                        'name_en' => 'Pusher'
                    ],
                    [
                        'name_en' => 'Google Maps'
                    ],
                    [
                        'name_en' => 'Twitter'
                    ],
                    [
                        'name_en' => 'Instagram'
                    ],
                    [
                        'name_en' => 'Foursquare'
                    ],
                    [
                        'name_en' => 'Skroutz'
                    ],
                    [
                        'name_en' => 'YouTube'
                    ],
                    [
                        'name_en' => 'LinkedIn'
                    ],
                    [
                        'name_en' => 'Flickr'
                    ]
                ]
            ],
            [
                'name_en' => 'Systems Administrator',
                'description_en' => 'Over the years I\'ve also dabbled Systems Administration, and especially server management, an area that requires rapid reflexes and a strong stomach.',
                'ordering' => 5,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'Apache'
                    ],
                    [
                        'name_en' => 'nginx'
                    ],
                    [
                        'name_en' => 'Linux'
                    ],
                    [
                        'name_en' => 'Ubuntu'
                    ],
                    [
                        'name_en' => 'CentOS'
                    ],
                    [
                        'name_en' => 'Debian'
                    ],
                    [
                        'name_en' => 'Amazon Web Services'
                    ],
                    [
                        'name_en' => 'Virtual Private Servers'
                    ],
                    [
                        'name_en' => 'Dedicated Servers'
                    ],
                    [
                        'name_en' => 'bash'
                    ],
                    [
                        'name_en' => 'Perl'
                    ],
                    [
                        'name_en' => 'Load Balancing'
                    ],
                    [
                        'name_en' => 'IT'
                    ]
                ]
            ],
            [
                'name_en' => 'Team Collaboration',
                'description_en' => 'Version Control is arguably the most important aspect in development and, thankfully, we have created quality tools that make it easy, alongside others that make general collaboration on a project a cinch, even when working remotely.',
                'ordering' => 6,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'Git'
                    ],
                    [
                        'name_en' => 'Github'
                    ],
                    [
                        'name_en' => 'Mercurial'
                    ],
                    [
                        'name_en' => 'Bitbucket'
                    ],
                    [
                        'name_en' => 'Apiary'
                    ],
                    [
                        'name_en' => 'Trello'
                    ],
                    [
                        'name_en' => 'Evernote'
                    ],
                    [
                        'name_en' => 'Skype'
                    ],
                    [
                        'name_en' => 'Hangouts'
                    ]
                ]
            ],
            [
                'name_en' => 'Program Proficiency',
                'description_en' => 'My jack-of-all-trades mentality and affinity for experiments have helped me become proficient in a ton of useful programs. Here\'s a listing of some, most of which dealing with my Graphic Design duties.',
                'ordering' => 7,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'Adobe Creative Suite'
                    ],
                    [
                        'name_en' => 'Photoshop'
                    ],
                    [
                        'name_en' => 'Illustrator'
                    ],
                    [
                        'name_en' => 'After Effects'
                    ],
                    [
                        'name_en' => 'InDesign'
                    ],
                    [
                        'name_en' => 'Microsoft Office'
                    ],
                    [
                        'name_en' => 'Word'
                    ],
                    [
                        'name_en' => 'Excel'
                    ],
                    [
                        'name_en' => 'PowerPoint'
                    ],
                    [
                        'name_en' => 'Blender'
                    ],
                    [
                        'name_en' => 'Maya'
                    ],
                    [
                        'name_en' => 'Spine'
                    ],
                    [
                        'name_en' => 'PHPStorm'
                    ],
                    [
                        'name_en' => 'Xcode'
                    ],
                    [
                        'name_en' => 'Android Studio'
                    ],
                    [
                        'name_en' => 'Sublime Text'
                    ],
                    [
                        'name_en' => 'Sequel Pro'
                    ]
                ]
            ],
            [
                'name_en' => 'Social Qualities',
                'description_en' => 'Developers are more than the sum of their skills, so it is nice to know a few of their other traits. Here are some of mine, according to my friends and colleagues!',
                'ordering' => 8,
                'type' => 'skill',
                'skills' => [
                    [
                        'name_en' => 'adaptable'
                    ],
                    [
                        'name_en' => 'determined'
                    ],
                    [
                        'name_en' => 'dreamer'
                    ],
                    [
                        'name_en' => 'open-minded'
                    ],
                    [
                        'name_en' => 'passionate'
                    ],
                    [
                        'name_en' => 'leader'
                    ],
                    [
                        'name_en' => 'creative'
                    ],
                    [
                        'name_en' => 'fast learner'
                    ],
                    [
                        'name_en' => 'multilingual'
                    ],
                    [
                        'name_en' => 'perfectionist'
                    ],
                    [
                        'name_en' => 'experimenter'
                    ]
                ]
            ]
        ];

        foreach ($skill_categories as $category) {
            $category_data = $category;
            unset($category_data['skills']);

            $skill_category = Category::create($category_data);

            foreach ($category['skills'] as $order => $skill) {
                $skill['ordering'] = $order;
                $skill_category->skills()->save(new Skill($skill));
            }
        }
    }
}
