<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Photo extends Model implements SluggableInterface
{
    use TranslatableTrait;
    use SluggableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'name_el', 'description_en', 'description_el', 'extension', 'ordering', 'featured'];

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
    protected $visible = ['id', 'name', 'description', 'directory', 'slug', 'extension', 'photoable_type', 'featured'];

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

    /**
     * Gets the Uri for a particular \.
     * @param string $size
     * @return string
     */
    public function uri($size = '')
    {
        return $this->directory . $this->slug . $size . '.' . $this->extension;
    }
}
