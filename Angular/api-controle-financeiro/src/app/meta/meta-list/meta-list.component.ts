import { Component, OnInit } from '@angular/core';
import { Meta } from  "../../model/meta";
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {metaHttp}

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
  
  metas: Meta
  
  
  
  
  
  ngOnInit() {
    
  }


  carregarMetas(){
    this.metasHttp
  }

}
