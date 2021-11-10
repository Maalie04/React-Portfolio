import React,{ useEffect } from "react";
import PortfolioCard from './PortfolioCard';

const portfolioItems = [
    {
        title: 'Rare Hair',
        repo: 'https://github.com/Maalie04/final-project',
        deployed: 'https://frozen-thicket-85175.herokuapp.com/',
    },
    {
        title: 'Capitol Properties',
        repo: 'https://github.com/Maalie04/CapitolProperties',
        deployed: '#',
    },
    {
        title: 'Recipe Search',
        repo: 'https://github.com/Maalie04/recipe-search',
        deployed: 'https://tranquil-springs-98499.herokuapp.com/',
    },
    {
        title: 'Fitness Tracker',
        repo: 'https://github.com/Maalie04/Workout_Tracker',
        deployed: 'https://enigmatic-oasis-24150.herokuapp.com/',
    },
    {
        title: 'Budget Tracker',
        repo: 'https://github.com/Maalie04/budget-tracker',
        deployed: 'https://mysterious-fjord-17199.herokuapp.com/',
    },
    {
        title: 'Profile Generator',
        repo: 'https://github.com/Maalie04/Profile-Generator',
        deployed: '#',
    },
];


export default function Portfolio(props) {
    useEffect(() => {
        document.title = `${props.title}`;
    });
    return (
        <div> 
        <h1 className='display-5 fw-bold'>{props.title} Portfolio Page </h1>
        <div className='container'>
            <p>
                Full Portfolio
            </p>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {portfolioItems.map((site) => (
						<PortfolioCard
							title={site.title}
							repo={site.repo}
							deployed={site.deployed}
						></PortfolioCard>
					))}
            </div>
        </div>
        </div>
    );
}