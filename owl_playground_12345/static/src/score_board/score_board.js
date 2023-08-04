/** @odoo-module */

import { Component } from "@odoo/owl";

export class ScoreBoard extends Component {
}

ScoreBoard.template = "owl_playground.ScoreBoard";
ScoreBoard.props = {
    id: { type: Number },
    description: { type: String },
    done: { type: Boolean },
    toggleState: { type: Function },
};
