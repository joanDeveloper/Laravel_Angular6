<?php

use App\GraphQL\Query\DevicesQuery;
use App\GraphQL\Type\DevicesType;

return [
    'prefix' => 'graphql',
    'routes' => 'query/{graphql_schema?}',
    'controllers' => \Rebing\GraphQL\GraphQLController::class . '@query',
    'middleware' => [],
    'default_schema' => 'default',
    // register query
    'schemas' => [
        'default' => [
            'query' => [
                'devices' => DevicesQuery::class,
            ],
            'mutation' => [
                
            ],
            'middleware' => []
        ],
    ],
    // register types
    'types' => [
        'devices'  => DevicesType::class,
        
    ],
    'error_formatter' => ['\Rebing\GraphQL\GraphQL', 'formatError'],
    'params_key'    => 'params'
];
