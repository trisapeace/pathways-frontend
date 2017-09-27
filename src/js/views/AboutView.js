import React from 'react';

import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperCard} from 'polymer/paper-card';

class AboutView_Main extends React.Component {
    render() {
        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>
                            Mauris vehicula fringilla hendrerit. Nam quis lacus a
                            ipsum sollicitudin dapibus in et sem. Aliquam lacinia
                            scelerisque nulla sed suscipit. Phasellus et diam ut
                            augue pretium scelerisque et a ligula. Nam consequat
                            consequat odio in vulputate. Proin a fringilla odio.
                        </p>
                    </div>
                </PaperCard>
            </div>
        );
    }
}

export default class AboutView extends SimpleAppView {
    constructor(props) {
        super({
            ...props,
            title: "About",
            parent: '/',
            mainComponent: AboutView_Main
        });
    }
}
