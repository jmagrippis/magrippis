<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['content_en', 'content_el', 'title_en', 'title_el', 'published_at', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['title', 'content'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['published_at'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'title', 'content', 'featured', 'category_id', 'photos', 'tags', 'category'];

    /**
     * Has many tags
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
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
     * Gets the localized Title attribute.
     * @return string
     */
    public function getTitleAttribute()
    {
        return $this->getLocalized('title');
    }

    /**
     * Gets the localized Content attribute.
     * @return string
     */
    public function getContentAttribute()
    {
        return $this->getLocalized('content');
    }
}
