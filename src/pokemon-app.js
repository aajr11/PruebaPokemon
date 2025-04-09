import { LitElement, html, css } from 'lit';
import './pokemon-list.js';
import './pokemon-details.js';
import './pokemon-form.js';
import './pokemon-modal.js';

export class PokemonApp extends LitElement {
  static properties = {
    pokemones: { type: Array },
    selectedPokemon: { type: Object },
    showModal: { type: Boolean }
  };

  constructor() {
    super();
    this.pokemones = [];
    this.selectedPokemon = null;
    this.showModal = false;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('http://localhost:3002/pokemon')
      .then(res => res.json())
      .then(data => {
        this.pokemones = data;
      });
  }

  onSelect(pokemon) {
    this.selectedPokemon = pokemon;
  }

  onBack() {
    this.selectedPokemon = null;
  }

  onShowModal() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }

  render() {
    return html`
      ${this.selectedPokemon
        ? html`
            <pokemon-details
              .pokemon=${this.selectedPokemon}
              @back=${this.onBack}
            ></pokemon-details>
            <pokemon-form
              .pokemon=${this.selectedPokemon}
              @show-modal=${this.onShowModal}
            ></pokemon-form>
          `
        : html`
            <pokemon-list
              .pokemones=${this.pokemones}
              @select=${e => this.onSelect(e.detail)}
            ></pokemon-list>
          `}
      <pokemon-modal
        ?open=${this.showModal}
        @close=${this.onCloseModal}
      ></pokemon-modal>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: sans-serif;
    }
  `;
}

customElements.define('pokemon-app', PokemonApp);
