<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\HTTP\RequestInterface;

use Midtrans\Config;

class PaymentController extends ResourceController
{
  use ResponseTrait;
  public function index()
  {
    // Set configuration for Midtrans
    Config::$serverKey = 'SB-Mid-server-XSGM17OoNGwSrf2fUuxUxN-t';
    Config::$isProduction = false;
    Config::$isSanitized = true;
    Config::$is3ds = true;

    // Get values from the request
    $id = $this->request->getVar('id');
    $price = $this->request->getVar('price');
    $productName = $this->request->getVar('productName');

    // Create transaction details
    $transaction = [
      'transaction_details' => [
        'order_id' => $id, // Use the provided 'id' from the request
        'gross_amount' => $price, // Use the provided 'price' from the request
      ],
      'item_details' => [
        [
          'id' => $id, // Use the provided 'id' from the request
          'price' => $price, // Use the provided 'price' from the request
          'quantity' => 1,
          'name' => $productName, // Use the provided 'name' from the request
        ],
      ],
    ];

    // Get Snap Token from Midtrans
    $snapToken = \Midtrans\Snap::getSnapToken($transaction);

    // Return the Snap Token as JSON response
    return $this->response->setJSON(['snapToken' => $snapToken]);
  }

  public function getPaymentDeadline()
    {
        // Tentukan tanggal deadline payment (contoh: 7 hari dari sekarang)
        $deadline = date('Y-m-d H:i:s', strtotime('+7 days'));

        return $this->respond(['deadline' => $deadline]);
    }
}