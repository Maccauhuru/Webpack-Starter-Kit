
/*jshint esversion:6*/
//ES6 Classes
class Entity {
constructor(name,height){
this.name   = name;
this.height = height;
}
greet(){
  console.log(`Hi im ${this.name} from Earth!`);
}
  }

// let Jasper = new Entity("Jasper",5.11);
// Jasper.greet();

export default Entity;