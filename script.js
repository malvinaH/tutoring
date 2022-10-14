// const containerEl = document.querySelector(".container");
// const tutoringEl = document.querySelector("#tutoring");
// const btnEl = document.querySelector("#btn");
// const gList = document.getElementById("gList");
// const groceryList = ["banana", "apple", "pear", "detergent"];


// function displayList(){
//     for (let i=0; i<groceryList.length; i++){
//         const li = document.createElement("li")
//         li.textContent = groceryList[i];
//         gList.append(li);
//     }
// }

// btnEl.addEventListener("click", ()=>{
//     console.log("click", window);
//     tutoringEl.style.color = "#6e1423";
//     tutoringEl.innerHTML = "Groceries List"
//     displayList();
// })

const userInput = document.getElementById("user-input");
const searchBtn = document.getElementById("search-btn");
const movieContainer = document.querySelector(".movie-container");

function getMovies(movie){
    console.log(movie);
    const saveUrl = `http://www.omdbapi.com/?s=${movie}&apikey=2c0fc768`
    fetch(saveUrl)
    .then((res)=>{
        // console.log(res.json());
        return res.json();
    }) .then((data)=>{
        // console.log(data.Search);
        displayMovies(data.Search);
    })

}

function displayMovies(movies){
    console.log(movies);
    for (let i=0; i<movies.length; i++){
        const card = document.createElement("div");
        card.setAttribute("class", "card")
        // .class --- CSS styles

        // const image = document.createElement("img");
        // image.setAttribute("src", movies[i].Poster)
        // card.append(image);
        // movieContainer.append(card)

        const title = document.createElement("p");
        title.setAttribute("src", movies[i].Title)
        card.append(title)
        movieContainer.append(card)

    }
}

searchBtn.addEventListener("click", ()=>{
    console.log("click");
    const inputStored = userInput.value;
    // console.log(inputStored);
    getMovies(inputStored);
})


