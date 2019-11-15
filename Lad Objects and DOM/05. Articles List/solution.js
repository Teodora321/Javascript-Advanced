function createArticle() {
	
	let title = document.getElementById('createTitle').value;
	let text = document.getElementById('createContent').value;

	let articleList = document.getElementById('articles');

	if( title && text){
		let article = document.createElement('article');
		let h3 = document.createElement('h3');
		h3.textContent=title;
		let p = document.createElement('p');
		p.textContent=text;

		article.appendChild(h3);
		article.appendChild(p);
		articleList.appendChild(article);
	}
	document.getElementById('createTitle').value='';
	document.getElementById('createContent').value='';
}



// function solve() {
// 	let createTitleElement = document.getElementById('createTitle');
// 	let createTitleValue = createTitleElement.value;
	
// 	let createContentElement = document.getElementById('createContent');
// 	let createContentValue = createContentElement.value;

// 	if(createTitleValue && createContentValue){
// 		let titleElement = document.createElement('h3');
// 		titleElement.textContent = createTitleValue;

// 		let contentElement = document.createElement('p');
// 		contentElement.textContent=createContentValue;

// 		let articleElement = document.createElement('article');
// 		articleElement.appendChild(titleElement);
// 		articleElement.appendChild(contentElement);

// 		let articlesElement = document.getElementById('articles');
// 		articlesElement.appendChild(articleElement);

// 		createTitleElement.value='';
// 		createContentElement.value='';
// 	}
// }