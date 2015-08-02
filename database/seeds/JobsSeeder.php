<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Magrippis\Models\Job;

class JobsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jobs = [
            [
                'company' => 'Freelance',
                'title_en' => 'Web Developer',
                'joined_at' => Carbon::createFromDate(2003, 9),
                'left_at' => Carbon::createFromDate(2037),
                'summary_en' => '<p>Freelance web development has been my main source of income ever since I
                                finished high school.</p>
                                <p>Over a decade of experience from working on it part or
                                full time. Dozens of sites created, ranging from simple ones using CMS like
                                Drupal, Wordpress & Joomla, to slightly more complicated projects
                                requiring custom themes and plugins built from scratch, to tailor-made
                                products inspired by the trends of the times: from Flash animations to
                                html5, Canvas & CSS3, from tacky web traffic counters to seamless
                                social networking integration.</p>
                                <p>From beautiful portfolio sites, to versatile e-shops, to elegant blogs,
                                from setting up cheap shared hosting servers,
                                to Virtual Private Servers, Dedicated Servers and Cloud Hosting.
                                From notepad to PhpStorm, from nothing to Laravel,
                                the charm of web design is that even when you\'ve practically done it all,
                                something new will always come up and force you to learn a new trick or skill.</p>'
            ],
            [
                'company' => 'IP Telecom',
                'title_en' => 'Database Administrator',
                'joined_at' => Carbon::createFromDate(2007, 1),
                'left_at' => Carbon::createFromDate(2007, 9),
                'summary_en' => '<p>Initially contracted for a simple month-long part-time Data Entry position,
                                hired full-time to upgrade the network and allow users to work from home,
                                then optimize and automate the process for future date entry jobs, and
                                supervise its use.</p>'
            ],
            [
                'company' => 'Hyltec',
                'title_en' => 'Software Engineer',
                'joined_at' => Carbon::createFromDate(2012, 12),
                'left_at' => Carbon::createFromDate(2013, 3),
                'summary_en' => '<p>Contracted to write the software of a machine that measures the pollution
                                of chimneys, and port it to html5/javascript for an online interactive
                                tutorial version. Also beta-tested and provided feedback for the hardware
                                itself.</p>'
            ],
            [
                'company' => 'iProject',
                'title_en' => 'Front-End & Back-End Web Developer',
                'joined_at' => Carbon::createFromDate(2014, 8, 18),
                'left_at' => Carbon::createFromDate(2015, 7, 18),
                'summary_en' => '<p>Just as I was looking for a steadier source of income as I was approaching
                                my thirties, I was recruited by the ambitious Athens-based company iProject. My
                                initial tasks mostly focused on implementing their proprietary CRM/CMS platform,
                                called Echo, on the front end, but I was quickly promoted to the team developing
                                the backend platform itself.</p>
                                <p>My experiences in iProject raised my teamwork to the next level,
                                and got me in contact with higher-profile clients.</p>'
            ],
            [
                'company' => 'Digital Academy',
                'title_en' => 'App Developer',
                'joined_at' => Carbon::createFromDate(2015, 8),
                'left_at' => Carbon::createFromDate(2037),
                'summary_en' => '<p>After an eventful year, I switched gears and joined Digital Academy,
                                a focused group offering opportunities into the exciting mobile market.
                                In addition to the front and back-end web development duties
                                that have always been my bread and butter,
                                I am also participating in iOS and Android app development.</p>'
            ]
        ];

        foreach ($jobs as $job) {
            Job::create($job);
        }

    }
}
