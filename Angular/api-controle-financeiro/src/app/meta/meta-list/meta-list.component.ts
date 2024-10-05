import { Component, OnInit } from '@angular/core';
import { Meta } from  "../../model/meta";
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Grupo } from '../../model/grupo';
import { GrupoFormService } from '../../services/grupo/grupo-form.service';
import { CurrencyPipe, Location, NgIf, NgStyle } from '@angular/common';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    TableModule,
    CurrencyPipe,
    Button,
    NgIf,
    NgStyle,
    PanelModule
  ],
  templateUrl: './meta-list.component.html',
  styleUrls: ['./meta-list.component.css']
})
export class MetaListComponent implements OnInit {
  
  metas: Meta[] = []
  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    saldo: 0,
    pessoa: undefined
};
  criandoGrupo: boolean = false;

  constructor(private metaHttpService : MetaHttpService, private router : Router, private route: ActivatedRoute, private grupoFormService: GrupoFormService, private location: Location ){}

  
  
  
  
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.grupoFormService.getGrupoById(Number(id)).subscribe(
                (dados: Grupo) => {
                    this.grupo = dados;
                    this.carregarMetas();
                },
                (error) => {
                    console.error('Erro ao carregar dados do grupo', error);
                }
            );
        } else {
            this.carregarMetas();
        }
  }


  carregarMetas(){
    this.metaHttpService.getMetasByGrupo(this.grupo.id).subscribe(
    (dados: Meta[]) => {
      this.metas = dados;
    },
    (error) => {
      console.error('Erro ao carregar metas', error);
    }
  )
}

editarMeta(meta : Meta){
  this.router.navigate(['/meta/meta-edit', meta.id])
}

// verMeta(meta : Meta){
//   this.router.navigate(['/meta/meta'])
// }

irParaFormulario(){
  this.router.navigate(['/meta/meta-form', this.grupo.id])
}

voltar() {
  this.location.back(); // Volta para a página anterior no histórico
}

}
