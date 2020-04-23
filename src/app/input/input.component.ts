import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  i=0;
  arr[100]={};
  ngOnInit() {

  }
  Send(){
    this.arr[i] = text.value();
    this.i++;
  }

}