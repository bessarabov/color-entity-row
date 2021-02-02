class ColorEntityRow extends Polymer.Element {

  static get template() {
    console.log('template');
    return Polymer.html`

  <hui-generic-entity-row
    config="[[_config]]"
    hass="[[_hass]]"
    >

    <input type="color" value="[[stateObj.state]]" on-change='changeHandler'>

  </hui-generic-entity-row>

    `;
  }

  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
  }

  changeHandler(e) {
    this._hass.callService("input_text", "set_value", {
      entity_id: this.stateObj.entity_id,
      value: e.target.value.toUpperCase(),
    });
  }

}

customElements.define('color-entity-row', ColorEntityRow);
