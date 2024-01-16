<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\AdminModel;

class AdminController extends BaseController
{
    use ResponseTrait;

    public function login()
    {
        $request = $this->request->getJSON(true);
        $adminModel = new AdminModel();

        $email = $request['email'];
        $password = $request['password'];

        try {
            $admin = $adminModel->where('email', $email)->first();
        
            if ($admin && password_verify($password, $admin['password'])) {
                return $this->respond(['message' => 'Login successful']);
            } else {
                return $this->respond(['message' => 'Invalid credentials'], 401);
            }
        } catch (\Exception $e) {
            log_message('error', 'Login error: ' . $e->getMessage());
            return $this->respond(['message' => 'An unexpected error occurred'], 500);
        }
    }
}
