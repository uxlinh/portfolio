// Flamelink-oppsettet ligger i egen fil (init-flamelink.js)

// hent inn referanser til html-elementer
let blogContainer = document.querySelector('#blogPostContainer');

app.content.get({
		schemaKey: 'blog', // navnet på schema-et ditt
		populate: [{
			field: 'thumbnailImg',
			size: {
				height: 9999,
				quality: 1,
				width: 375
			}
		}]
	})

	.then(blog => {
		let html = "";

		for (const property in blog) {
			console.log('all of your projects', blog);
			let blogPostThumbnail = blog[property];

			html += `
			<a class="blogPostThumbnail" href="./blogpost.html?id=${blogPostThumbnail.id}">
				<div class="imgThumbnailContainer">
					<img src="${ blogPostThumbnail.thumbnailImg[0].url }" class="imgThumbnail">
				</div>
				<h1 class="h1-thumbnail">${ blogPostThumbnail.blogTitle }</h1>
				<p class="p-thumbnail">${ blogPostThumbnail.thumbnailIntro }</p>
			</a>
			`;
		}

		blogContainer.innerHTML = html;
	})
	.catch(error => {
		console.error('Det skjedde en feil', error);
	})