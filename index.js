// Write your classes below this line
class user{
    constructor(name, address, email, phoneNumber, prime = false){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.prime = prime;
        this.cart = [];
        this.orders = []
    }
    search(){
        
    }
    checkCart(){
        
    }
}

class items{
    constructor(name, description, price, rating, inStock = true){
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.inStock = inStock
    }
    addToCart(){
        
    }
    addToFavorites(){
        
    }
    takeDiscount(){
        
    }
}

class cart{
    constructor(){
        
    }
}

class order{
    constructor(){
        
    }
}


// Test your code below this line by instantiating instances and invoking methods
console.log("Welcome to Amazon!")
