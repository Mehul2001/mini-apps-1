class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};
        this.onClick = this.onClick.bind(this);
    }
     onClick(){
         this.setState({
             count: this.state.count + 1});
          }
   
    render() {
        if(this.state.count === 0) {
            return (
                <div>
                    <h1>This is a form</h1>
                    <button onClick={this.onClick}>CheckOut</button>
                </div>
            )
        } 
         if (this.state.count === 1){
            return (
                <div>
                    <h1>Form 1</h1>
                    <button onClick={this.onClick}>Next</button>
                </div>
            ) 
        }
        if (this.state.count === 2){
            return (
                <div>
                    <h1>Form 2</h1>
                    <button onClick={this.onClick}>Next</button>
                </div>
            ) 
        }
        if (this.state.count === 3){
            return (
                <div>
                    <h1>Form 3</h1>
                    <button onClick={this.onClick}>Next</button>
                </div>
            ) 
        }
        if (this.state.count === 4){
            return (
                <div>
                    <h1>Purchase Statement</h1>
                    <button onClick={this.onClick}>Purchase</button>
                </div>
            ) 
        }
        if (this.state.count === 5){
            return (
                <div>
                    <h1>This is a form</h1>
                    <button onClick={this.onClick}>CheckOut</button>
                </div>
            ) 
        }
    }
}





ReactDOM.render(<App/>,document.getElementById('app'));