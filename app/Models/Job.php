<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['company', 'title_en', 'title_el', 'summary_en', 'summary_el', 'joined_at', 'left_at'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['title', 'summary', 'joined', 'left'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['joined_at', 'left_at'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'company', 'title', 'summary', 'joined', 'left'];

    /**
     * Gets the localized Title attribute.
     * @return string
     */
    public function getTitleAttribute()
    {
        return $this->getLocalized('title');
    }

    /**
     * Gets the localized Summary attribute.
     * @return string
     */
    public function getSummaryAttribute()
    {
        return $this->getLocalized('summary');
    }

    /**
     * Gets the human readable join month and year.
     * @return string
     */
    public function getJoinedAttribute()
    {
        return $this->joined_at->formatLocalized('%B %Y');
    }

    /**
     * Gets the human readable departure month and year,
     * or 'Present' if still at the job.
     * @return string
     */
    public function getLeftAttribute()
    {
        return $this->left_at->isPast() ? $this->left_at->formatLocalized('%B %Y') : 'Present';
    }
}
