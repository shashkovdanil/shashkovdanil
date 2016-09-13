/*добавим массив со статьями*/
var articles = [
  {
    title: 'title1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'author1'
  },
  {
    title: 'title2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'author2'
  },
  {
      title: 'title3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'author3'
    }
];
/*создадим компонент, в котором создадим шаблон статьи, в котором пройдемся по нашему массиву со статьями и отрендерим их*/
var Article = React.createClass({
  render: function () {
    var articleTemplate = this.props.data.map(function (item, index) {
      return (
        <div key={index}>
          <h1>{item.title}</h1>
          <p className="art-text">{item.text}</p>
          <p className="author-name">{item.author}</p>
        </div>
      )
    })
    return (
      <div>
        {articleTemplate}
      </div>
    );
  }
});
/*отображаем компонент в элементе с id = "my-article"*/
ReactDOM.render(
  <Article	data={articles}	/>,
  document.getElementById('my-article')
);
