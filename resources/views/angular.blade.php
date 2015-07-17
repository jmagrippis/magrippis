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
    <md-toolbar md-scroll-shrink>
        <div class="md-toolbar-tools">
            <h2>
                <span>Johnny Magrippis</span>
            </h2>
            <span flex></span>
            <md-button class="md-icon-button md-raised md-primary" aria-label="Home">
                <md-icon><i class="material-icons">style</i></md-icon>
                <md-tooltip>
                    Home
                </md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised md-primary" aria-label="Portfolio">
                <md-icon><i class="material-icons">assignment_turned_in</i></md-icon>
                <md-tooltip>
                    Portfolio
                </md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised md-primary" aria-label="Hobbies">
                <md-icon><i class="material-icons">favorite</i></md-icon>
                <md-tooltip>
                    Hobbies
                </md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised md-primary" aria-label="Blog">
                <md-icon><i class="material-icons">mode_edit</i></md-icon>
                <md-tooltip>
                    Blog
                </md-tooltip>
            </md-button>
        </div>
    </md-toolbar>
    <md-content class="md-padding" layout="column" layout-align="center center">
        <md-whiteframe class="md-whiteframe-z1 md-padding md-margin workarea" layout="column" layout-align="center center" style="max-width: 1280px">
            <md-card ng-repeat="category in categories">
                <img src="//placehold.it/1920x480" class="md-card-image" alt="Placeholder Image">
                <md-card-content>
                    <h2 class="md-title">@{{ category.name }}</h2>

                    <p>
                        @{{ category.description }}
                    </p>

                </md-card-content>
                <div class="md-actions" layout="row" layout-align="end center">
                    <md-button>Action 1</md-button>
                    <md-button>Action 2</md-button>
                </div>
            </md-card>
        </md-whiteframe>
    </md-content>
</div>
<script src="{{ elixir('assets/js/bundle.js') }}"></script>
</body>
</html>