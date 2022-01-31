import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from './parks/MesaVerde'

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!<MesaVerde/></h1>;
}
