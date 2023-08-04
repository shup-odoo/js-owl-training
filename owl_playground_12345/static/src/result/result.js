/** @odoo-module */

import { Component } from "@odoo/owl";

export class Result extends Component {
    setup() {
        this.user = useState({ value: 0 });
        this.computer = useState({ value: 0 });
    }

    increment() {
        this.user.value = this.user.value + 1;
    }
}
    
}

Result.template = "owl_playground.ResultTemplate";
