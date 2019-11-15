function getArticleGenerator(input) {  
	let div = document.getElementById('content');
	let i = 0;
	function nextArticle() {
		if (i >= input.length) return;
		let html = `<article>
		${input[i++]}
		</article>`;
		div.innerHTML += html;
	}
	return nextArticle;
}