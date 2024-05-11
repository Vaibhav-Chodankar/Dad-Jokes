const btn = document.querySelector("#btn");
const uls = document.querySelector("#uls");

const appendJokes = async () => {
    const newLi = document.createElement('LI');
    const newJoke = await dadJokes();
    newLi.append(newJoke);
    uls.append(newLi);
}

const dadJokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch {
        console.log("Error Ocuured");
        return "No Jokes are availabe";
    }

}

btn.addEventListener('click', appendJokes);
