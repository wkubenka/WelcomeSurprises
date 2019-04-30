<!DOCTYPE html>
<html>
<head>
    @yield('title')
    <meta name="csrf-token" content="{{csrf_token()}}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
{{--    <link rel="stylesheet" type="text/css" href="{{mix('/assets/bundle/app.css')}}">--}}
<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

</head>
<body>

<div id="root"></div>

<script type="text/javascript" src="{{mix('/assets/bundle/app.js')}}"></script>
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
