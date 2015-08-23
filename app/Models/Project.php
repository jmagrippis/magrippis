<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description_en', 'description_el', 'link', 'type', 'completed_at', 'ordering'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['description'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'name', 'description', 'link', 'skills', 'category_id', 'photos'];

    /**
     * Requires many Skills
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }

    /**
     * Belongs to a Category
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
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
     * Gets the localized Description attribute.
     * @return string
     */
    public function getDescriptionAttribute()
    {
        return $this->getLocalized('description');
    }
}
