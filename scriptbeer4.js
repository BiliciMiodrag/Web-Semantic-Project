const beerCollection = document.getElementById('beer-list')
const inputBtn = document.getElementById('insertBtn')
const listOfCateg = document.getElementById('category-list')

var current_category_id = null


 function selectBeers(category_id) {
  return queryFetch(`
    query getBeers($id: ID!) {
      Category(id: $id) {
        Beers {
          id
          name
          description
          temp
          IBU
          ABV
          pairs
          Category{
            name
          }
        }
      }
    }
    `, { id: category_id }).then(data => {
      return data.data.Category.Beers
    })
  }

  inputBtn.addEventListener('mouseover', e => {
    
    const inputID = document.getElementById('id').value
    const inputName = document.getElementById('name').value
    const inputDescription = document.getElementById('description').value
    const inputtemp = document.getElementById('temp').value
    var inputibu = document.getElementById('ibu').value
    const inputabv = document.getElementById('abv').value
    const inputpairs = document.getElementById('pairs').value
    const inputImage = "imagine"
    const inputcategory_select =  current_category_id
    console.log(inputcategory_select)

     if ( isNaN(document.getElementById('id').value) || document.getElementById('id').value=='' || document.getElementById('name').value=='')
    {
      alert("Oops! Validarea a esuat, verifică dacă ai completat ID-ul și numele! Apropo, ID-ul trebuie sa fie numeric");
      return false;
    }
    else if(!inputibu || isNaN(inputibu))
    {
      inputibu=' '

    }
    else  
   { alert("Validarea a avut succes!")}
    

   
   
    insertBeers(inputID, inputName, inputDescription, inputtemp, inputibu, inputabv, inputpairs, inputImage , inputcategory_select)

    afisareBeri(inputcategory_select)
   
 })


 function insertBeers(beerid, beerName, beerDescription, beerTemp, beerIbu, beerAbv, beerPairs, beerImage, beerCategoryId)
    {
      return queryFetch(`
        mutation ($id: ID!
        $name: String!
        $temp:String!
        $ABV: String!        
        $IBU: Int!
        $image: String!
        $pairs:String!
        $description: String!
        $category_id: ID!) {
          createBeer(id: $id, name:$name, temp:$temp,ABV:$ABV, IBU:$IBU, image: $image, pairs:$pairs,description:$description ,category_id:$category_id) {
            id
          }
        }
        `, {id: beerid, name: beerName, description: beerDescription, temp: beerTemp, IBU: beerIbu, image: beerImage, ABV: beerAbv, pairs:beerPairs , category_id: beerCategoryId} 
        )}


function afisareCategorii(categories){
  queryFetch(`
  query {
    allCategories {
      id
      name
    }
  }
  `).then(data => {
    let categories = "";
    data.data.allCategories.forEach(function(category){
      categories +=`
      <li value = ${category.id} class="category-element" id=${category.id} onclick="afisareBeri(${category.id})")>
      ${category.name}</li>`
      cat = `${category.id} `;  
    })
    listOfCateg.innerHTML = categories 
  }) 
}

function afisareBeri(category_id){
  current_category_id = category_id
  queryFetch(`
   query getBeers($id: ID!) {
     Category(id: $id) {
       Beers {
         id
         name
         description
         temp
         IBU
         ABV
         pairs
         image
         Category{
           name
         }
       }
     }
   }
   `, { id: category_id }).then(data => {
   beers = ""
   data.data.Category.Beers.forEach(function (beer){
   beers += `
   <div class = "card border-secondary mb-3" data-id=${beer.id} style="max-height:280px; width:590px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${beer.image}" class="card-img" />
        <buton type="button" class="delete-btn btn btn-outline-danger btn-lg" onclick="stergeBere(${beer.id})">Delete</button>
      </div>
    <div class="col-md-8">
       <div class="card-body">
          <h2 class="card-title">${beer.name}</h2>
          <p class="card-text">${beer.description}</p>
          <p><b>Pairs with: </b>${beer.pairs}</p>
          <p><b>ABV:</b>${beer.ABV}<b>  IBU:</b>${beer.IBU} <b>  Serving Temperature: </b>${beer.temp}</p>
       </div>
     </div>
     </div>
     </div>` 

 })
 beerCollection.innerHTML = beers

}).catch((error) => {
  console.error('Error:', error);
  alert("Selecteaza o categorie");
});

}

 function stergeBere(id){
    return queryFetch(`
      mutation ($id :ID!)
      {
        removeBeer(id:$id)
      }
      `, {id : id}

      )}

    
  function queryFetch(query, variables) {
     return fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        query: query,
        variables: variables
          })
        }).then(res => res.json())
        .catch((error) => {
          console.error('Error:', error);
          alert(eroare);
        });
      }

   
 document.getElementById("buton-categorie").addEventListener("click", ascundeData);

 function ascundeData() {
  var x = document.getElementById("category-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
