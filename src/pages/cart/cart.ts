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
		lastName: ""
	}

	deleteProduct(product, i) {
		this.price = this.price - parseFloat(product.price);
		this.Products.splice(i, 1);
		this.quantity--;
	}

	placeOrder() {
		if(this.user.firstName === "" || this.user.lastName === "") {
			return;
		}
		if(this.user.firstName == " " || this.user.lastName == " ") {
			return;
		}
		console.log("Order Placed");
	}

	closeModal() {
		let data = {
			cart: this.Products,
			quantity: this.quantity,
			price: this.price
		}
		this.viewCtrl.dismiss(data);
	}
}
