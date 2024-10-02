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
  styleUrl: './meta-list.component.css'
})
export class MetaListComponent implements OnInit {
  
  metas: Meta[] = []

  constructor(private metaHttpService : MetaHttpService, private router : Router ){}

  
  
  
  
  
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if(navigation?.extras.state){
        
      }
    }

    )
  }


  carregarMetas(){
    this.metasHttp
  }

}
