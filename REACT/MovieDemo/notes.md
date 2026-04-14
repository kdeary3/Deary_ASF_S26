1. create ```.env``` file
1. put api key in .env file
1. add to vite.config.js
    ```
    define: {
    "process.env": dotenv.config().parsed
   }
   ```

1. replace api key with
    ```
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}
    ```
   
1. add ```.env``` to ```gitignore```