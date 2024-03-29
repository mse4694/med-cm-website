<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Person extends Model
{
    use HasFactory;

    protected $table = 'persons';
    protected $appends = ['person_type', 'image_url'];
    protected $fillable = [
        'division_id',
        'sap_id',
        'title_th',
        'title_en',
        'fname_th',
        'fname_en',
        'lname_th',
        'lname_en',
        'rname_full_th',
        'rname_full_en',
        'rname_short_th',
        'rname_short_en',
        'image',
        'type',
        'group',
        'position_mgnt',
        'position_division',
        'position_academic',
        'reward',
        'cert',
        'profiles',
        'status',
        'display_order',
        'user_previous_act',
        'user_last_act'
    ];

    // สำหรับ column ที่ประกาศเอาไว้ว่าเป็นชนิด json
    protected $casts = [
        'profiles' => 'array',
        'status' => 'boolean',
    ];

    protected static function booted()
    {
        static::creating(function ($person) {
            $person->slug = Str::uuid()->toString();
        });
    }

    public function division()
    {
        return $this->hasOne(Division::class, 'division_id', 'division_id');
    }

    public function trace_log()
    {
        return $this->belongsTo(TraceLog::class);
    }

    public function getPersonTypeAttribute()
    {
        switch ($this->type) {
            case 'a':
                $person_type = 'วิชาการ';
                break;
            case 'b':
                $person_type = 'สนับสนุน';
                break;
            case 'z':
                $person_type = 'ที่ปรึกษา';
                break;
            default:
            $person_type = 'xxxx';
        }
        return $person_type;
        //return 'ที่ปรึกษา';
    }

    public function getImageUrlAttribute()
    {
        //return Storage::url($this->image);
        return $this->image ? Storage::url($this->image) : url('fallbackimage/default-blank-image.jpg');
    }

    public function scopeFilterbyDivisionId($query, $divisionId)
    {
        $query->where('division_id', $divisionId);
    }

    public function scopeFilterbySearch($query, $search)
    {
        $query->where(function ($query) use ($search) {
            $query->where('fname_th', 'like', "%{$search}%")
                ->orWhere('lname_th', 'like', "%{$search}%");
                // ->orWhere('sap_id', 'like', "%{$search}%");
        });
    }
}
