// 1. DEFINIRE LA LISTA DELLA SPESA 
const list = ["Pasta", "Pomodori", "Zucca", "Arance", "Pere", "Mele", "Detersivo", "Zucchero", "Cereali" ]
// 2. DICHIARO LA VARIABILE CONTATORE
let i=0
const list_container = document.getElementById('shopping-list')
// 3. DICHIARO LA CONDIZIONE DEL CICLO
while(i<list.length){
    const li = document.createElement('li')
    li.innerText = list[i]
    list_container.appendChild(li)
    // 4. INCREMENTO DEL CONTATORE
    i++
}