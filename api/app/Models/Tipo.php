<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Dispositivo;

class Tipo extends Model
{
    protected $fillable = [
        'descripcion',
    ];

    public function dispositivos()
    {
        return $this->hasMany(Dispositivo::class);
    }
}
