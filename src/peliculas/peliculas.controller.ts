import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
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
        return this.peliculasService.deletePelicula(id);
    }

    @Post()
    postPelicula(@Body() peliculadto:PeliculaDto){
        return this.peliculasService.createPelicula(peliculadto);
    }

    @Put(':id')
    putPelicula(@Body()pelicula: PeliculaDto, @Param('id') id: string) : string{
        return this.peliculasService.updatePelicula(pelicula,id);
    }

}
