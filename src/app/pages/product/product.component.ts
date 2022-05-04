import { Component, OnInit } from '@angular/core';
import {ProductDetails} from "../../models/product-details";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductDetails = {
    id: 0,
    name: "Lorem ipsum",
    slug: "lorem-ipsum",
    description: [
        "Zona, gdzie każdy przeżyty dzień jest świętem, każdy posiłek ucztą, a każda wypłata fortuną.",
        "Kurz jeszcze dobrze nie opadł po rocznicowej emisji, a Sołdat już zdążył się przekonać, że ucieczka przed potwornościami kompleksu X-3 to dopiero początek. Znów przyjdzie mu zmierzyć się z niebezpieczeństwami Strefy, własnym lękiem i wątpliwościami, a czasy wojskowej kompanii karnej wydadzą się prawdziwą sielanką. Wprawdzie teraz nie jest już sam, lecz Zona to zazdrosna kochanka…",
        "Strzelba pachnie prochem i rozgrzanym metalem, wizjer maski paruje, lepiej zmienić filtr. Rzuć mutrę i ruszaj. Ostatnich gryzą ślepe psy.",
        "Powyższy opis pochodzi od wydawcy."
    ],
    price: 39.99,
    photo: "/assets/photos/na-skraju-strefy.png"
  };

  constructor() { }

  ngOnInit(): void {}

}
