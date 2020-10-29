import React from 'react';
import Recipe from '../components/Recipe';
import Loading from '../components/Loading';
import { useGlobalContext } from '../utils/context';
import SearchForm from '../components/SearchForm';

function RecipeList() {

    const { recipes, loading } = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if (recipes.length < 1) {
        return (
            <div className="search__container">
                <SearchForm />
                <h2 className='search__error'
                >
                    No recipes matched your search criteria, try something else
                </h2>
            </div>
        )
    }

    return (
        <div>
            <SearchForm />
            <ul className="recipe__list">
                {recipes.map((recipe) => {
                    return (
                        <Recipe key={recipe.id} {...recipe} />
                    )
                })}
            </ul>
        </div>
    );
}

export default RecipeList; 