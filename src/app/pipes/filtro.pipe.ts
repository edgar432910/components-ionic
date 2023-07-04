import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto:string="", column:string='title'): any[] {
    if(texto==='') return arreglo;
    if(texto=='all') return arreglo;
    if(!arreglo) return arreglo;
    texto= texto.toLowerCase();
    return arreglo.filter((item)=> item[column].toLowerCase().includes(texto));

  }

}
