import { World, setWorldConstructor } from '@cucumber/cucumber';


class CustomWorld extends World {
  constructor(options) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);