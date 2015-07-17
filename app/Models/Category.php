<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description_en', 'ordering', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['name', 'description'];

    /**
     * Might have many skills
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function skills()
    {
        return $this->hasMany('Magrippis\Models\Skill');
    }

    /**
     * Gets the localized Name attribute
     * @return mixed
     */
    public function getNameAttribute()
    {
        return $this->getLocalized('name');
    }

    /**
     * Gets the localized Description attribute
     * @return mixed
     */
    public function getDescriptionAttribute()
    {
        return $this->getLocalized('description');
    }

    /**
     * Returns the localized version of an attribute
     * @param $column
     * @return mixed
     */
    protected function getLocalized($column)
    {
        $localized = $this->{$column . '_' . \App::getLocale()};
        return $localized ? $localized : $this->{$column . '_' . config('fallback_locale')};
    }
}
