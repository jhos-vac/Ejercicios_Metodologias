var Estudiante = /** @class */ (function () {
    function Estudiante(id, nombre, edad, carrera, promedio) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
        this.activo = true;
    }
    return Estudiante;
}());
var SistemaEstudiantes = /** @class */ (function () {
    function SistemaEstudiantes() {
        this.estudiantes = [];
    }
    SistemaEstudiantes.prototype.agregar = function (est) {
        for (var i = 0; i < this.estudiantes.length; i++) {
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
    };
    SistemaEstudiantes.prototype.listar = function () {
        return this.estudiantes;
    };
    SistemaEstudiantes.prototype.buscarPorId = function (id) {
        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                return { ok: true, mensaje: "Estudiante encontrado", data: this.estudiantes[i] };
            }
        }
        return { ok: false, mensaje: "No existe el estudiante" };
    };
    SistemaEstudiantes.prototype.actualizarPromedio = function (id, nuevoPromedio) {
        if (nuevoPromedio < 0 || nuevoPromedio > 10) {
            return { ok: false, mensaje: "Promedio no válido" };
        }
        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                this.estudiantes[i].promedio = nuevoPromedio;
                return { ok: true, mensaje: "Promedio actualizado", data: this.estudiantes[i] };
            }
        }
        return { ok: false, mensaje: "Estudiante no encontrado" };
    };
    SistemaEstudiantes.prototype.cambiarEstado = function (id, activo) {
        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                this.estudiantes[i].activo = activo;
                return { ok: true, mensaje: "Estado cambiado", data: this.estudiantes[i] };
            }
        }
        return { ok: false, mensaje: "Estudiante no encontrado" };
    };
    SistemaEstudiantes.prototype.listarActivos = function () {
        var lista = [];
        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].activo === true) {
                lista.push(this.estudiantes[i]);
            }
        }
        return lista;
    };
    SistemaEstudiantes.prototype.promedioGeneral = function () {
        var suma = 0;
        for (var i = 0; i < this.estudiantes.length; i++) {
            suma = suma + this.estudiantes[i].promedio;
        }
        if (this.estudiantes.length === 0) {
            return 0;
        }
        return suma / this.estudiantes.length;
    };
    return SistemaEstudiantes;
}());
function mostrarMenu() {
    console.log("MENU DEL SISTEMA");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Buscar por ID");
    console.log("4. Cambiar promedio");
    console.log("5. Cambiar estado");
    console.log("6. Listar activos");
    console.log("7. Promedio general");
}
function ejecutarDemo(sistema) {
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
var sistema = new SistemaEstudiantes();
mostrarMenu();
ejecutarDemo(sistema);
