export class Pelicula {
    id: string;
    nombre: string;
    listaActores:string;
    listaGeneros:string;
    sinopsis: string;
    duracion: number;
    lanzamiento: number;

    constructor(id: string, nombre: string, listaActores:string, listaGeneros: string, 
        sinopsis: string, duracion: number, lanzamiento: number) {
        this.id = id;
        this.nombre = nombre;
        this.listaActores = listaActores;
        this.listaGeneros = listaGeneros;
        this.sinopsis = sinopsis;
        this.duracion = duracion;
        this.lanzamiento = lanzamiento;
    }

    setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre;
    }
    setListaActores(nuevaListaActores:string):void{
        this.listaActores=nuevaListaActores;
    }
    setListaGereros(nuevaListaGeneros:string):void{
        this.listaGeneros=nuevaListaGeneros;
    }

    setSinopsis(nuevaSinopsis:string):void{
        this.sinopsis=nuevaSinopsis;
    }
    setDuracion(nuevaDuracion:number):void{
        this.duracion=nuevaDuracion;
    }
    setLanzamiento(nuevoLanzamiento:number):void{
        this.lanzamiento=nuevoLanzamiento;
    }
    toString():string{
        return  `${this.id},${this.nombre},${this.listaActores},${this.listaGeneros},${this.sinopsis},${this.duracion},${this.lanzamiento}`
    }
}