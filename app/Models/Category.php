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
    protected $visible = ['id', 'name', 'description', 'featured', 'skills'];

    /**
     * Might have many skills.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function skills()
    {
        return $this->hasMany('Magrippis\Models\Skill');
    }

    /**
     * Gets the localized Name attribute.
     * @return mixed
     */
    public function getNameAttribute()
    {
        return $this->getLocalized('name');
    }

    /**
     * Gets the localized Description attribute.
     * @return mixed
     */
    public function getDescriptionAttribute()
    {
        return $this->getLocalized('description');
    }
}
