<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <base href="{{ asset('') }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- Icon -->
        <link rel="icon" href="{{ asset('favicon.ico') }}">

        <!-- Style -->
{{--        <link rel="stylesheet" href="{{ asset('css/app.css') }}">--}}
    </head>
    <body>
        <noscript>
            <strong>We're sorry but vue doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
{{--        <script src="{{ asset('js/app.js') }}"></script>--}}
    </body>
</html>
