import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

  	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  	}

  	Cookies = [
		{name: 'Chocolate Chip', description: 'Our most popular cookie', price: '3.99', imgUrl: 'chocolate-chip.jpg'},
		{name: 'Snickerdoodles', description: 'The taste that you will always remember', price: '2.99', imgUrl: 'snickerdoodles.jpg'},
		{name: 'Oreo', description: 'The cookie you can never go wrong buying', price: '3.50', imgUrl: 'oreo.jpg'},
		{name: 'Double Chocolate', description: 'Double the amount of goodness', price: '3.99', imgUrl: 'double-chocolate.jpg'},
		{name: 'M&M', description: 'Who can forget M&M', price: '2.50', imgUrl: 'm&m.jpg'}
	];

	user: {
		name: string,
		location: string
	}
	cart = [];
	cartQuantity = 0;
	totalPrice = 0;

	addToCart(cookie) {
		this.cart.push(cookie);
		this.cartQuantity++;
		this.totalPrice = this.totalPrice + parseFloat(cookie.price);
	}

	openCart(){
		let modal = this.modalCtrl.create(CartPage, { data: this.cart, quantity: this.cartQuantity, price: this.totalPrice });
		modal.onDidDismiss(data => {
     		this.cart = data.cart;
			this.cartQuantity = data.quantity;
			this.totalPrice = data.price;
			this.user.name = data.name;
			this.user.location = data.location;
   		});
    	modal.present();
	}
}
