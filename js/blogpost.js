// Flamelink-oppsettet ligger i egen fil (init-flamelink.js)

// hent inn referanser til html-element
let blogPostContainer = document.querySelector('#blogpost_container');

// hent id fra url
const queryString = window.location.search; // "?id=asdfasdfasdf"
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

if (id) {
  app.content.get({
      schemaKey: 'blog', // navnet på schema-et ditt i Flamelink
      entryId: id, // det er denne som gjør at du henter data for ett prosjekt (med angitt id)
      populate: [{ // uten populate for bildefelt, får man ikke med bildedataen (se https://flamelink.github.io/flamelink-js-sdk/#/content)
          field: 'mainImage', // navn på bildefeltet i Flamelink Flamelink
          size: { // her kan du angi størrelsen på bildet du får returnert
            height: 9999,
            quality: 1,
            width: 667
          }
        }
      ]
    })


    .then(blogPost => {
      let html = `
        <article class="blogPost">
          <figure class="blogPostImgContainer"><img src="${blogPost.mainImage[0].url}" class="blogPostImg"></figure>
          <h1 class="h1-blogpost">${blogPost.blogTitle}</h1>
          <h3 class="h3-author">${ blogPost.author}</h3>
          <h3 class="h3-date">${ blogPost.date}</h3>

          <p>${ blogPost.leadParagraph }</p>

          <div class="blogcontent">${ blogPost.blogPostContent }</div>
            
          
          
          
          ${ blogPost.linkToWebsite ? `<a href="${blogPost.linkToWebsite}" target="_blank">Link til prosjekt-nettsiden</a>` : "" }
         </article>

      `;

      blogPostContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Det skjedde en feil', error);
    })
} else {
  blogPostsContainer.innerHTML = "Fant ikke prosjekt-ID :/";
}