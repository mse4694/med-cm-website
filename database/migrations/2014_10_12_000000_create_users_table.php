<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->uuid('slug');
            $table->string('name');
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('sap_id');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('abilities', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->string('name')->unique();
            $table->string('label')->nullable();
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->string('name')->unique();
            $table->string('label')->nullable();
            $table->timestamps();
        });

        Schema::create('ability_role', function (Blueprint $table) {
            $table->primary(['ability_id', 'role_id']);
            $table->unsignedSmallInteger('ability_id')->constrained('abilities');
            $table->unsignedSmallInteger('role_id')->constrained('roles');
            $table->timestamps();
        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->primary(['user_id', 'role_id']);
            $table->unsignedSmallInteger('user_id')->constrained('users');  // ตาราง role_user จะดูว่า field 'user_id' จะต้องมีอยู่ใน ตาราง users ที่ field ชื่อ 'id'
            $table->unsignedSmallInteger('role_id')->constrained('roles');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // public function down()
    // {
    //     Schema::dropIfExists('role_user');
    //     Schema::dropIfExists('ability_role');
    //     Schema::dropIfExists('roles');
    //     Schema::dropIfExists('abilities');
    //     Schema::dropIfExists('users');
    // }
}
