<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8">
    <title>Johnny Magrippis: Developer, designer, determined gamer</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/vendor.css">
</head>
<body>
<div ng-app="magrippis" ng-controller="HomeController as homeC" layout="column">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <md-button class="md-icon-button" aria-label="Settings">
                <md-icon><i class="material-icons">menu</i></md-icon>
            </md-button>
            <h2>
                <span>Toolbar with Icon Buttons</span>
            </h2>
            <span flex></span>
            <md-button class="md-icon-button" aria-label="Favorite">
                <md-icon><i class="material-icons">face</i></md-icon>
            </md-button>
            <md-button class="md-icon-button" aria-label="More">
                <md-icon><i class="material-icons">check</i></md-icon>
            </md-button>
        </div>
    </md-toolbar>
    <md-content class="md-padding" layout="column">
        <md-card>
            <img src="//placehold.it/1920x480" class="md-card-image" alt="Placeholder Image">
            <md-card-content>
                <h2 class="md-title">Paracosm</h2>

                <p>
                    The titles of Washed Out's breakthrough song and the first single from Paracosm share the
                    two most important words in Ernest Greene's musical language: feel it. It's a simple request, as
                    well...
                </p>
                <p>@{{ greeting }}</p>
            </md-card-content>
            <div class="md-actions" layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
            </div>
        </md-card>
    </md-content>
</div>
<script src="{{ elixir('assets/js/bundle.js') }}"></script>
</body>
</html>