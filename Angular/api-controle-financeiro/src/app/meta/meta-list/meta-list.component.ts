import { Component, OnInit } from '@angular/core';
import { Meta } from  "../../model/meta";
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    TableModule,
    Button
  ],
  templateUrl: './meta-list.component.html',
  styleUrls: ['./meta-list.component.css']
})
export class MetaListComponent implements OnInit {
  
  metas: Meta[] = []
  criandoGrupo: boolean = false;

  constructor(private metaHttpService : MetaHttpService, private router : Router ){}

  
  
  
  
  
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if(navigation?.extras.state){
        this.criandoGrupo = navigation.extras.state['criandoGrupo'] || false;
        
      }
    }

    )
    this.carregarMetas();
  }


  carregarMetas(){
    this.metaHttpService.getMeta().subscribe(
    (dados: Meta[]) => {
      this.metas = dados;
    }
  )
}

editarMeta(meta : Meta){
  this.router.navigate(['/meta/meta-edit', meta.id])
}

// verMeta(meta : Meta){
//   this.router.navigate(['/meta/meta'])
// }

criarNovoGrupo(meta : Meta){
  this.router.navigate(['/grupo/grupo-formulario', meta.id])
}

irParaFormulario(){
  this.router.navigate(['/meta/meta-form'])
}


}
