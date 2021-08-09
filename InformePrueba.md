# Time to create the App

El tiempo dedicado para la prueba han sido de unas 12 horas aproximadamente


## Problemas / Dificultades

- Los problemas que me he encontrado han sido que al trabajar con firebase (Backend as a service by Google) habitualmente, las apis con Token JWT Bearer era la primera vez que la veia, por lo tanto he necesita leer mucha documentación para poder terminar el proyecto,  ademas he utilizado Postman para ver la api los resultados que devolvia. 

- La api me ha dado problemas de que había "to many request try again later", he tenido que ir esperando para poder comprobar mis avances

### Explicación de las decisiones tomadas durante el desarrollo

- He utilizado Redux para el state global de la aplicación, pero para controlar los errores de los 3 formularios que han sido realizados el login, el registrer y el update user. 

- He utilizado un custom hook para leer los formularios de esta forma poder trabajar mas rápido.

- He utilizado Sass para tener variables con el color principal de la app.

- He hecho un diseño de tabla para la pantalla users con 2 botones ver y borrar para al tener tanta cantidad de usuarios que se pueda hacer mas visual.

- En la pantalla de update profile he realizado dos columnas una para mostrar la información y otra para actualizar el usuario, el cual no puede actualizar el email por ser la parte de entrada mas importante de la applicación


