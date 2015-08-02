<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'name_el', 'description_en', 'description_el', 'extension', 'ordering'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['name', 'description'];

    /**
     * Belongs to one of various different Models.
     */
    public function photoable()
    {
        return $this->morphTo();
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
