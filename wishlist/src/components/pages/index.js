import React, { Component } from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';

class Index extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="header">Wish List Therapy</div>
                </header>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-4">
                            <button type="button" className="btn btn-default">Left</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-default">Middle</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-default">Right</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Index;