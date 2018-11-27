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

class Devices extends Model
{   
    use Filterable, HasSlug;
    //use Notifiable, Followable, HasFavorite;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug','model', 'description', 'price', 'battery', 'brand', 
        'camera','category_id','media'
    ];

/*
public function getTagListAttribute()
    {
        return $this->tags->pluck('name')->toArray();
    }
    */

     public function scopeLoadRelations($query)
    {
        print_r($query->pluck('slug'));

        return $query->with(['user.followers' => function ($query) {
                $query->where('follower_id', auth()->id());
            }])
            ->with(['favorited' => function ($query) {
                $query->where('user_id', auth()->id());
            }])
            ->withCount('favorited');
    
    }

    public function devices()
    {
        return $this->belongsTo('App\Category');
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
        return 'model';
    }

    /* public function smartphones()
     {
         return $this->belongsToMany(Devices::class);
     }*/
    
    /**
     * Get all the articles by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function category()
    {
        return $this->belongsToMany(Category::class)->latest();
    }
    
}
