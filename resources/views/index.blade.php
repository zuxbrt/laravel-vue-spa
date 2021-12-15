<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Laravel Vue SPA</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
    
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
