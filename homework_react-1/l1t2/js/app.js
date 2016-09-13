//создаем компонент
var Input = React.createClass({
//устанавливаем первоначальное состояние
  getInitialState: function() {
                return {
                    name: " stranger"
                };
            },
//отслеживание изменения состояния input
  handleNameChange(event) {
    this.setState({
      name : event.target.value
    });
},
//рендерим
  render: function () {
    return (
      <div className="text-area">
//вешаем обработчик события на input
        <input type="text" onChange={this.handleNameChange} />
        <div className="hello-man" >
//отображаем в диве текущее состояние name
          Hello, {this.state.name}!
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <Input />,
  document.getElementById('hello')
);
