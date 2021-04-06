import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }


  public newDataAvailable = new Subject();

}
