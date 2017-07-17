import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

  	constructor(public navCtrl: NavController) {

  	}

  	Cookies = [
		{name: 'Chocolate Chip', description: 'Our most popular cookie', imgUrl: 'chocolate-chip.jpg'},
		{name: 'Snickerdoodles', description: 'The taste that you will always remember', imgUrl: 'snickerdoodles.jpg'},
		{name: 'Oreo', description: 'The cookie you can never go wrong buying', imgUrl: 'oreo.jpg'},
		{name: 'Double Chocolate', description: 'Double the amount of goodness', imgUrl: 'double-chocolate.jpg'},
		{name: 'M&M', description: 'Who can forget M&M', imgUrl: 'm&m.jpg'}
	]

}

interface Cookies {
	name: string;
	description: string;
	imgUrl: string;
}
