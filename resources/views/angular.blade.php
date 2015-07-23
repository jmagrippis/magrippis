<!doctype html>
<html lang="{{ App::getLocale() }}">
<head>
    <meta charset="UTF-8">
    <title>Johnny Magrippis: Developer, designer, determined gamer</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{ elixir('assets/css/magrippis.css') }}">
</head>
<body>
<div ng-app="magrippis" ng-controller="HomeController as homeC" layout="column" layout-fill>
    @include('partials.toolbar')
    <md-content class="md-padding" layout="column" layout-align="center center">
        <div class="callout">
            <md-content>
                Find the developer you deserve.
                <md-chips ng-model="searchTags" md-autocomplete-snap md-require-match>
                    <md-autocomplete
                            md-selected-item="selectedSkill"
                            md-search-text="searchText"
                            md-search-text-change=""
                            md-items="skill in querySearch(searchText)"
                            md-item-text="skill.name"
                            placeholder="Enter a skill"
                            >
                        <span md-highlight-text="searchText">@{{item.name}}</span>
                    </md-autocomplete>
                    <md-chip-template>
                        <span>
                          <strong>@{{$chip.name}}</strong>
                        </span>
                    </md-chip-template>
                </md-chips>
            </md-content>
        </div>
        <md-whiteframe class="md-whiteframe-z1 md-padding md-margin workarea" layout="column" layout-align="center center">
            <div class="skills">
                <md-card ng-repeat="category in categories" layout="row">
                    <div flex="50" class="icon" layout="column" layout-align="center center">
                        <i class="material-icons">favorite</i>
                    </div>
                    <div flex="50" class="md-padding">
                        <md-card-content flex="50">
                            <h2 class="md-title">@{{ category.name }}</h2>

                            <p>
                                @{{ category.description }}
                            </p>

                        </md-card-content>
                        <div layout="row" layout-align="start center">
                            <md-chips ng-model="category.skills" readonly="true">
                                <md-chip-template>
                                    @{{ $chip.name }}
                                </md-chip-template>
                            </md-chips>
                        </div>
                    </div>
                </md-card>
            </div>
        </md-whiteframe>
    </md-content>
    @include('partials.contact-fab')
</div>
<script src="{{ elixir('assets/js/bundle.js') }}"></script>
</body>
</html>