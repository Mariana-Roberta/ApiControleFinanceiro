import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Meta } from '../../model/meta';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-meta-edit',
  standalone: true,
  imports: [
    FormsModule,
    Button,
    InputTextModule
  ],
  templateUrl: './meta-edit.component.html',
  styleUrl: './meta-edit.component.css'
})
export class MetaEditComponent implements OnInit{

meta: Meta = {
  id: 0,
  tipo: '',
  valor: 0
  //NÃO COLOQUEI GRUPOS, NAO SEI SE TENHO
}

constructor(
  private metaService: MetaHttpService,
  private route: ActivatedRoute,
  private router: Router,
  private location: Location

){}

ngOnInit() {
  // Obtém o id da pessoa da rota
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.metaService.getMetaById(Number(id)).subscribe(
      (dados: Meta) => {
        this.meta = dados;
      },
      (error) => {
        console.error('Erro ao carregar dados da meta', error);
      }
    );
  }
}

onSubmit() {
  if (this.meta.id) {
    this.metaService.updateMeta(this.meta).subscribe(
      () => {
        this.router.navigate(['/meta/meta-list']); 
      },
      (error) => {
        console.error('Erro ao atualizar meta', error);
      }
    );
  }
}

voltar() {
  this.location.back();
}










}
