import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../actions/expense-actions';

class ExpenseItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expense: this.props.expense ? this.props.expense : undefined,
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleUpdate(expense) {
        this.props.updateExpenseItem(expense);
        this.setState({update: false});
    }

    handleDelete() {
        this.props.deleteExpenseItem(this.props.expense);
    }

    render(){
        return(
            <div className={this.state.update === true ? 'update' : 'item'}
                key={this.props.expense._id} 
                onDoubleClick={() => this.setState({update: !this.state.update})}>
                <h2>{this.props.expense.title}</h2>
                <p>${this.props.expense.budget}</p>
                <h3>{this.props.expense.timestamp.toString()}</h3>
                {renderIf(this.state.update === true,
                    <expenseForm
                        expense={this.props.expense}
                        buttonText='UPDATE'
                        onComplete={this.handleUpdate}/>
                )}

                <button type="button" value={this.props.expense._id} onClick={this.handleDelete}>REMOVE</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
    updateExpenseItem: expense => dispatch(expenseUpdate(expense)),
    deleteExpenseItem: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);