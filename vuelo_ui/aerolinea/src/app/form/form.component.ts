import { Component, OnInit } from '@angular/core';
import { VueloService } from '../vuelo/service/vuelo.service';
import { Vuelo } from '../vuelo/interface/vuelo';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  private idVuelo : any;
  public vuelo : Vuelo;

  constructor(
    private vueloService : VueloService,
    private route: ActivatedRoute,
  ) {
    
  }
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.idVuelo = params.get('paramIdVuelo');
      this.getVueloById();
    });
  }

  getVueloById() {
    this.vueloService.getById(this.idVuelo).subscribe((data:Vuelo)=>{
      this.vuelo = data;
    });
  }
}


