import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  locations = [
	  {
		  name: 'Miami', address: 'Miami, FL, United States', imgUrl: 'miami.png'
	  },
	  {
		  name: 'Boca Raton', address: 'Boca Raton, FL, United States', imgUrl: 'boca.png'
	  },
	  {
		  name: 'Gainesville', address: 'Gainesville, FL, United States', imgUrl: 'gville.png'
	  }
  ]

}
