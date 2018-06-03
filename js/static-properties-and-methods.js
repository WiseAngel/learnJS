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

// использование
new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)