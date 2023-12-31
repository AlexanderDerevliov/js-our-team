//FUNZIONI

// adding cards
function addCard(){
    for (let i = 0; i < team.length; i++) {
        const members = team[i];
        let cardElements = document.createElement("div")
        cardElements.classList.add("card");
        let member;
        for (const key in members) {
            member = document.createElement("div");
            member.innerHTML = (members[key]);
            cardElements.append(member)
        }

        const img = team[i].foto;
        member.innerHTML = "";
        let image = document.createElement("div");
        image.classList.add("member-card");
        image.innerHTML = `<img src="${img}" />`
        member.append(image);

        rowEl.append(cardElements);

    }
}



//VARIABILI
const rowEl = document.querySelector(".row");

//  creo l'array di oggetti con i dati forniti
const team = [
    //primo membro del team
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "../img/wayne-barnett-founder-ceo.jpg"
    },
    //secondo membro del team
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "../img/angela-caroll-chief-editor.jpg"
    },
    //terzo membro del team
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "../img/walter-gordon-office-manager.jpg"
    },
    //quarto membro del team
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "../img/angela-lopez-social-media-manager.jpg"
    },
    //quinto membro del team
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "../img/scott-estrada-developer.jpg"
    },
    //sesto membro del team
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "../img/barbara-ramos-graphic-designer.jpg"
    }
]




setTimeout(addCard, 2 * 1000);