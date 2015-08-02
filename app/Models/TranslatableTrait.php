<?php

namespace Magrippis\Models;


trait TranslatableTrait
{
    /**
     * Returns the localized version of an attribute.
     * @param $column
     * @return mixed
     */
    protected function getLocalized($column)
    {
        $localized = $this->{$column . '_' . \App::getLocale()};
        return $localized ? $localized : $this->{$column . '_' . config('app.fallback_locale')};
    }
}