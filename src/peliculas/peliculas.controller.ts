import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { get } from 'http';
import { Pelicula } from './peliculas';
import { PeliculaDto } from 'src/dto/peliculasDto';

@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculasService: PeliculasService) {}

    @Get()
    getPeliculas():Pelicula[]{
    return this.peliculasService.getPeliculas();
    }

    @Get(':id')
    getPeliculaById(@Param('id', ParseUUIDPipe) id:string){
        return this.peliculasService.getPeliculasById(id);
    }

    @Delete(':id')
    deletePelicula(@Param('id',ParseUUIDPipe)id:string){
        try {
            let result= this.peliculasService.deletePelicula(id);
            if(result){
                return { message: 'Se elimino la pelicula correctamente' };
            }else{
                throw new NotFoundException('No se encontró el id de esa pelicula');
            }
        } catch (error) {
            throw new NotFoundException('ocurrio un error al eliminar la pelicula');
        }
        return 
    }

    @Post()
    postPelicula(@Body() peliculadto:PeliculaDto){
        return this.peliculasService.createPelicula(peliculadto);
    }

    @Put(':id')
    putPelicula(@Body()pelicula: PeliculaDto, @Param('id', ParseUUIDPipe) id: string) {
       try {
        let resultUpdate= this.peliculasService.updatePelicula(pelicula,id);
        if(resultUpdate){
            return { message: 'Se actualizo la pelicula correctamente' };
        }
        else {
            throw new NotFoundException('No se encontró el id de esa pelicula');
        }
       } catch (error) {
        throw new NotFoundException('ocurrio un error al obtener la pelicula');
       } 
    }

}
