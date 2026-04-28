#!/bin/bash

# Exit on any error
set -e

echo "📦 Installing PHP dependencies..."
composer install --no-dev --prefer-dist --no-interaction

echo "📦 Installing Node dependencies..."
npm install

echo "🔨 Building frontend assets..."
npm run build

echo "🔑 Generating application key if needed..."
php artisan key:generate --force 2>/dev/null || true

echo "✨ Optimizing application..."
php artisan optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "💾 Running migrations..."
php artisan migrate --force

echo "✅ Build complete!"
