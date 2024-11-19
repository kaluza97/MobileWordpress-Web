## Możesz sprawdzić aplikację na serwerze Vercel:

https://mobile-wordpress-web.vercel.app/


<img width="1440" alt="1" src="https://github.com/user-attachments/assets/3632ab98-f214-4b0b-8a26-2163e0930a15">
<img width="1440" alt="2" src="https://github.com/user-attachments/assets/d2d9ea0a-c1c4-42ed-bbd2-a6db03ecd102">

## Jeśli chcesz uruchomić aplikację lokalnie musisz również sklonować i uruchomić serwer (repozytorium: MobileWordpress-Server).

## W kolejnym korku będziesz musiał utworzyć plik .env.local w katalogu "src":

```
NEXT_PUBLIC_API_VIEWS_ENDPOINT=http://localhost:9000/api/views
NEXT_PUBLIC_API_NAVIGATION_ENDPOINT=http://localhost:9000/api/settings/navigation
NEXT_PUBLIC_API_HEADER_ENDPOINT=http://localhost:9000/api/settings/header
```

