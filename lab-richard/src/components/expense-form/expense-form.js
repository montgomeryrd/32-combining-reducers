import React from 'react';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.expense
            ? this.props.expense
            : {
                title: '',
                budget: '',
                categoryId: this.props.category._id,
                update: false,
            };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(this.state);
    }    

    render() {
        return  (
            <form className="expense-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="expense"
                    required="true"
                    value={this.state.title}
                    onChange={this.handleChange}
                />

                <input
                    type="number"
                    name="budget"
                    placeholder="budget"
                    required="true"
                    value={this.state.budget}
                    onChange={this.handleChange}
                />

                <button type="submit">{this.props.buttonText}</button>
            </form>
        );
    }
}

export default ExpenseForm;