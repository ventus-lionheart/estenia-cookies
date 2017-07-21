import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  	selector: 'page-cart',
  	templateUrl: 'cart.html'
})
export class CartPage {
	constructor(public platform: Platform, navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

	Products = this.navParams.get('data');
	quantity = this.navParams.get('quantity');
	price = this.navParams.get('price');
	user = {
		firstName: this.navParams.get('firstName'),
		lastName: this.navParams.get('lastName'),
		location: this.navParams.get('location')
	}

	deleteProduct(product, i) {
		this.price = this.price - parseFloat(product.price);
		this.Products.splice(i, 1);
		this.quantity--;
	}

	placeOrder() {
		if(this.user.firstName === "" || this.user.firstName === " ") {
			return;
		}
		if(this.user.lastName == "" || this.user.lastName == " ") {
			return;
		}
		if(this.user.location === "" || this.user.location === " ") {
			return;
		}
		this.Products.splice(0, this.Products.length);
		this.quantity = 0;
		this.price = 0;
		this.user.firstName = this.user.firstName;
		this.user.lastName = this.user.lastName,
		this.user.location = this.user.location;
	}

	closeModal() {
		let data = {
			cart: this.Products,
			quantity: this.quantity,
			price: this.price,
			firstName: this.user.firstName,
			lastName: this.user.lastName,
			location: this.user.location
		}
		this.viewCtrl.dismiss(data);
	}
}
