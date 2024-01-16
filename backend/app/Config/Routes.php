<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
// $routes->post('/api/admin/login', 'AdminController::login');
$routes->get('/api/attractions', 'Attractions::index');
$routes->get('/api/attractions/(:num)', 'Attractions::show/$1');
$routes->post('/api/attractions', 'Attractions::create');
$routes->put('/api/attractions/(:num)', 'Attractions::update/$1');
// $routes->patch('/api/attractions/(:num)', 'Attractions::update/$1');
$routes->delete('/api/attractions/(:num)', 'Attractions::delete/$1');
$routes->get('/api/categories', 'Categories::index');
$routes->get('/api/categories/(:num)', 'Categories::show/$1');
$routes->get('/api/get-image-url/(:segment)', 'ImageController::getImageUrl/$1');