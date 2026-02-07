/*
Snack 1 - ✔️
Ottieni il titolo di un post con una Promise.

✔️ - Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
*/

/*
function getPostTitle(id) {

    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    })

    return promessa
}

getPostTitle(7)
    .then(titolo => console.log(titolo))
    .catch(err => console.log(err))
*/


/*
Bonus snack 1 - ✔️ 
Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
*/

function getPost(id) {

    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then(utente => {
                        post.utente = utente
                        resolve(post)
                    })
                    .catch(reject)
            })
            .catch(reject)
    })

    return promessa
}

getPost(1)
    .then(risultato => console.log(risultato))
    .catch(err => console.log(err))


/*
Snack 2 - ✔️ 
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.
*/

/*
function lanciaDado() {

    const promessa = new Promise((resolve, reject) => {

        const numeroRandom = Math.floor(Math.random() * 6) + 1
        const dadoIncastrato = Math.random()

        setTimeout(() => {
            if (dadoIncastrato < 0.2) {
                reject("Il dado si è incastrato...rimarremo sempre nel dubbio, quale numero sarebbe uscito?")
            } else {
                resolve(numeroRandom)
            }
        }, 3000)
    })

    return promessa
}

lanciaDado()
    .then(numeroRandom => console.log(numeroRandom))
    .catch(err => console.log(err))
*/