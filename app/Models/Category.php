<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'name_el', 'description_en', 'description_el', 'ordering', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['name', 'description'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'name', 'description', 'featured', 'skills', 'photos'];

    /**
     * Might have many skills.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function skills()
    {
        return $this->hasMany(Skill::class);
    }

    /**
     * Might have many projects.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    /**
     * Might have many posts.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Might have many Photos.
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function photos()
    {
        return $this->morphMany(Photo::class, 'photoable');
    }

    /**
     * Gets the localized Name attribute.
     * @return string
     */
    public function getNameAttribute()
    {
        return $this->getLocalized('name');
    }

    /**
     * Gets the localized Description attribute.
     * @return string
     */
    public function getDescriptionAttribute()
    {
        return $this->getLocalized('description');
    }
}
