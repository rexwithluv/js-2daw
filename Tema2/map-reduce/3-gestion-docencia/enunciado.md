# Gestión docencia

Realizar un simple sistema de gestión para almacenar información sobre estudiantes y profesores y su combinación para la realización de cursos de sus tutorías.

- Habrá una clase User para crear objetos para ambos teachers y students. El
  constructor debería tomar user data (name, surname, email, role), asegurarse
  realizar la toma de datos de la forma más adecuada.

Además, se deben crear los siguientes métodos:

- **addCourse**(course, level) - dejará añadir un módulo/asignatura(e.g. math) y
  curso  (e.g. 2 );
  - en el caso de un estudiante, significará que están buscando en ayuda para esa materia y nivel
  - en el caso de profesor, significará que podrá prestar ayuda de la materia en ese nivel;
- **removeCourse**(course) - borrado del curso (e.g. si el alumno quiere darse de baja)
- **editCourse**(course, level) - cambio de nivel asociado a la materia;
- **sendMessage**(from, message) - permite mandar un 'message' del usuario
  'from' al usuario descrito en el objeto; debe guardarse información completa
  acerca el mensaje (pista: uso de array para esto); el mensaje a enviar será
  una simulación, se debe declarar la función sendEmail(from, to, message) {} de
  forma previa(respetando hoisting) y se usará en el lugar apropiado;
- **showMessagesHistory**() - Historial de mensajes al usuario (mostrado por consola).

## Modificación 1

Todo lo anterior en conjunto. Crear una clase de tutoría **Tutoring** que tendrá dos tipos de usuarios: students y teachers de forma separada.

Define los métodos en él:

- **getStudentByName**(name, surname) - devolverá un student object con los name
  y surname dados (o undefined si el student no ha sido añadido antes)
- **getTeacherByName**(name, surname) - que devolverá teacher object con el  name y
  surname dados (o undefined si el teacher no ha sido añadido antes)
- **getStudentsForTeacher**(teacher) - que devolverá un array de students que puede tutorizar;
- **getTeacherForStudent**(student) - devolverá un array de teachers con capacidad de tutorizar al student;
- **addStudent**(name, surname, email) - añade nuevo student object a la lista;
- **addTeacher**(name, surname, email) - añade teacher object a la list.

Usar las clases anteriormente citadas y sus métodos

## Modificación 2

Crear una clase **ExtendedTutoring**, que heredará de **Tutoring**.

Tendrá el siguiente método: **sendMessages**(from, to, message).

- from    - es el user (student o teacher) que manda el mensaje.
- to      - lista de receptores(user objects)

## Modificación 3

Modificar una clase **ExtendedUser** class (reescribir) añadiendo un método estático.

- El método debería recibir el teacher object, student object, and opcionalmente un nombre course. Su función es encontrar la coincidencia entre student teacher.
- En caso de desconocer el nombre course name y no ser suministrado, el método debería devolver:
  - array vacío si no hay coincidencia (el teacher no tutoriza courses que le
    interesan a student, o tutoriza courses de nivel inferior)
  - array con {course, level} objects, el teacher tutoriza los courses que le
    interesan al estudiante.
- Si el course name se pasa como último argumento, el método devolverá el
  {course, level} object en caso de coincidencia, o undefined en cualquier otro
  caso.
