# Market-Shoes

Market-Shoes es una aplicación de e-commerce para la venta de zapatillas. Esta aplicación permite a los usuarios compradores navegar, buscar y comprar productos, mientras que los usuarios administradores tienen acceso a funcionalidades de gestión de productos y pedidos.

## Características

### Usuario Comprador
- Registro e inicio de sesión.
- Navegación y búsqueda de productos.
- Ver detalles de productos.
- Agregar productos al carrito de compras.
- Realizar el proceso de checkout y pago.

### Usuario Administrador
- Gestión de productos (crear, editar, eliminar).
- Gestión de pedidos.
- Visualización de estadísticas de ventas.

## Tecnologías Utilizadas

- **Frontend:** React, Bootstrap, React Router
- **Backend:** Node.js, Express, Sequelize, JWT
- **Base de Datos:** MySQL
- **Autenticación:** JWT (JSON Web Tokens)
- **Hashing de Contraseñas:** bcrypt

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/market-shoes.git
    cd market-shoes
    ```

2. Instala las dependencias del backend:
    ```sh
    cd backend
    npm install
    ```

3. Configura las variables de entorno en un archivo `.env`:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_password
    DB_NAME=market_shoes
    TOKEN_SECRET=tu_secreto_de_token
    ```

4. Ejecuta las migraciones y seeders para la base de datos:
    ```sh
    npx sequelize db:migrate
    npx sequelize db:seed:all
    ```

5. Inicia el servidor backend:
    ```sh
    npm start
    ```

6. Instala las dependencias del frontend:
    ```sh
    cd ../frontend
    npm install
    ```

7. Inicia la aplicación frontend:
    ```sh
    npm start
    ```

## Uso

### Usuario Comprador
1. Regístrate o inicia sesión.
2. Navega por los productos y añádelos al carrito.
3. Procede al checkout y realiza el pago.

### Usuario Administrador
1. Inicia sesión con una cuenta de administrador.
2. Accede al panel de administración.
3. Gestiona productos y pedidos.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Inicia el servidor backend en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

### `npm run dev`
Inicia la aplicación frontend en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) para verlo en tu navegador.

### `npx sequelize db:migrate`
Ejecuta las migraciones para crear las tablas necesarias en la base de datos.

### `npx sequelize db:seed:all`
Ejecuta los seeders para insertar datos de prueba en la base de datos.
