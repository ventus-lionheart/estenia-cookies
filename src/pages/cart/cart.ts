import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  	selector: 'page-cart',
  	templateUrl: 'cart.html'
})
export class CartPage {
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
		console.log(navParams.get('data'));
		console.log(navParams.get('quantity'));
	}

	Products = this.navParams.get('data');
	quantity = this.navParams.get('quantity');
	price = this.navParams.get('price');
	user = {
		firstName: "",
		lastName: "",
		location: ""
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
		console.log("Order Placed");
		this.closeModal();
	}

	closeModal() {
		let data = {
			cart: this.Products,
			quantity: this.quantity,
			price: this.price,
			name: this.user.firstName + ' ' + this.user.lastName,
			location: this.user.location
		}
		this.viewCtrl.dismiss(data);
	}
}
