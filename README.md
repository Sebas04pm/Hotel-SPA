## Usuario Admin
- Usuario: admin, contraseña: admin
- Usuario: root, contraseña: root

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript que nos permite ejecutar código JavaScript en el servidor.
- **Express**: Framework de aplicaciones web de Node.js que proporciona un conjunto de características y herramientas para el desarrollo de API RESTful.
- **Cors**: Middleware de Express utilizado para habilitar el acceso a recursos desde diferentes dominios o direcciones URL.
- **Nodemailer**: Librería de Node.js que permite enviar correos electrónicos desde una aplicación.
- **MongoDB**: Base de datos NoSQL orientada a documentos utilizada para almacenar y recuperar datos.
- **JWT (JSON Web Tokens)**: Estándar abierto basado en JSON utilizado para crear tokens de acceso que permiten la autenticación y autorización en aplicaciones web.
- **Bcrypt**: Librería utilizada para el cifrado de contraseñas y almacenamiento seguro de las mismas.
- **Mailgen**: Herramienta para la generación de correos electrónicos HTML atractivos y personalizables.

# BACKEND

## Configuración del entorno

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org) y seguir las instrucciones de instalación adecuadas para tu sistema operativo.

2. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

3. Navega al directorio raíz del proyecto:

   ```bash
   cd <DIRECTORIO_DEL_PROYECTO>
   ```

4. Instala las dependencias necesarias utilizando npm (Node Package Manager):

   ```bash
   npm install
   ```

5. Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias. Puedes usar el archivo `.env` como referencia. Asegúrate de proporcionar los valores correctos para las variables de conexión a la base de datos MongoDB y las credenciales de acceso a la cuenta de correo electrónico utilizada por Nodemailer.

## Uso

Una vez configurado el entorno, puedes iniciar el servidor ejecutando el siguiente comando en el directorio raíz del proyecto:

```bash
npm start
```

Esto iniciará el servidor backend y estará listo para recibir solicitudes desde el frontend de tu aplicación.

## Estructura del proyecto

El proyecto sigue una estructura de directorios recomendada para una aplicación Node.js con Express. Aquí se presenta una descripción general de los directorios y archivos más relevantes:

- **`app.js`**: Archivo principal de la aplicación Express. Configura y define el servidor.
- **`routes/`**: Directorio que contiene las definiciones de rutas para las diferentes API y controladores.
- **`controllers/`**: Directorio que contiene la lógica de controladores para las rutas definidas.
- **`models/`**: Directorio que contiene las definiciones de modelos de datos utilizados para interactuar con la base de datos MongoDB.



# FRONTEND de Hotel SPA con Vite, React, Tailwind

Este repositorio contiene el código fuente del frontend de un SPA (Single Page Application) desarrollado con tecnologías como Vite, React, Tailwind, react-helmet, React-Hot-Toast, flowbite y material-tailwind. El objetivo de este proyecto es proporcionar una interfaz de usuario moderna y receptiva para la aplicación.

## Usuario Admin

- Usuario: admin, Contraseña: admin
- Usuario: root, Contraseña: root

## Tecnologías utilizadas

- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **React**: Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas.
- **Tailwind**: Framework de CSS utilitario para crear estilos personalizados de manera rápida y eficiente.
- **react-helmet**: Componente de React utilizado para manejar metaetiquetas y títulos de la página.
- **React-Hot-Toast**: Biblioteca de notificaciones para React.
- **flowbite**: Librería de componentes UI basada en Tailwind CSS.
- **material-tailwind**: Implementación de Material Design utilizando Tailwind CSS.

## Configuración del entorno

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org) y seguir las instrucciones de instalación adecuadas para tu sistema operativo.

2. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

3. Navega al directorio raíz del proyecto:

   ```bash
   cd <DIRECTORIO_DEL_PROYECTO>
   ```

4. Instala las dependencias necesarias utilizando npm (Node Package Manager):

   ```bash
   npm install
   ```

5. Inicia el servidor de desarrollo ejecutando el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo de Vite y estará listo para mostrar la aplicación en tu navegador.

   ## Uso

Una vez que el servidor de desarrollo esté en funcionamiento, puedes acceder a la aplicación en tu navegador

Puedes realizar cambios en el código fuente y la aplicación se actualizará automáticamente en el navegador gracias a la capacidad de recarga en caliente (hot-reloading) de Vite.

## Estructura del proyecto

El proyecto sigue una estructura de directorios recomendada para una aplicación React con Vite. Aquí se presenta una descripción general de los directorios y archivos más relevantes:

- **`src/`**: Directorio principal que contiene el código fuente de la aplicación React.
  - **`components/`**: Directorio que contiene los componentes reutilizables de la aplicación.
  - **`pages/`**: Directorio que contiene las diferentes páginas de la aplicación.
  - **`assets/`**: Directorio que contiene las imagenes de la aplicación.
  - **`context/`**: Directorio que contiene Hook useContext utilizados en la aplicación.

  
