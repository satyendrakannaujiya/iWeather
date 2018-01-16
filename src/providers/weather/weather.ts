//import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
import { Location } from "../../models/location";
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apikey: "9cfe88a84985983f";
  url;
  location = {
    city: "India",
    state: "mumbai"
  };

  public static WEATHERDB: string = "weatherdb";

  constructor(public http1: Http, public storage: Storage) {
    console.log("Hello WeatherProvider Provider");
    console.log("type ooo " + typeof this.location);

    this.url = "http://api.wunderground.com/api/9cfe88a84985983f/conditions/q";
    this.location.city = "India";
    this.location.state = "mumbai";
    this.storage.set(WeatherProvider.WEATHERDB, this.location).then(val => {
      console.log("value pushed in db" + val);
    });
  }

  getWeather() {
    //  let obj = this.storage.get(WeatherProvider.WEATHERDB).then((data)=>{
    //                return data;
    //  });
    // return this.http1
    //   .get(this.url + "/" + city + "/" + state + ".json")
    //   .map(res => res.json());

    return this.storage.get(WeatherProvider.WEATHERDB).then(data => {
      console.log(data);
      return this.http1
        .get(this.url + "/" + data.city + "/" + data.state + ".json")
        .map(res => res.json());
    });
  }
  setWeather(city: string, state: string) {
    this.location.city = city;
    this.location.state = state;
    return this.storage.set(WeatherProvider.WEATHERDB, this.location);
  }
}
