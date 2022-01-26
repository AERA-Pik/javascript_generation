const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");  
    userController.add(user);
    //toContain revisa si el return del expect contiene el (dato)
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test ('findByEmail user controller', () => {
    let email = 'aaron@gmail.com';
    let user = new User (4321, 'Aaron Eduardo', email);    
    userController.add(user);
    //toEqual compara el return del expect para ver si es igual
    expect(userController.findByEmail(email)).toEqual(user);
  });

test ('findByEmail user controller', () => {
    let id = 4321;
    let user = new User (id, 'Aaron Eduardo', 'aaron@gmail.com');    
    userController.add(user);
    expect(userController.findById(id)).toEqual(user);
  });
