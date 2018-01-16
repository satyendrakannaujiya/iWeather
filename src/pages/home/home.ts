import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";
import { Location } from "../../models/location";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  weather: any;
  location: Location;
  // location: {
  //   city: string;
  //   state: string;
  // };
  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    public storage: Storage
  ) {}

  ionViewWillEnter() {
    // this.location = {
    //   city: "India",
    //   state: "mumbai"
    // };
    this.weatherProvider.getWeather().then(data => {
      data.subscribe(weather => {
        this.weather = weather.current_observation;
      });
    });
    // .subscribe(weather => {
    //   // console.log(weather);
    //   this.weather = weather.current_observation;
    // });
  }
}
