<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'name_el'];

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
    protected $visible = ['id', 'name'];

    /**
     * Might belong to many projects
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class);
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
