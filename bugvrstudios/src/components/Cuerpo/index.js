// src/components/About/index.js
import React, { Component } from 'react';
import { Link } from 'react-router';
import posts from'../posts';
/*import classnames from 'classnames';*/

import './style.css';

export default class Cuerpo extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
/*    const { className, ...props } = this.props;*/
    return (
        <div className="container">
          <div className="section">

            <section className="posts light">
              <h3 className="center" >Posts </h3>
              <div className="row">
                <div className="col s12 ">
                  <div className="icon-block">

                        {posts.map(post => 
                          <article key={post.id} className="post">
                            <Link to={`/post/${post.id}`}>
                              <h4>{post.title}</h4>
                              <p>{post.excerpt}</p>
                              <span>{post.author} </span>
                            </Link>
                          </article>
                        )}
                  </div>
                </div>
              </div>                  
            </section>
          </div>
      </div>

    );
  }
}