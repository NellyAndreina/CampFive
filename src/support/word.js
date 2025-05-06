import { World, setWorldConstructor } from '@cucumber/cucumber';
//Aqui debo importar mis pages

class CustomWorld extends World {
  constructor(options) {
    super(options);
  }
}
setWorldConstructor(CustomWorld);