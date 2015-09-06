<!doctype html>
<html lang="{{ App::getLocale() }}">
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('partials.meta')
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{ elixir('assets/css/magrippis.css') }}">
    @if(env('APP_ENV') == 'production')
        <link rel="dns-prefetch" href="//www.google-analytics.com">
    @endif
</head>
<body>
<div ng-app="magrippis" ng-controller="CoreController as core" layout="column" layout-fill>
    <div ui-view="toolbar">
    </div>
    <div ui-view="body">
    </div>
    <div ui-view="fab" class="contact-fab">

    </div>
    <md-button class="md-fab md-mini md-primary" aria-label="Scroll Up" ng-click="core.scrollTop()" id="top-scroller" ng-class="{ show: core.scroller }">
        <md-icon md-font-set="material-icons">arrow_drop_up</md-icon>
    </md-button>
</div>
<script src="{{ elixir('assets/js/bundle.js') }}"></script>
@if(env('APP_ENV') == 'production')
    @include('partials.analytics')
@endif
</body>
</html>