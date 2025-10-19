import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold text-primary'>All Category</h2>
            <div className='grid grid-cols-1 my-5 gap-5'>
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.id}`}
                            className="pl-5 font-bold py-2 rounded-sm hover:text-primary hover:bg-base-300"
                            key={category.id}
                        > {category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;