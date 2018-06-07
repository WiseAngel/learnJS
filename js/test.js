function Article() {
  Article.created = new Date();
  Article.count++;
}
Article.count = 0;
Article.showStats = function () {
  console.log(this.count);
  console.log(this.created);
};
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)




/* Article.showCount = function () {
  console.log(this.count); // (1)
};
// использование
new Article();
new Article();
Article.showCount(); // (2)
 */