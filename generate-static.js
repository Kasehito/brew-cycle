#!/usr/bin/env node

/**
 * Static HTML Generator for Brew Cycle
 * Generates HTML files from component assets for Vercel static deployment
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

// Ensure directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create index.html from built assets
const indexHTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brew Cycle - Premium Craft Beverages</title>
    <meta name="description" content="Brew Cycle - Your favorite craft beverages delivered fresh to your doorstep">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link href="/build/assets/app.css" rel="stylesheet">
</head>
<body class="bg-white antialiased">
    <!-- Navigation -->
    <nav class="flex justify-between items-center p-4 md:p-6 bg-white shadow-sm">
        <div class="text-2xl font-bold text-orange-600">Brew Cycle</div>
        <div class="flex gap-4">
            <a href="#about" class="text-gray-700 hover:text-orange-600">About</a>
            <a href="#products" class="text-gray-700 hover:text-orange-600">Products</a>
            <a href="#partnership" class="text-gray-700 hover:text-orange-600">Partnership</a>
        </div>
    </nav>

    <main>
        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4 text-center">
            <h1 class="text-5xl font-bold mb-4">Welcome to Brew Cycle</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Discover premium craft beverages delivered fresh to your doorstep</p>
            <button class="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">Get Started</button>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 px-4 bg-gray-50">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl font-bold mb-8 text-center">About Brew Cycle</h2>
                <p class="text-lg text-gray-700 mb-4">
                    Brew Cycle is your ultimate destination for premium craft beverages. We partner with the finest 
                    breweries and beverage makers around the world to bring you exceptional quality products.
                </p>
                <p class="text-lg text-gray-700">
                    Our mission is to make premium beverages accessible to everyone, with convenient delivery and 
                    outstanding customer service.
                </p>
            </div>
        </section>

        <!-- Products Section -->
        <section id="products" class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold mb-12 text-center">Our Products</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
                        <h3 class="text-2xl font-bold mb-4">Craft Beer</h3>
                        <p class="text-gray-600 mb-4">Curated selection of artisanal craft beers from breweries worldwide</p>
                        <button class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">Learn More</button>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
                        <h3 class="text-2xl font-bold mb-4">Premium Spirits</h3>
                        <p class="text-gray-600 mb-4">Exclusive collection of premium spirits and distilled beverages</p>
                        <button class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">Learn More</button>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
                        <h3 class="text-2xl font-bold mb-4">Non-Alcoholic</h3>
                        <p class="text-gray-600 mb-4">Refreshing non-alcoholic beverages for every occasion</p>
                        <button class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">Learn More</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnership Section -->
        <section id="partnership" class="py-20 px-4 bg-orange-50">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">Partner With Us</h2>
                <p class="text-lg text-gray-700 mb-8">
                    Are you a brewery or beverage maker? Join our growing network of partners and reach thousands 
                    of customers who love quality beverages.
                </p>
                <button class="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 text-lg">
                    Become a Partner
                </button>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="p-4 bg-gray-900 text-white md:p-8 lg:p-10 border-t">
        <div class="mx-auto max-w-screen-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">Brew Cycle</h3>
                    <p class="text-gray-400">Premium beverages delivered fresh to your door.</p>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="text-gray-400 space-y-2">
                        <li><a href="#about" class="hover:text-white">About</a></li>
                        <li><a href="#products" class="hover:text-white">Products</a></li>
                        <li><a href="#partnership" class="hover:text-white">Partnership</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Contact</h4>
                    <p class="text-gray-400">Email: hello@brewcycle.com</p>
                    <p class="text-gray-400">Phone: +1 (555) 123-4567</p>
                </div>
            </div>
            <div class="text-center border-t border-gray-800 pt-8">
                <p class="text-gray-400">© 2026 Brew Cycle. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/build/assets/app.js"></script>
</body>
</html>
`;

// Create 404 page
const notFoundHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Brew Cycle</title>
    <link href="/build/assets/app.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="text-center">
            <h1 class="text-6xl font-bold text-orange-600 mb-4">404</h1>
            <p class="text-2xl font-bold mb-2">Page Not Found</p>
            <p class="text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
            <a href="/" class="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700">Back to Home</a>
        </div>
    </div>
</body>
</html>
`;

// Write files
fs.writeFileSync(path.join(distDir, 'index.html'), indexHTML);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHTML);

console.log('✅ Static HTML files generated in dist/ directory');
console.log('   - index.html');
console.log('   - 404.html');
