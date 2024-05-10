// Array con prendas disponibles y su precio
const clothingItems = [
    { name: 'Top', price: 1500 },
    { name: 'Calza', price: 2300 },
    { name: 'Short', price: 1800 },
  ];
    
  // Funcion para retornar ropa disponible
  function displayClothingItems() {
    let message = 'Prendas Disponibles:\n';
    for (const item of clothingItems) {
      message += `${item.name} - $${item.price}\n`;
    }
    alert(message);
  }
  
  // Function para simular la compra
  function simulatePurchase() {
    const itemName = prompt('Ingrese el nombre de la prenda que desea comprar (Top, Calza, or Short):');
    if (itemName === null) {
      alert('Has ingresado valores invalidos');
      return;
    }
    const selectedClothingItem = clothingItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (selectedClothingItem) {
      const quantity = parseInt(prompt('Ingrese cantidad de prendas que desea comprar:'), 10);
      if (isNaN(quantity)) {
        alert('Por favor ingrese un numero valido.');
        return;
      }
      const totalPrice = selectedClothingItem.price * quantity; 
      //alert(`Compraste ${quantity} ${selectedClothingItem.name}(s) por un total de $${totalPrice.toFixed(2)}.`);
      let confirmation = confirm(`Compraste ${quantity} ${selectedClothingItem.name}(s) por un total de $${totalPrice.toFixed(2)}.\nHaz click en "Aceptar" para confirmar tu compra\no de lo contrario en "Cancelar" para cancelar tu compra`);
      if (confirmation){
        alert('compra confirmada');
      }else{
        alert('compra cancelada');
      }
    } else {
      alert('Item no encontrado. Elige alguno de nuestras prendas disponibles (Top, Calza, or Short).');
    }
  }
  
  // Function para empezar el simulador e-commerce
  function startECommerceSimulation() {
    const action = prompt('Bienvenido!\n Elige alguna de las siguientes opciones:\n1. Prendas dispobibles\n2. Comrpar\n3. Salir');
    if (action === null) {
      alert('Gracias por usar nuestro simulador de e-commerce!');
      return;
    }
    switch (action) {
      case '1':
        displayClothingItems();
        startECommerceSimulation(); // retorna al menu principal
        break;
      case '2':
        simulatePurchase();
        startECommerceSimulation();
        break;
      case '3':
        alert('Gracias por usar nuestro simulador de e-commerce!');
        break;
      default:
        alert('Por favor, selecciona una option valida.');
        startECommerceSimulation(); // para reiniciar la simulacion
    }
  }

  // comenzar simulador
  startECommerceSimulation();