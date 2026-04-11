<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brew Cycle - Landing Page</title>
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
        
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-white antialiased">

    @include('components.navbar')

    <main>
        @include('components.1hero')
        @include('components.3about')
        @include('components.4product')
        @include('components.5keunggulan')
        @include('components.6invite')
        @include('components.7partner')
    </main>

    <footer class="p-4 bg-white md:p-8 lg:p-10 border-t">
        <div class="mx-auto max-w-screen-xl text-center">
            <p class="text-gray-500">© 2026 Brew Cycle. All Rights Reserved.</p>
        </div>
    </footer>

</body>
</html>