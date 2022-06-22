// - Make sure you check and understand the data that is given to you! 
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS
function createAPokemonCard(pokemon) {
let pokemonCard=document.querySelector('.cards');
let listofCards=document.createElement("li");
listofCards.className="card";

   let cardTitle=document.createElement('h2');
   cardTitle.className='card-title';

   let cardImage=document.createElement('img');
   cardImage.width=256;
   cardImage.className='card--image';
   cardImage.src=pokemon.sprites.other['official-artwork'].front_default;

   let cardText=document.createElement('ul');
   cardText.className='card-text';
   for( let cardTextItem of pokemon.stats){
       let  cardTextItemI=document.createElement('li');
       cardTextItemI.textContent=`${cardTextItem.stat.name}: ${cardTextItem.base_stat}`;
     cardText.appendChild(cardTextItemI);

   }
document.body.append(listofCards);
listofCards.append(cardTitle,cardImage,cardText);
pokemonCard.append(listofCards);
}
for(let pokemon of data){
    createAPokemonCard(pokemon);
}
// //Challenge
// Add an extra section to each card that contains information about which games each pokemon appeared in