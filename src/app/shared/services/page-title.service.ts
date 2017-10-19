import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PageTitleService {

	private pageTitleSource = new Subject<string>();

	PageTitleAnounced$ = this.pageTitleSource.asObservable();

	setTitle(title: string){
		this.pageTitleSource.next(title);
	}

  constructor() { }

}
