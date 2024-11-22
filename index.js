// IMPLEMENTANDO COLA
class Cola {
    constructor() {
        this.almacenCola = {};
        this.inicio = 0;
        this.fin = 0;
    }

    enqueue(elemento) { // Agrega un nuevo elemento al final de la cola
        this.almacenCola[this.fin] = elemento;
        this.fin++;
        return this.almacenCola;
    }

    dequeue() { // Retorna el primer elemento de la cola y lo elimina
        if (this.inicio === this.fin) {
            return null;
        }
        const elemento = this.almacenCola[this.inicio];
        delete this.almacenCola[this.inicio];
        this.inicio++;
        return elemento;
    }

    peek() { // Retorna el primer elemento de la cola sin eliminarlo
        if (this.size() === 0) {
            return null;
        }
        return this.almacenCola[this.inicio];
    }

    size() { // Retorna el número de elementos que contiene la cola
        return this.fin - this.inicio;
    }

    print() { // Retorna los elementos que contiene la cola
        return Object.values(this.almacenCola).join(',');
    }

    isEmpty() { // Retorna true si la cola está vacía y false si no lo está
        return this.inicio === this.fin;
    }
}

// IMPLEMENTANDO PILA CON OBJETO
class Pila {
    constructor() {
        this.almacenPila = {};
        this.contPila = 0;
    }

    push(elemento) { // Agrega un nuevo elemento al final de la pila
        this.almacenPila[this.contPila] = elemento;
        this.contPila++;
        return this.almacenPila;
    }

    pop() { // Retorna el último elemento y lo elimina
        if (this.contPila === 0) {
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    }

    peek() { // Retorna el último elemento sin eliminarlo
        if (this.contPila === 0) {
            return null;
        }
        return this.almacenPila[this.contPila - 1];
    }

    size() { // Retorna el número de elementos de la pila
        return this.contPila;
    }

    print() { // Retorna el contenido de la pila
        return Object.values(this.almacenPila).join(',');
    }
}

// PRUEBAS PARA LA COLA
console.log("COLA IMPLEMENTANDO ARREGLOs");
const cola = new Cola();

cola.enqueue(5);
cola.enqueue(10);
cola.enqueue(15);
cola.enqueue(20);
cola.enqueue(25);
cola.enqueue(30);

console.log("Primer elemento de la cola y lo elimina:", cola.dequeue()); // 5
console.log("Primer elemento:", cola.peek()); // 10
console.log("Tamaño de la cola:", cola.size()); // 5
console.log("Contenido de la cola:", cola.print()); // 10,15,20,25,30
console.log("True o False:", cola.isEmpty()); // false

// PRUEBAS PARA LA PILA
console.log("PILA");
const pila = new Pila();

pila.push(2);
pila.push(4);
pila.push(6);
pila.push(8);
pila.push(10);

console.log("Último elemento de la pila y lo elimina:", pila.pop()); // 10
console.log("Último elemento:", pila.peek()); // 8
console.log("Tamaño de la pila:", pila.size()); // 4
console.log("Contenido de la pila:", pila.print()); // 2,4,6,8
