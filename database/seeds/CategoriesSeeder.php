<?php

use Illuminate\Database\Seeder;
use Magrippis\Models\Category;
use Magrippis\Models\Photo;
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
                'photos' => [
                    [
                        'name_en' => 'desktop_mac',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                        'name_en' => 'Backbone.js'
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
                'photos' => [
                    [
                        'name_en' => 'settings',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                        'name_en' => 'Django'
                    ],
                    [
                        'name_en' => 'Phoenix'
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
                'photos' => [
                    [
                        'name_en' => 'phone_iphone',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                'photos' => [
                    [
                        'name_en' => 'extension',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                    ],
                    [
                        'name_en' => 'Paypal'
                    ]
                ]
            ],
            [
                'name_en' => 'Systems Administrator',
                'description_en' => 'Over the years I\'ve also dabbled Systems Administration, and especially server management, an area that requires rapid reflexes and a strong stomach.',
                'ordering' => 5,
                'type' => 'skill',
                'photos' => [
                    [
                        'name_en' => 'settings_input_component',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                'photos' => [
                    [
                        'name_en' => 'group_work',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                'photos' => [
                    [
                        'name_en' => 'keyboard',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
                'photos' => [
                    [
                        'name_en' => 'party_mode',
                        'directory' => 'material-icons',
                        'extension' => 'svg',
                        'featured' => 'true'
                    ]
                ],
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
            unset($category_data['photos']);

            $skill_category = Category::create($category_data);

            foreach ($category['skills'] as $order => $skill) {
                $skill['ordering'] = $order;
                $skill_category->skills()->save(new Skill($skill));
            }

            foreach ($category['photos'] as $photo) {
                $skill_category->photos()->save(new Photo($photo));
            }

        }

        $hobby_categories = [
            [
                'name_en' => 'Video Games',
                'description_en' => '<p>Perhaps predictably, I am a gamer. I have been for as long as I can remember. My #1 motivation for learning how to read was so I would be able to play <a href="http://en.wikipedia.org/wiki/Final_Fantasy">Final Fantasy</a> on my own. I have done non-lethal perfect runs of <a href="http://en.wikipedia.org/wiki/Metal_Gear_Solid">Metal Gear Solid</a>, I have role-played forgetful wizards in <a href="http://en.wikipedia.org/wiki/Ultima_Online">Ultima Online</a> and I have rescued almost as many <a href="http://en.wikipedia.org/wiki/Lemmings_(video_game)">Lemmings</a> as I have blown up.</p>
<p>To me, video games are this perfect storm of writing, direction, art, <em>adventure</em>... and they top all of it off with <em>unprecedented</em> interactivity with the audience. You <strong>are</strong> the protagonist. It\'s definitely my favorite medium and it always fascinated me, even when I could not put my finger on the why.</p>
<p>In addition to being a beloved pastime, video games always seem to be on the verge of crossing over to my professional life for good: I was being paid to write video game reviews once upon a time, and I do sometimes produce the <a href="http://www.youtube.com/watch?v=GmWuGis2Y5k">JRT Show</a>, an in-depth gaming review show with comedy sketches that I love, but is too time-consuming to do regularly. I have contributed code & assets to small projects, and I\'m always tinkering with silly simple games.</p>
<p>Of course, with the power of <a href="https://unity3d.com/">Unity</a> and the <a href="https://www.unrealengine.com/">Unreal Engine</a>, those timid gaming forays have been looking increasingly professional!</p>
<p>My ultimate dream remains to be a part of a AAA game. I was in the credits of <a href="https://twitter.com/TimOfLegend">Tim Schafer</a>\'s <a href="http://en.wikipedia.org/wiki/Broken_Age">Broken Age</a> as a backer, so we are getting somewhere!</p>
<p>As a fun trivia, my favorite games would be <a href="http://en.wikipedia.org/wiki/Super_Metroid">Super Metroid</a> from the "retro" era, and <a href="http://en.wikipedia.org/wiki/Batman:_Arkham_Asylum">Batman: Arkham Asylum</a> for the contemporary one. <a href="http://en.wikipedia.org/wiki/Rayman_Origins">Rayman Origins</a> would probably be the game I\'d love to have made the most.</p>',
                'ordering' => 1,
                'type' => 'hobby',
                'photos' => [
                    [
                        'name_en' => 'Life as a point and click adventure game!',
                        'featured' => true,
                        'location' => 'adventure.jpg'
                    ],
                    [
                        'name_en' => 'From the Assassin\s Creed III review.',
                        'featured' => false,
                        'location' => 'talkingSmile.jpg'
                    ],
                    [
                        'name_en' => 'Directing the sketches for a review of Punch-Out!! for the Nintendo Wii!',
                        'featured' => false,
                        'location' => 'directing.jpg'
                    ],
                    [
                        'name_en' => 'No wonder quicktime events annoy so many people!',
                        'featured' => false,
                        'location' => 'tigerQuicktime.jpg'
                    ]
                ]
            ],
            [
                'name_en' => 'Photography & Directing',
                'description_en' => '<p>Although I don\'t take nearly as many pictures as <a href="https://www.flickr.com/photos/78933929@N02/">my talented sister</a>, I do have an equally soft spot for photography. I relish at the technical aspects of it, and enjoy going out there to capture that delicious bokeh!</p>
<p>Photography is also sometimes part of the package when creating websites for businesses, with my trusty Canon called up to bat when the provided product and showcase photos aren\'t up to quality standards, or when a fellow actor or model is looking for someone to shoot for their photo book.</p>
<p>Directing is a somewhat related interest of mine that I\'d like to do more of: my typical "shower thoughts" are related to apps, but sometimes they are premises; most of <em>those</em> would be great for video games, but some translate best as a 5 minute short or a small web series, and I jot them down to shoot at my own time. I am especially fond of projects like that, as they are a great way to directly interact with fresh talent, or even bring your own friends into the mix!</p>',
                'ordering' => 2,
                'type' => 'hobby',
                'photos' => [
                    [
                        'name_en' => 'A ray of sunlight is all it takes for a smile',
                        'featured' => true,
                        'location' => 'smiling-in-the-forest.jpg'
                    ],
                    [
                        'name_en' => 'Posing by the sea, against the waves',
                        'featured' => false,
                        'location' => 'posing-by-the-sea.jpg'
                    ],
                    [
                        'name_en' => 'Sun, fountains and cafeterias: the good life.',
                        'featured' => false,
                        'location' => 'sun-fountains-cafeterias.jpg'
                    ],
                    [
                        'name_en' => 'A touch of color...',
                        'featured' => false,
                        'location' => 'a-touch-of-color.jpg'
                    ]
                ]
            ],
            [
                'name_en' => 'Beach Volleyball',
                'description_en' => '<p>If loving video games is expected of me, and being into photography sounds fitting, my interest in fitness & sports sometimes throws people off. Fact is, I enjoy sports about as much as I love spending hours in front of a monitor tweaking code!</p>
<p>I\'ve went through basketball phases and football phases but, at the twilight of my college years, I found <em>the</em> sport for me: <strong>Beach Volleyball</strong>. It combines qualities from both team and solo sports, power as well as intelligence, you don\'t need to be exceptionally tall but you do need to be fast and tireless, it\'s relatively safe, and it\'s a <em>phenomenal</em> workout! And you only need four players, so it\'s pretty easy to organize a quick match. What else could I possibly need?</p>
<p>Hooked from the get go, I have now reached a point where I don\'t only play in the stereotypical sunny beaches that immediately come to mind when one thinks about this sport, but also in harsh winter tournaments during unimaginable rainstorms; and I am loving every minute of it.</p>',
                'ordering' => 3,
                'type' => 'hobby',
                'photos' => [
                    [
                        'name_en' => 'You\'re supposed to use two hands for every save, but damn if one-handed ones don\'t look impressive!',
                        'featured' => true,
                        'location' => 'side-jump-save.jpg'
                    ],
                    [
                        'name_en' => 'We took the 2014 Beach Volleyleague Trophy home that day!',
                        'featured' => false,
                        'location' => 'mens-gold.jpg'
                    ],
                    [
                        'name_en' => 'Blocking isn\'t my strongest suit, but it\'s known to happen',
                        'featured' => false,
                        'location' => 'block.jpg'
                    ],
                    [
                        'name_en' => 'One of the many medals I\'ve won with my fantastic partner, in mixed and in life, Krystallia Kapeni',
                        'featured' => false,
                        'location' => 'mixed-gold.jpg'
                    ]
                ]
            ]
        ];

        foreach ($hobby_categories as $category) {
            $category_data = $category;
            unset($category_data['photos']);

            $new_category = Category::create($category_data);

            foreach ($category['photos'] as $key => $photo) {
                $image = \Image::make(base_path('resources/assets/img/categories/hobbies/') . $photo['location']);

                $new_photo = Photo::create([
                    'name_en' => $photo['name_en'],
                    'featured' => $photo['featured'],
                    'ordering' => $key + 1,
                    'extension' => substr($image->mime(), strrpos($image->mime(), '/') + 1)
                ]);

                $new_photo->directory = 'assets/img/categories/' . $new_category->id . '/';
                $new_category->photos()->save($new_photo);

                $image->save(public_path($new_photo->uri()), 100)
                    ->fit(572, 383)
                    ->save(public_path($new_photo->uri('@thumb')));
            }
        }
    }
}