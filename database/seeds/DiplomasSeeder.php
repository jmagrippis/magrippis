<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DiplomasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $diplomas = [
            [
                'institution_en' => utf8_encode('Institute Français'),
                'name_en' => utf8_encode('Sorbonne C2: Diplôme De Langue et Littérature Françaises'),
                'started_at' => Carbon::createFromDate(1999, 9),
                'completed_at' => Carbon::createFromDate(2000, 6),
                'summary_en' => '<p>One of the most prestigious foreign language diplomas available in Greece,
                                the Sorbonne C2 is proof the student is able to attend specialty and
                                top-level education, and grants the right to enroll in French Universities.</p>'
            ],
            [
                'institution_en' => 'University of Cambridge',
                'name_en' => 'Cambridge English: Proficiency',
                'started_at' => Carbon::createFromDate(2000, 9),
                'completed_at' => Carbon::createFromDate(2001, 6),
                'summary_en' => '<p>Also known as the Certificate of Proficiency in English (CPE), it is the
                                University of Cambridge\'s most advanced qualification. It proves the
                                student has achieved an extremely high level in English.</p>'
            ],
            [
                'institution_en' => utf8_encode('Lycée Léonin'),
                'name_en' => 'High School / Lyceum',
                'started_at' => Carbon::createFromDate(2000, 9),
                'completed_at' => Carbon::createFromDate(2003, 6),
                'summary_en' => '<p>Graduated high school Honor student, with top level degrees in English and
                                French, and a 3rd place medal in a nation-wide mathematics competition.</p>'
            ],
            [
                'institution_en' => 'University of Piraeus',
                'name_en' => 'Digital Systems & Technology',
                'started_at' => Carbon::createFromDate(2003, 9),
                'completed_at' => Carbon::createFromDate(2010, 6),
                'summary_en' => '<p>The University of Piraeus is one of the leading academic institutions in
                                Greece and houses a total of 9 academic departments.</p>
                                <p>The Department of Digital Systems\' undergraduate program is the one I followed, featuring
                                courses in Software Engineering, Information Technology, Telecommunications
                                and Technology Education.</p>'
            ]
        ];

        foreach ($diplomas as $diploma) {
            \Magrippis\Models\Diploma::create($diploma);
        }
    }
}
