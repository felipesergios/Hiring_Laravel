$(cp ./backend-laravel/.env.example ./backend-laravel/.env)
docker-compose up -d
docker exec hiring_laravel_app-backend_1 php artisan migrate
docker exec hiring_laravel_app-backend_1 php artisan db:seed
