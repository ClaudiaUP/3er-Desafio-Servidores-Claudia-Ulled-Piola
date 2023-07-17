import {ProductManager} from './productManager.js';

let productManager = new ProductManager();

let persistProduct = async ()=>{
     await productManager.addProduct('Heladera', 'Con freezer frost 424Lts.', 380000, 'imagen1','zx102'); 
     await productManager.addProduct('Lavarropas', 'Horizontal', 180000, 'imagen2', 'zx134'); 
     await productManager.addProduct('Cocina', '4 hornallas, timer, gas natural', 150000, 'imagen3', 'zx85'); 
     await productManager.addProduct('Aspiradora', '2000W', 89000, 'imagen4', 'cx78'); 
     await productManager.addProduct('Notebook', '15.6" Core 13 4GB', 380000, 'imagen5','zx100'); 
     await productManager.addProduct('Impresora', 'Multifunción Laser', 180000, 'imagen6', 'zxc13'); 
     await productManager.addProduct('Reloj', 'Inteligente, deportivo, Negro', 5400, 'imagen7', 'weq29'); 
     await productManager.addProduct('Celular', 'Samsung Galaxy', 89000, 'imagen8', 'mnb15'); 
     await productManager.addProduct('Aire Acondicionado', 'Split frio/calor', 264000, 'imagen7', 'ceq50'); 
     await productManager.addProduct('Termotanque', 'Seniorial 85 lts', 82000, 'imagen8', 'fgj87'); 
    /* await productManager.updateProduct(1,'price',1000) */ 
     await productManager.getProducts();  
    /* await productManager.getProductById(1); */
    
    
    }

persistProduct(); 
/* productManager.getProducts(); */
/* productManager.getProductById(1); */  
