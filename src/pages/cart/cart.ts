import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  	selector: 'page-cart',
  	templateUrl: 'cart.html'
})
export class CartPage {
	constructor(public platform: Platform, navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) { }

	// Get all data passed from homepage using NavParams
	Products = this.navParams.get('data');
	quantity = this.navParams.get('quantity');
	price = this.navParams.get('price');
	user = {
		firstName: this.navParams.get('firstName'),
		lastName: this.navParams.get('lastName'),
		location: this.navParams.get('location')
	}

	// Function to delete a product from the cart
	deleteProduct(product, i) {
		// 1st subtract the price of the deleted product from the total price
		this.price = this.price - parseFloat(product.price);
		// 2nd splice the array at the index of the product to be deleted
		this.Products.splice(i, 1);
		// Finally, reduce quantity from cart
		this.quantity--;
	}

	// Function to place an oder
	placeOrder() {
		// Handle errors if name or location is empty
		if(this.user.firstName === "" || this.user.firstName === " ") {
			this.errAlert();
			return;
		}
		if(this.user.lastName == "" || this.user.lastName == " ") {
			this.errAlert();
			return;
		}
		if(this.user.location === "" || this.user.location === " ") {
			this.errAlert();
			return;
		}

		// Empty cart, and set price and quantity to 0
		this.Products.splice(0, this.Products.length);
		this.quantity = 0;
		this.price = 0;
		// Convernt first and last name to lowercase first and then uppercase the first letter
		this.user.firstName = this.toUpperFirst(this.user.firstName.toString().toLowerCase());
		this.user.lastName = this.toUpperFirst(this.user.lastName.toString().toLowerCase());
		this.user.location = this.user.location;
		// Show success message
		this.successlert();
	}

	// Function to close modal page and pass data
	closeModal() {
		// Create the data object to be pass back to home page
		let data = {
			cart: this.Products,
			quantity: this.quantity,
			price: this.price,
			firstName: this.user.firstName,
			lastName: this.user.lastName,
			location: this.user.location
		}
		// Pass data object on modal dismiss
		this.viewCtrl.dismiss(data);
	}

	// Uppercase the 1st letter of a string
	toUpperFirst(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	// Error alert if all fields are not filled in
	errAlert() {
		let alert = this.alertCtrl.create(
			{
				title: 'Oopps, something went wrong!',
				subTitle: 'Please make sure both location and name is filled before placing order!',
				buttons: ['OK']
			}
		);
		alert.present();
	}

	// Success alert if order is placed properly
	successlert() {
		let alert = this.alertCtrl.create(
			{
				title: this.user.firstName + ', your order been placed successfully!',
				subTitle: 'Please come by at our ' + this.user.location + ' store to pick up your cookies in 15-20 minutes!',
				buttons: ['OK']
			}
		);
		alert.present();
	}
}
