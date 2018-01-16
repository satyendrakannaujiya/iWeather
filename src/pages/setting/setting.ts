import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { WeatherProvider } from "../../providers/weather/weather";
import { HomePage } from "../home/home";
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-setting",
  templateUrl: "setting.html"
})
export class SettingPage {
  city: string;
  state: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public weatherservice: WeatherProvider
  ) {
    this.city = "India";
    this.state = "Mumbai";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingPage");
  }

  saveFrom() {
    this.weatherservice.setWeather(this.city, this.state).then(data => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}
