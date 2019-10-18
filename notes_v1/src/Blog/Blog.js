import React from 'react';
import './Blog.css'

const article = (props) => {
	return (
		<div className="article">
			<p> Weelcome, here will be {props.article_count} articles to blog</p>
			<strong>{props.children}</strong>
		</div>		
	);
};

export default article;