<?php

namespace App;
use App\RealWorld\Slug\HasSlug;
use App\RealWorld\Filters\Filterable;
/*use JWTAuth;
use App\RealWorld\Follow\Followable;
use App\RealWorld\Favorite\HasFavorite;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;*/
use Illuminate\Database\Eloquent\Model;

class Smartphones extends Model
{   
    use Filterable, HasSlug;
    //use Notifiable, Followable, HasFavorite;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'battery', 'inches', 'system', 
        'model', 'brand', 'camera', 'pixels'
    ];

    public function smartphones()
    {
        return $this->belongsToMany();
    }

    /**
     * Get the key name for route model binding.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get the attribute name to slugify.
     *
     * @return string
     */
    public function getSlugSourceColumn()
    {
        return 'name';
    }

    // public function smartphones()
    // {
    //     return $this->belongsToMany(Smartphones::class);
    // }
    
    
}
