import { ResourceLoader } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core'; 
import { Loader } from '@googlemaps/js-api-loader';

declare const L: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'google-maps';

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDGfY10winuOCQ7E8CbglnINAXeR9pM-qM'
    })

    loader.load().then(() => { 
      new google.maps.Map(document.getElementById("map"), {
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6,
      })
    })

    if(!navigator.geolocation) {
      console.log('Emplacement non pris en charge');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      let coords = position.coords;
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`)
      let mymap = L.map('map').setView([coords.latitude, coords.longitude], 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZ2hhZGExMjMiLCJhIjoiY2tueXFncmN4MWlzbzJ1cm1wYTJ2czUyeiJ9.7Hl93wxOp5b_wPPih4nPJQ}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);

      let marker = L.marker([coords.latitude, coords.latitude]).addTo(mymap);

      marker.bindPopup('<b> Hi </b>').openPopup();
      let popup = L.popup()
      .setLatLng([coords.latitude, coords.longitude])
      .setContent("I am Ghada.")
      .openOn(mymap);
      
    })
    this.watchPosition();   
  }
  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`)
      if(position.coords.latitude === desLat && position.coords.longitude === desLon) {
        navigator.geolocation.clearWatch(id);
      }
    },(error)=> {
      console.log(error)
    }, {
      enableHighAccuracy:true,
      timeout: 5000,
      maximumAge: 0
    })
  }

}

