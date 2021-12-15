<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'name' => 'user',
            'email' => 'user@test.com',
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make('test1234'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
