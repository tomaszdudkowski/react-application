import React from "react";
import PopularArticle from "./Elements/_PopularArticle";
import "../SCSS/Components/_mostPopular.scss"

export default function MostPopular({articles}) {

    const Articles = articles.map(article => {
        if(article.id < 4) return <PopularArticle key={article.id} {...article} />;
             
    });

    return(
        <div className="popular">
            <h1 className="header">#<span className="accent">MOST</span>POPULAR</h1>
            {Articles}
        </div>
    )
}