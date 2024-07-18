
# Gestión de Productos API REST

## Descripción

Este proyecto es una API REST desarrollada para la gestión de productos, utilizando tecnologías modernas como JavaScript, Node.js, Express.js y Babel. La base de datos es administrada por Microsoft SQL Server, garantizando un rendimiento robusto y eficiente. Actualmente, solo se ha implementado el controlador para productos, sirviendo como un ejemplo funcional de cómo se pueden crear y gestionar otras entidades dentro del sistema. Esta API REST proporciona una base sólida para el desarrollo de diversas aplicaciones, permitiendo una escalabilidad y flexibilidad óptimas para futuras expansiones.

## Tecnologías Utilizadas

- **JavaScript**
- **Node.js**
- **Express.js**
- **Babel.js**
- **Microsoft SQL Server**
- **JSON**

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**

```bash
git clone https://github.com/Johnki1/Rest-Api.git
```

2. **Navega al directorio del proyecto:**

```bash
cd Rest-Api
```

3. **Instala las dependencias:**

```bash
npm install
```

4. **Configura la base de datos:**

Asegúrate de tener Microsoft SQL Server instalado y configurado. Luego, actualiza el archivo de configuración `config/database.js` con tus credenciales de SQL Server.

5. **Inicia el servidor:**

```bash
npm start
```

La API REST estará disponible en `http://localhost:3000`.

## Uso

### Endpoints

#### Obtener todos los productos

```http
GET /products
```

#### Crear un nuevo producto

```http
POST /products
```

#### Obtener el total de productos

```http
GET /products/count
```

#### Obtener un producto por ID

```http
GET /products/:id
```

#### Eliminar un producto

```http
DELETE /products/:id
```

#### Actualizar un producto existente

```http
PUT /products/:id
```

## Ejemplos de Solicitudes

### Obtener todos los productos

```bash
curl -X GET http://localhost:3000/products
```

### Crear un nuevo producto

```bash
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Nuevo Producto", "price": 100, "description": "Descripción del producto"}'
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. **Haz un fork del repositorio**
2. **Crea una rama con tu nueva funcionalidad:**

```bash
git checkout -b nueva-funcionalidad
```

3. **Realiza tus cambios y haz commit:**

```bash
git commit -m 'Agrega nueva funcionalidad'
```

4. **Haz push a la rama:**

```bash
git push origin nueva-funcionalidad
```

5. **Abre un Pull Request**

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

## Contacto

Para cualquier duda o consulta, puedes contactarme a través de:

- **Correo electrónico:** [garciakider@gmail.com](mailto:garciakider@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/john-alzate12/](https://www.linkedin.com/in/john-alzate12/)

---

¿Hay algo más que te gustaría añadir o modificar en este README?Aquí tienes el README actualizado con tu correo electrónico y LinkedIn de contacto:

---

# Gestión de Productos API REST

## Descripción

Este proyecto es una API REST desarrollada para la gestión de productos, utilizando tecnologías modernas como JavaScript, Node.js, Express.js y Babel. La base de datos es administrada por Microsoft SQL Server, garantizando un rendimiento robusto y eficiente. Actualmente, solo se ha implementado el controlador para productos, sirviendo como un ejemplo funcional de cómo se pueden crear y gestionar otras entidades dentro del sistema. Esta API REST proporciona una base sólida para el desarrollo de diversas aplicaciones, permitiendo una escalabilidad y flexibilidad óptimas para futuras expansiones.

## Tecnologías Utilizadas

- **JavaScript**
- **Node.js**
- **Express.js**
- **Babel.js**
- **Microsoft SQL Server**
- **JSON**

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**

```bash
git clone https://github.com/Johnki1/Rest-Api.git
```

2. **Navega al directorio del proyecto:**

```bash
cd Rest-Api
```

3. **Instala las dependencias:**

```bash
npm install
```

4. **Configura la base de datos:**

Asegúrate de tener Microsoft SQL Server instalado y configurado. Luego, actualiza el archivo de configuración `config/database.js` con tus credenciales de SQL Server.

5. **Inicia el servidor:**

```bash
npm start
```

La API REST estará disponible en `http://localhost:3000`.

## Uso

### Endpoints

#### Obtener todos los productos

```http
GET /products
```

#### Crear un nuevo producto

```http
POST /products
```

#### Obtener el total de productos

```http
GET /products/count
```

#### Obtener un producto por ID

```http
GET /products/:id
```

#### Eliminar un producto

```http
DELETE /products/:id
```

#### Actualizar un producto existente

```http
PUT /products/:id
```

## Ejemplos de Solicitudes

### Obtener todos los productos

```bash
curl -X GET http://localhost:3000/products
```

### Crear un nuevo producto

```bash
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Nuevo Producto", "price": 100, "description": "Descripción del producto"}'
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. **Haz un fork del repositorio**
2. **Crea una rama con tu nueva funcionalidad:**

```bash
git checkout -b nueva-funcionalidad
```

3. **Realiza tus cambios y haz commit:**

```bash
git commit -m 'Agrega nueva funcionalidad'
```

4. **Haz push a la rama:**

```bash
git push origin nueva-funcionalidad
```

5. **Abre un Pull Request**

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

## Contacto

Para cualquier duda o consulta, puedes contactarme a través de:

- **Correo electrónico:** [garciakider@gmail.com](mailto:garciakider@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/john-alzate12/](https://www.linkedin.com/in/john-alzate12/)

---
