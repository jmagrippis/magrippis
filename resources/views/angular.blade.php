<!doctype html>
<html lang="{{ App::getLocale() }}">
<head>
    <base href="/">
    <meta charset="UTF-8">
    <title>Johnny Magrippis: Developer, designer, determined gamer</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{ elixir('assets/css/magrippis.css') }}">
</head>
<body>
<div ng-app="magrippis" ng-controller="CoreController as core" layout="column" layout-fill>
    @include('partials.toolbar')
    <div ui-view>
    </div>
    @include('partials.contact-fab')
</div>
<script src="{{ elixir('assets/js/bundle.js') }}"></script>
</body>
</html>