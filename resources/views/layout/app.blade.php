<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <title> @yield('title') </title>
</head>
<body>
    {{-- @include('layout.menu') --}}


    @yield('content')


    {{-- @include('layout.footer') --}}

    <script type="text/javascript" src=" {{ asset('js/app.js') }}" ></script>
    <script type="text/javascript" src=" {{ asset('js/custom.js') }}" ></script>
</body>
</html>