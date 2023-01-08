interface AnimauxInter{
  pattes : number;
  couleur : string;
}


class Animals implements AnimauxInter{
  pattes : number;
  couleur: string;

  constructor(pattes : number, couleur : string){
      this.pattes = pattes;
      this.couleur = couleur;
  }
}


class Chat extends Animals {

}

class ChatEuropeen extends Chat{

}

class ChatChartreux extends Chat{

}



class Chien extends Animals{

}

class ChienTerreNeuve extends Chien{

}

class ChienMoonMoon extends Chien{

}




class Oiseau extends Animals{

}

class Mesange extends Oiseau{

}

class Merle extends Oiseau{

}




class Poisson extends Animals{

}
class Thon extends Poisson{

}

class Requin extends Poisson{

}



class Asticot extends Animals{

}




// ACTIONS //

function photo(animal: Animals){
  console.log("Photo des animaux");
}

function chatQuiMiaule(chat: Chat){
  console.log("Miaou");
}

function aboiement(chien: Chien){
  console.log("Wouaf");
}

function voler(oiseau: Oiseau){
  console.log("Splaf");
}

function nager(poisson: Poisson){
  console.log("Glouglou");
}

function caresserLesAnimauxAQuatrePattes(animal: Animals){
  if(animal.pattes === 4){
    console.log("Carresse");  
  }
  else{
      console.log("Pas de caresse");
  }
  
}

function nourrir(animal : Animals){
  if(animal.couleur === "noir"){
      console.log("Miam");
  }else{
      console.log("Ne mange pas");
  }
  
}

const medor = new ChienTerreNeuve(4, "noir");

caresserLesAnimauxAQuatrePattes(medor);
nourrir(medor);