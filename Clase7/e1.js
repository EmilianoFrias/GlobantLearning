class hero {
    name;
    position;
    health;
    damage;
    exp;

    constructor(name,position,health,damage,exp){
        this.name= name || 'heroe';
        this.position = position || '00'; 
        this.health = health || 100;
        this.damage = damage || 5;
        this.exp = exp || 0;
    }

}

let heroe = new hero();
console.log(heroe);
let goku = new hero("goku","01",100,25,1000);
console.log(goku);

