// Flamelink-oppsettet ligger i egen fil (init-flamelink.js)

// hent inn referanser til html-elementer
let blogContainer = document.querySelector('#blog_container');

app.content.get({
	schemaKey: 'blog', // navnet på schema-et ditt
	populate: [{
		field: 'mainImage',
		size: {
			height: 9999,
			quality: 1,
			width: 375
		}
	}]
})

.then(blog => {
	let html = "";

	for(const property in blog) {
        console.log('all of your projects', blog);
		let proj = blog[property];

		html += `
		<a class="blog-listing" href="./blogpost.html?id=${proj.id}">
			<h2>${proj.blogTitle}</h2>
			<p>${ proj.textArea }</p>
			<img src="${proj.mainImage[0].url}" class="img-thumbnail">
		</a>
		`;
	}

	blogContainer.innerHTML = html;
})
.catch(error => {console.error('Det skjedde en feil', error);})