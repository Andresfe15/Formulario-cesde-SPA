// Función para cargar el navbar
const loadNavbar = () => {
    const navbar = document.createElement('nav');//crea un elemento <nav> en el DOM

    //se asigna contenido  HTML a la barra de navegacion, incluyendo el logo y los demás elementos del menu
    navbar.innerHTML = `
      <div class="logo">
        <img src="App/assets/logo-removebg-preview.png" alt="Logo">
      </div>
      <ul class="menu">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#nuestros-programas">Nuestros programas</a></li>
        <li><a href="#sedes">Sedes</a></li>
        <li><a href="#nuestros-servicios">Nuestros servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    `;
    return navbar;//Devuelve el elemento <nav> creado
  };
  
  // Función para cargar el formulario
  const loadForm = () => {
    const formSection = document.createElement('div');//se crea un contenedor principal para el formulario
    formSection.classList.add('main-content');//se agrega una clase CSS llamada 'main-content' al elemento HTML representado por la variable formSection.

    //Se asigna contenido HTML al contenedor del formulario, incluyendo las imagenes y el mismo formulario
    formSection.innerHTML = `
      <div class="images">
        <!-- Aquí van mis imagenes de la pagina -->
        <img src="App/assets/desarrollo.jpg" alt="Imagen 1">
        <img src="App/assets/gastronomia.jpg" alt="Imagen 2">
        <img src="App/assets/industrias.jpg" alt="Imagen 3">
      </div>
      <div class="form-section">
        <h2>Conéctenos con tu propósito</h2>
        <p>Deja tus datos para comunicarnos contigo y resolver tus dudas.</p>
        <p>Si eres menor de edad, todos los procesos deben realizarse con tu acudiente.</p>
        <form id="contactForm">
          <div class="form-row">
            <div class="input-group">
              <input type="text" name="nombres" placeholder="Nombres" required>
            </div>
            <div class="input-group">
              <input type="text" name="apellidos" placeholder="Apellidos" required>
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <input type="tel" name="telefono" placeholder="Teléfono celular" required>
            </div>
            <div class="input-group">
              <input type="email" name="correo" placeholder="Correo electrónico" required>
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <select name="cesde" required>
                <option value="" disabled selected>Seleccione Cesde</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>
            <div class="input-group">
              <select name="programa" required>
                <option value="" disabled selected>Seleccione programa</option>
                <option value="programa1">Programa 1</option>
                <option value="programa2">Programa 2</option>
                <option value="programa3">Programa 3</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <select name="medio" required>
                <option value="" disabled selected>Medio por el cual se enteró</option>
                <option value="medio1">Medio 1</option>
                <option value="medio2">Medio 2</option>
                <option value="medio3">Medio 3</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <h2>Política y tratamiento de protección de datos personales</h2>
            <input type="checkbox" id="politica" name="politica" required>
            <label for="politica">He leído y acepto la política de tratamiento y protección de datos personales</label>
          </div>
          <div class="form-row">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    `;
  
    return formSection;//Devuelve el contenedor del formulario creado
  };
  
  // Cargar los componentes al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');//busca y selecciona un elemento en el documento HTML que tenga el atributo id establecido como 'root'. Luego, se le asigna este elemento seleccionado a la variable root, para que se pueda manipular más adelante en el código. 
    root.appendChild(loadNavbar());//Esta línea agrega el navbar (barra de navegación) al elemento con el id 'root' en el DOM. Utiliza la función loadNavbar() para obtener el elemento <nav> completo con su contenido (logo y elementos de menú) y luego lo agrega como un hijo del elemento con el id 'root'.
    root.appendChild(loadForm());//Esta línea agrega el formulario al elemento con el id 'root' en el DOM. Utiliza la función loadForm() para obtener el contenedor completo del formulario con su contenido (imágenes y formulario en sí) y luego lo agrega como un hijo del elemento con el id 'root'.
  });
  