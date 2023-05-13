import { Injectable, NotFoundException } from '@nestjs/common';
import { Pelicula } from './peliculas';
import { PeliculaDto } from 'src/dto/peliculasDto';
import { v4 as uuid } from "uuid";
import * as fs from "fs";


@Injectable()
export class PeliculasService {

    private listaPeliculas:Pelicula[]=[];
    private url:string="./src/peliculas/peliculas.txt";
    
    constructor(){
        const datos = fs.readFileSync(this.url, "utf-8");
        if (datos.length) {
            const renglon = datos.split("\r\n");
      
            for (let linea of renglon) {
              let partes = linea.split(",");
      
              let pelicula = new Pelicula(
                partes[0],
                partes[1],
                partes[2],
                partes[3],
                partes[4],
                parseInt(partes[5]),
                parseInt(partes[6])
              );
      
              this.listaPeliculas.push(pelicula);
            }
        }
    }

    getPeliculas():Pelicula [] {
        return this.listaPeliculas
    }
    getPeliculasById(id:string): Pelicula{
        const pelicula= this.listaPeliculas.find((pelicula)=>pelicula.id===id);
        if(!pelicula){
            throw new NotFoundException();
        }
        return pelicula
    }

    deletePelicula(id:string):boolean{
        const peliculaAeliminar= this.listaPeliculas.findIndex((e)=>{return e.id==id})

        if(peliculaAeliminar!=-1){
            this.listaPeliculas.splice(peliculaAeliminar,1);
            return true;
        }
        return false
    }

    createPelicula(peliculadto:PeliculaDto):Pelicula{
        
        let newPelicula= new Pelicula(uuid(),
        peliculadto.nombre,
        peliculadto.listaActores,
        peliculadto.listaGeneros,
        peliculadto.sinopsis,
        peliculadto.duracion,
        peliculadto.lanzamiento)

        this.listaPeliculas.push(newPelicula);
        console.log(newPelicula)


        const dataArchivoTxt = this.listaPeliculas.length ? "\n" + newPelicula.toString() : newPelicula.toString();
           
        fs.appendFileSync(this.url, dataArchivoTxt);

        return newPelicula
    }
       
        
    updatePelicula(nuevaPelicula:PeliculaDto,id:string){
        try {
            let index= this.listaPeliculas.findIndex((pelicula)=>pelicula.id===id);

        if(index!=-1){
            let peliculaActualizar=this.listaPeliculas[index];
            peliculaActualizar.setNombre(nuevaPelicula.nombre);
            peliculaActualizar.setListaActores(nuevaPelicula.listaActores);
            peliculaActualizar.setListaGereros(nuevaPelicula.listaGeneros);
            peliculaActualizar.setDuracion(nuevaPelicula.duracion);
            peliculaActualizar.setLanzamiento(nuevaPelicula.lanzamiento);
            return "ok"
        }
        } catch (error) {
            console.log(error)
        }
    }
}

    