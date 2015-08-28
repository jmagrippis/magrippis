<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Post extends Model implements SluggableInterface
{
    use TranslatableTrait;
    use SluggableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['content_en', 'content_el', 'content_md_en', 'content_md_el', 'title_en', 'title_el', 'published_at', 'featured'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['title', 'content', 'content_md', 'teaser', 'published_diff'];

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
    protected $visible = ['id', 'title', 'slug', 'content', 'content_md', 'teaser', 'featured', 'category_id', 'photos', 'tags', 'category', 'published_diff'];

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

    /**
     * Gets the localized Markdown Content attribute.
     * @return string
     */
    public function getContentMdAttribute()
    {
        return $this->getLocalized('content_md');
    }

    /**
     * Gets the first two paragraphs of content.
     * @return string
     */
    public function getTeaserAttribute()
    {
        $cutoff = strpos($this->content, '</p>', strpos($this->content, '</p>') + 4);
        return $cutoff ? substr($this->content, 0, $cutoff + 4) : $this->content;
    }

    /**
     * Gets the time elapsed since the post was published,
     * in a human-readable format.
     * @return string
     */
    public function getPublishedDiffAttribute()
    {
        return $this->published_at->DiffForHumans();
    }
}
