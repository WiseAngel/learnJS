function Article() {
  this.created = new Date();
  Article.count++;
  Article.time = this.created;
};

Article.count = 0;
Article.showCount = function() {
  alert(this.count);
};

Article.showStats = function () {
		alert('Всего: ' + this.count+','+ ' Последняя: ' + Article.time)
};


/* function Article() {
  Article.created = new Date();
  Article.count++;
}
Article.count = 0;
Article.showStats = function () {
  console.log(this.count);
  console.log(this.created);
}; */

// использование
new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)