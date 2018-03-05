import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import CategoryForm from '../category-form/category-form.js';
import CategoryItem from '../category-item/category-item.js';
import {categoryCreate, categoryUpdate} from '../../actions/category-actions.js';

class Dashboard extends React.Component {
    render() {
        return (
            <section>
                <h1>Expenses</h1>

                <CategoryForm
                    buttonText='CREATE'
                    onComplete={this.props.createCategoryItem}/>

                {renderIf(this.props.categories,
                    this.props.categories.map(cat =>
                        <CategoryItem 
                            className="category-items"
                            key={cat._id}
                            category={cat}>
                        </CategoryItem>)
                )}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
    createCategoryItem: category => dispatch(categoryCreate(category)),
    updateCategoryItem: category => dispatch(categoryUpdate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);