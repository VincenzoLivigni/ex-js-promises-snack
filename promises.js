/*
Snack 1 - ✔️
Ottieni il titolo di un post con una Promise.

✔️ - Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
*/

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