import React from 'react';


const login = () => {
  const name = '';
    return (
        <div class= "col-lg-6 offset-lg-3">

          <h1>Datos del Usuario </h1>
      <form >
            <div class="form-group row">
              <label for="exampleInputEmail1">Correo</label>
              <input type="email" 
              class="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"/>  
            </div>

            <div class="form-group row">
              <label for="Nombre">Nombre</label>
              <input type="text" 
              class="form-control" 
              id="exampleInputText1" 
              placeholder="Name"/>  
            </div>

            <div class="form-group row">
              <label for="Apellido">Apellido</label>
              <input type="text" 
              class="form-control" 
              id="exampleInputText2" 
              placeholder="Last Name"/>  
            </div>

            <div 
            class="form-group row">
              <label for="exampleInputPassword1">Contraseña</label>
              <input 
              type="password" 
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder="Password"/>
            </div>
            <a 
             
            class="btn btn-primary"
            href="Jugar">Loguearse
            </a>
    </form>
    </div>
    );
};

export default login;