import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class PeliculaDto{
    @IsString()
    @IsNotEmpty()
    readonly id:string;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly listaActores:string;

    @IsString()
    @IsNotEmpty()
    readonly listaGeneros:string;
    
    @IsString()
    @IsNotEmpty()
    readonly sinopsis: string;

    @IsNumber()
    @IsNotEmpty()
    readonly duracion: number;

    @IsNumber()
    @IsNotEmpty()
    readonly lanzamiento: number;

}