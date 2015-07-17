<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'ordering', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['name'];

    /**
     * Belongs to a category
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo('Magrippis\Models\Category');
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
