<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'name_el', 'ordering', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['name'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'category_id', 'name', 'featured'];

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
}
