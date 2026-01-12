interface IEstudiante {
  id: number;
  nombre: string;
  edad: number;
  carrera: string;
  activo: boolean;
  promedio: number;
}

interface IResultado<T> {
  ok: boolean;
  mensaje: string;
  data?: T;
}

class Estudiante implements IEstudiante {
  id: number;
  nombre: string;
  edad: number; // like si ves esto
  carrera: string;
  activo: boolean;
  promedio: number;

  constructor(id: number, nombre: string, edad: number, carrera: string, promedio: number) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.promedio = promedio;
    this.activo = true;
  }
}

class SistemaEstudiantes {
  private estudiantes: Estudiante[] = [];

  agregar(est: Estudiante): IResultado<Estudiante> {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === est.id) {
        return { ok: false, mensaje: "ID repetido" };
      }
    }
    if (est.edad < 15 || est.edad > 80) {
      return { ok: false, mensaje: "Edad incorrecta" };
    }
    if (est.promedio < 0 || est.promedio > 10) {
      return { ok: false, mensaje: "Promedio incorrecto" };
    }
    this.estudiantes.push(est);
    return { ok: true, mensaje: "Estudiante agregado", data: est };
  }

  listar(): Estudiante[] {
    return this.estudiantes;
  }

  buscarPorId(id: number): IResultado<Estudiante> {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        return { ok: true, mensaje: "Estudiante encontrado", data: this.estudiantes[i] };
      }
    }
    return { ok: false, mensaje: "No existe el estudiante" };
  }

  actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
    if (nuevoPromedio < 0 || nuevoPromedio > 10) {
      return { ok: false, mensaje: "Promedio no válido" };
    }
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes[i].promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado", data: this.estudiantes[i] };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes[i].activo = activo;
        return { ok: true, mensaje: "Estado cambiado", data: this.estudiantes[i] };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  listarActivos(): Estudiante[] {
    let lista: Estudiante[] = [];
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].activo === true) {
        lista.push(this.estudiantes[i]);
      }
    }
    return lista;
  }

  promedioGeneral(): number {
    let suma = 0;
    for (let i = 0; i < this.estudiantes.length; i++) {
      suma = suma + this.estudiantes[i].promedio;
    }
    if (this.estudiantes.length === 0) {
      return 0;
    }
    return suma / this.estudiantes.length;
  }
}

function mostrarMenu(): void {
  console.log("MENU DEL SISTEMA");
  console.log("1. Agregar");
  console.log("2. Listar");
  console.log("3. Buscar por ID");
  console.log("4. Cambiar promedio");
  console.log("5. Cambiar estado");
  console.log("6. Listar activos");
  console.log("7. Promedio general");
}

function ejecutarDemo(sistema: SistemaEstudiantes): void {
  sistema.agregar(new Estudiante(1, "Carlos", 17, "Informatica", 8));
  sistema.agregar(new Estudiante(2, "Ana", 18, "Diseño", 9));
  sistema.agregar(new Estudiante(3, "Luis", 16, "Redes", 7));
  console.log(sistema.listar());
  console.log(sistema.buscarPorId(2));
  console.log(sistema.actualizarPromedio(1, 9));
  console.log(sistema.cambiarEstado(3, false));
  console.log(sistema.listarActivos());
  console.log(sistema.promedioGeneral());
}

const sistema = new SistemaEstudiantes();
mostrarMenu();
ejecutarDemo(sistema);
