<?php

namespace Magrippis\Models;

use Illuminate\Database\Eloquent\Model;

class Diploma extends Model
{
    use TranslatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['institution', 'name_en', 'name_el', 'summary_en', 'summary_el', 'started_at', 'ordering'];

    /**
     * Attributes not mapped on a database column.
     *
     * @var array
     */
    protected $appends = ['institution', 'name', 'summary', 'started', 'completed'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['started_at', 'completed_at'];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'institution', 'name', 'summary', 'started', 'completed'];

    /**
     * Gets the localized Institution attribute.
     * @return string
     */
    public function getInstitutionAttribute()
    {
        return $this->getLocalized('institution');
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
     * Gets the localized Summary attribute.
     * @return string
     */
    public function getSummaryAttribute()
    {
        return $this->getLocalized('summary');
    }

    /**
     * Gets the human readable start month and year.
     * @return string
     */
    public function getStartedAttribute()
    {
        return $this->started_at->formatLocalized('%B %Y');
    }

    /**
     * Gets the human readable completion month and year,
     * @return string
     */
    public function getCompletedAttribute()
    {
        return $this->completed_at->formatLocalized('%B %Y');
    }
}
