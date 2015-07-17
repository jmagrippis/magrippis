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
        $faker = Faker\Factory::create();

        foreach (range(1, 5) as $order) {
            $category = Category::create(
                [
                    'name_en' => rtrim($faker->sentence(3), '.'),
                    'description_en' => $faker->paragraph(4),
                    'ordering' => $order,
                    'type' => 'skill'
                ]);

            foreach (range(1, 8) as $skills_order) {
                $category->skills()->save(new Skill(
                    [
                        'name_en' => $faker->word,
                        'featured' => mt_rand(1, 100) > 70,
                        'ordering' => $skills_order
                    ]));
            }
        }
    }
}
