import React,{ useEffect } from "react";
import PortfolioCard from './PortfolioCard';

const p


export default function Portfolio(props) {
    useEffect(() => {
        document.title = `${props.title}`;
    });
    return (
        <div> 
        <h1 className='display-5 fw-bold'>{props.title} Portfolio Page </h1>
        <div className='container'>
            <p>
                React Portfolio
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