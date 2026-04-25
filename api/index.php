<?php

// Vercel Serverless Function Entry Point
// This file handles all requests for the Laravel application

// Set error reporting for production
error_reporting(E_ALL);
ini_set('display_errors', false);

// Set base path
$basePath = dirname(__DIR__);

// Require composer autoloader
require $basePath . '/vendor/autoload.php';

// Create the Laravel app
$app = require $basePath . '/bootstrap/app.php';

// Get the kernel
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

// Capture the request
$request = Illuminate\Http\Request::capture();

// Handle the request
$response = $kernel->handle($request);

// Send the response
$response->send();

// Terminate the application
$kernel->terminate($request, $response);
