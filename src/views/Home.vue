<template>
  <div class="second-row">
    <div class="text-box">
      <h1>Virtual Presenetation</h1>
      <h2>Share your reseach</h2>
      <p>
        Connect with pioneering researchers and share your research instantly
        with peers. Discover the latest research findings and get in touch with
        top scientists around the globe.
      </p>

      <base-button class="routeClass">
      <router-link :to="{ name: 'TheSearch' }">Search</router-link>
      
      </base-button>

      
    </div>

    <img class="ScienceCollab" src="../assets/Images/Elsevier-collab-image.jpg" alt="" />
  </div>

  <div class="third-row">

        <div class="card">
            <div class="Card-image card-1"></div>
            <p class="heading-card">Top News</p>
            <p class="description">Latest scientific news and headlines around the world</p>
            <a href="#">Read More</a>
        </div>

        <div class="card">
            <div class="Card-image card-2"></div>
            <p class="heading-card">Top Authors</p>
            <p class="description">The most influential Authors rated by people and researchers </p>
            <router-link :to="{ name: 'TopAuthors' }">Top Authors</router-link>
        </div>

        <div class="card">
            <div class="Card-image card-3"></div>
            <p class="heading-card">Top Posters</p>
            <p class="description">The most appealing poster rated by people and researchers </p>
            <router-link :to="{ name: 'TopPosters' }">Top Posters</router-link>
        </div>

    </div>
</template>

<style scoped>

.second-row {
    width: 100%;
    background-color: rgba(132, 229, 247, 1);
    padding: 100px 10%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

/* Styling the text box in the middle of the website */
.text-box {
    width: 50%;
    
}

/* Styling the text within the text box in the middle of the website */
.text-box h1 {
    color:rgba(59, 154, 0, 1);
    font-weight: bold;
    padding-bottom: 20px;
    font-size: 40px;
}

/* Styling the text within the text box in the middle of the website */
.text-box h2 {
    color:rgba(59, 154, 0, 1);
    padding-bottom: 30px;
    font-size: 30px;
}

/* Styling the text within the text box in the middle of the website */
.text-box p {
    padding-bottom: 25px;
    line-height: 25px;
    padding-right: 30px;
}


/* Styling the text search button */

.text-box a button {
    font-size: 20px;
    font-weight: bold;
    
    border:1px solid;
    background:none;
    border-radius: 20px;
    padding:10px 90px;

}

/*make the search button responsive to the mouse when hovering over them*/
.text-box a button:hover {
    cursor: pointer;
    color:white;
    transform: scale(1.2);
}

/*styling the image in the left side of the website*/

.ScienceCollab {
    width:50%;
    border-radius: 50px;
    background-size: cover;
    
}


/*adjusting the cards the bottom of the website*/
.third-row {
    width:100%;
    background-color: rgba(211, 126, 223, 0.726);

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10%;
    flex-wrap: wrap;
}


/*styling the cards with 25% width*/
.card {
    width:25%;
    background-color: white;
    margin: 20px ;
    border-radius: 50px;
}

/* styling a frame to contain the images*/

.Card-image {
    height:150px;
    margin-bottom: 15px;
    background-size: cover;
    border-radius: 50px 50px 0 0;
    background-size:cover;
}

/* Uploading the images to the cards*/

.card-1 {
    background-image:url('../assets/Images/News.jpg');
}

.card-2 {
    background-image:url('../assets/Images/Presentation.jpg');
}

.card-3 {
    background-image:url('../assets/Images/Poster.jpg');
}


/*Styling the title of the cards*/

.heading-card {
    padding:0px 10px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}

/*Styling the description of the cards*/

.description {
    padding: 20px;
    font-size: 15px;
    text-align: center;
}

/*Styling the button underneath of each cards*/

.card a {
    padding: 25px;
    background-color: rgb(200, 228, 198);
    text-align: center;
    display: block;
    margin: 20px 50px;
    border-radius: 50px;
    font-size: 15px;
    color:black;
}


/*make each card responsive to mouse when hovering over it */
.card:hover {
    background-color: rgb(32, 31, 31);
    color:white;
    cursor: pointer;
    transform: scale(1.15);
}

.routeClass a{
  color:black;
  padding: 1rem 7rem;
  }



/*Make the website responsive for Mobile */
@media screen and (max-width: 500px)
{
/*Putting the navigation items in header into columns */
    .logo, .first, .second, .third, .forth, .fifth{
        width:100%;
        text-align: center;
        justify-content:center;
        align-items: center;
        margin-top: 25px;       
    }

/*Putting the text box and image in the middle part into columns */
    .text-box, .ScienceCollab {
        width: 100%;
        text-align: center;
        justify-content:center;
        align-items: center;
        padding: 20px 30px;
    }

    /*adjust the font size for mobile */
    .text-box h1 {
             
        font-size: 30px;
    }
    /*adjust the font size for mobile */
    .text-box h2 {
             
        font-size: 20px;
    }
    /*adjust the font size for mobile */
    .text-box p {
             
        padding-right: 0px;
    }
    /*Putting the cards in the bottom part into columns */
    .card {
        width:100%;
        text-align: center;
        justify-content:center;
        align-items: center;
        
    }
    
}

</style>
