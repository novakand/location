import './styles.css'
import 'bootstrap';
import { GoogleMapsWindow } from './app/components/map/interfaces/google-maps-window.interfaces';
import { LitElement, html, customElement, property } from 'lit-element';





console.log('googleMapsWindow')
const googleMapsWindow: GoogleMapsWindow = window;
let div: any = document.getElementById('map')
console.log('googleMapsWindow', googleMapsWindow)
const googleMap = new google.maps.Map(div, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
});

@customElement('my-cat')
export class MyCat extends LitElement {

  constructor() {
    // Always call super() first
    super();
 //   this.prop1 = 'Hello World';
  //  this.prop2 = 5;
   // this.prop3 = true;
  }
   // @property({type : Number})  prop1 = 4;
   @property({ attribute: 'my-name' })
                                         myName = 'Ogden';
    @property({type : String})  name = 'Tom';
    @property({type : Number})  legs = 4;
    @property({type : Boolean}) nice = true;
    @property({type : Array})   alias = ['good kitty','muchi muchi', 'mice slayer'];
    @property({type : Object})  skills = { karate: 'white belt', english:'native' };

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
      console.log(name,'name')
        
    }
    
  
    render() {
      console.log('render',this.myName)
      return html`
        <p>name: ${this.name}</p>
        <p>legs: ${this.legs}</p>
        <p>nice: ${this.nice}</p>
        <p>alias: 
          <ul>
         ${this.alias.map((item, index) =>
          html`<li>[${index}]:${item}&nbsp;</li>`)}
         </ul>
        </p>
          <p>skills:
          <ul>
          ${Object.keys(this.skills).map(item =>
            html`<li>${item}: 1&nbsp;</li>`)}
          </ul>
        </p>
        <p>skills.karate: ${this.skills.karate}</p>
      `;
    }
  }


  