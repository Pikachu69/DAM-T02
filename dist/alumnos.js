"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno(noCtrl, nombre, apellido, promedio, genero, fecha_nacimiento, activo) {
        this.noCtrl = noCtrl;
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
        this.activo = activo;
    }
    Alumno.prototype.agregar = function () {
        var newAlumno;
        newAlumno = {
            noCtrl: "" + this.noCtrl,
            nombre: "" + this.nombre,
            apellido: "" + this.apellido,
            promedio: "" + this.promedio,
            genero: "" + this.genero,
            fecha_nacimiento: "" + this.fecha_nacimiento,
            activo: "" + this.activo,
        };
        alumnos.push(newAlumno);
        this.imprimir();
    };
    Alumno.prototype.imprimir = function () {
        for (var i = 0; i <= alumnos.length; i++) {
            console.log(alumnos[i]);
        }
    };
    Alumno.prototype.borrar = function () {
        for (var i = 0; i <= alumnos.length; i++) {
            if (alumnos.noCtrl[i] = this.noCtrl) {
                alumnos.pop();
            }
        }
    };
    Alumno.prototype.editar = function () {
    };
    return Alumno;
}());
exports.Alumno = Alumno;
var alumnos = Array();
