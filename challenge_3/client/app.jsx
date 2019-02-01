class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: '',
            email: '',
            password: '',
            address1: '',
            address2: '',
            city: '',
            stateName: '',
            zip: '',
            phone: '',
            ccnum: '',
            expiry: '',
            cvv: '',
            zipc: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.count === 4) {
            axios.post('/', this.state)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            this.setState({
                count: 0,
                name: '',
                email: '',
                password: '',
                address1: '',
                address2: '',
                city: '',
                stateName: '',
                zip: '',
                phone: '',
                ccnum: '',
                expiry: '',
                cvv: '',
                zipc: ''
            })
        }
        else {
            this.setState({
                count: this.state.count + 1
            });
        }
        console.log(this.state);
    }

    render() {
        if (this.state.count === 0) {
            return (
                <div>
                    <Form0 handleSubmit={this.handleSubmit} />
                </div>
            )
        }
        if (this.state.count === 1) {
            return (
                <div>
                    <Form1 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                </div>
            )
        }
        if (this.state.count === 2) {
            return (
                <div>
                    <Form2 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                </div>
            )
        }
        if (this.state.count === 3) {
            return (
                <div>
                    <Form3 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                </div>
            )
        }
        if (this.state.count === 4) {
            return (
                <div>
                    <Form4 handleSubmit={this.handleSubmit} finalData={this.state} />
                </div>
            )
        }

    }
}

function Form0(props) {
    return (
        <div>
            <h1>This is a form</h1>
            <button onClick={props.handleSubmit}>CheckOut</button>
        </div>
    )
}

function Form1(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={props.handleChange} />
                <br></br>
                <label>Email:</label>
                <input type="text" name="email" onChange={props.handleChange} />
                <br></br>
                <label>password:</label>
                <input type="text" name="password" onChange={props.handleChange} />
                <br></br>
                <button>Next</button>
            </form>
        </div>
    )
}

function Form2(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>address1:</label>
            <input type="text" name="address1" onChange={props.handleChange} />
            <br></br>
            <label>address2:</label>
            <input type="text" name="address2" onChange={props.handleChange} />
            <br></br>
            <label>city:</label>
            <input type="text" name="city" onChange={props.handleChange} />
            <br></br>
            <label>stateName:</label>
            <input type="text" name="stateName" onChange={props.handleChange} />
            <br></br>
            <label>zip:</label>
            <input type="number" name="zip" onChange={props.handleChange} />
            <br></br>
            <label> phone:</label>
            <input type="number" name="phone" onChange={props.handleChange} />
            <br></br>
            <button>Next</button>
        </form>
    )

}

function Form3(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>credit_Card_Num:</label>
            <input type="number" name="ccnum" onChange={props.handleChange} />
            <br></br>
            <label>expiryDate:</label>
            <input type="number" name="expiry" onChange={props.handleChange} />
            <br></br>
            <label>CVV:</label>
            <input type="number" name="cvv" onChange={props.handleChange} />
            <br></br>
            <label>ZipCode:</label>
            <input type="number" name="zipc" onChange={props.handleChange} />
            <br></br>
            <button>Next</button>
        </form>
    )
}

function Form4(props) {
    return (
        <form>
            <h1>Processing</h1>
            <p>{props.finalData.name}</p>
            <p>{props.finalData.email}</p>
            <p>{props.finalData.password}</p>
            <p>{props.finalData.address1}</p>
            <p>{props.finalData.address2}</p>
            <p>{props.finalData.city}</p>
            <p>{props.finalData.stateName}</p>
            <p>{props.finalData.zip}</p>
            <p>{props.finalData.phone}</p>
            <p>{props.finalData.ccnum}</p>
            <p>{props.finalData.expiry}</p>
            <p>{props.finalData.cvv}</p>
            <p>{props.finalData.zipc}</p>
            <button>Next</button>
        </form>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));