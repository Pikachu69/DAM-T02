export class Alumno {
  private noCtrl : string;
  private nombre : string;
  private apellido : string;
  private promedio : number;
  private genero : string;
  private fecha_nacimiento : string;
  private activo : boolean;

  constructor(noCtrl:string, nombre:string, apellido:string, promedio:number, genero:string, fecha_nacimiento:string, activo:boolean) {
    this.noCtrl = noCtrl;
    this.nombre = nombre;
    this.apellido = apellido;
    this.promedio = promedio;
    this.genero = genero;
    this.fecha_nacimiento = fecha_nacimiento;
    this.activo = activo;
  }

  agregar() {
    let newAlumno : any;
    newAlumno = {
      noCtrl : `${this.noCtrl}`,
      nombre : `${this.nombre}`,
      apellido : `${this.apellido}`,
      promedio : `${this.promedio}`,
      genero : `${this.genero}`,
      fecha_nacimiento : `${this.fecha_nacimiento}`,
      activo : `${this.activo}`,
    };
    alumnos.push(newAlumno);
    this.imprimir();
  }

  imprimir() {
    for(let i=0; i<=alumnos.length; i++){
      console.log(alumnos[i]);
    }
  }

  borrar(){
    for(let i=0 ; i<=alumnos.length; i++){
      if(alumnos.noCtrl[i] = this.noCtrl){
        alumnos.pop();
      }
    }
  }

  editar(){

  }
}
  var alumnos = Array<Alumno>();
