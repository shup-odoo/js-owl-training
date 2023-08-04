/** @odoo-module **/

import { Result } from "./result/result";
import { ScoreBoard } from "./score_board/score_board";
import { Component } from "@odoo/owl";


export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Result , ScoreBoard};
    setup(){
        
    }
}
