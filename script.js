let url = 'https://randomuser.me/api/?results=10&gender=female';


fetch(url)
.then((response) => response.json())

.then(function (data) {
    console.log(data);
    for (const user of data.results) {
        esclave = {
            prenomSlave: user.name.first,
            nomSlave: user.name.last,
            ageSlave: user.dob.age + ' ans',
        }
    }
    console.log(esclave);
})

.catch(function (error){
    console.log(error);
    console.log('url mauvaise');
})


let milleniumFalcon = {
    reservoir: 0,
    construite: false,
    passagers: [],
    planete: "Corusante",
    status: '',


    construireFusee () {
        this.construite = true;
        console.log('Vaisseau prêt Capitaine', this.construite);
    },


    rempirReservoir () {
        this.reservoir = 100;
        console.log('Plein au maximum de sa capacitée - ', `Carburant= ${this.reservoir} %`);
    },

    ajouterPassager (esclave) {
        if (this.passagers.length < 4) {
            this.passagers.push(esclave);
            console.log('Les esclaves c\'est dans la cale', ` Total= ${this.passagers.length}`, this.passagers);
        } else {
            console.log('Arrête tes conneries, ils sont déjà 4');
        }
    },

    decolage () {
        if (this.construite == false) {
            console.log('Et tu veux partir avec quelle navette? Construit moi ca vite fait');
        } else {
            if (this.reservoir < 35) {
                console.log('Mais quel amateur, remplie moi ce p..... de réservoir');
            } else {
                if (this.passagers.length < 4) {
                    console.log('Et la cargaison? Je ne bouge pas si je n\'ai pas mes 4 passagers');
                } else {
                    this.status = 'en vole'
                    this.reservoir = this.reservoir - 35;
                    console.log(`Et on décolle regarde, nous somme ${this.status}`, `Carburant à ${this.reservoir}%`);
                }
            }
        }
    },

    atterissage (naboo) {
        if (this.status != 'en vole') {
            console.log('On est déjà au sol bougre d\'âne');
        } else {
            this.status = 'sur une planete';
            this.planete = 'Naboo';
            console.log(`Acrochez-vous, j'ai plus tendance à me cracher que d'atterir sur ${naboo}`);
        }
    }
}

console.log(milleniumFalcon);