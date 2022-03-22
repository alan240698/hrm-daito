<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    /**
     * The database table used by the model.
     * @var string
     */
    protected $table = 'mst_product';
    /**
     * The database is used by the model.
     * @var string
     */
}
