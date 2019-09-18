import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';

function Index(props) {
    return (
        <>
            <header>
                <div className="header">Wish List Therapy</div>
            </header>
            <div class="container">
                <div class="row text-center">
                    <div class="col-4">
                        <button type="button" className="btn btn-default">Left</button>
                    </div>
                    <div class="col-4">
                        <button type="button" className="btn btn-default">Middle</button>
                    </div>
                    <div class="col-4">
                        <button type="button" className="btn btn-default">Right</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;