<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('/api/registrasi', 'Auth::register');
$routes->post('/api/login', 'Auth::login');
$routes->get('/api/logout', 'Auth::logout');
$routes->get('/api/user/(:num)', 'Auth::show/$1');

// Atrraction
$routes->get('/api/attractions', 'Attractions::index');
$routes->get('/api/attractions/(:num)', 'Attractions::show/$1');
$routes->post('/api/attractions', 'Attractions::create');
$routes->post('/api/attractions/(:num)', 'Attractions::update/$1');
$routes->delete('/api/attractions/(:num)', 'Attractions::delete/$1');

// Article
$routes->get('/api/articles', 'Articles::index');
$routes->get('/api/articles/(:num)', 'Articles::show/$1');
$routes->post('/api/articles', 'Articles::create');
$routes->post('/api/articles/(:num)', 'Articles::update/$1');
$routes->delete('/api/articles/(:num)', 'Articles::delete/$1');

// Product
$routes->get('/api/products', 'Products::index');
$routes->get('/api/products/(:num)', 'Products::show/$1');
$routes->post('/api/products', 'Products::create');
$routes->post('/api/products/(:num)', 'Products::update/$1');
$routes->delete('/api/products/(:num)', 'Products::delete/$1');

// Category
$routes->get('/api/categories', 'Categories::index');
$routes->get('/api/categories/(:num)', 'Categories::show/$1');

// Comment
$routes->get('/api/comments', 'Comments::index');
$routes->get('/api/comments/(:num)', 'Comments::show/$1');
$routes->post('/api/comments', 'Comments::create');
$routes->post('/api/comments/(:num)', 'Comments::update/$1');
$routes->delete('/api/comments/(:num)', 'Comments::delete/$1');
$routes->get('/api/attractions/(:num)/comments', 'Comments::getCommentsByContentId/$1');

// Tour Package
$routes->get('/api/tour-packages', 'TourPackages::index');
$routes->get('/api/tour-packages/(:num)', 'TourPackages::show/$1');
$routes->post('/api/tour-packages', 'TourPackages::create');
$routes->post('/api/tour-packages/(:num)', 'TourPackages::update/$1');
// $routes->patch('/api/tour-packages/(:num)', 'TourPackages::update/$1');
$routes->delete('/api/tour-packages/(:num)', 'TourPackages::delete/$1');

// Image
$routes->get('/api/get-image-url/(:segment)', 'ImageController::getImageUrl/$1');