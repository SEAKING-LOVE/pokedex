import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-preview-card',
	templateUrl: './preview-card.component.html',
	styleUrls: ['./preview-card.component.scss'],
	inputs: ['pkId']
})
export class PreviewCardComponent implements OnInit {
	
	constructor() { }

	ngOnInit() {
	}

}
