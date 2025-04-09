// pokemon-list.js
import { LitElement, html, css } from 'lit';

export class PokemonList extends LitElement {
  static properties = {
    pokemones: { type: Array }
  };

  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
    }
    .card {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
      cursor: pointer;
      border-radius: 8px;
    }
    img {
      width: 96px;
      height: 96px;
    }
  `;

  render() {
    return html`
    <div style="text-align: center;background-color: #ef5350;
    width: 100%;
    margin-bottom: 1rem;">
    <img src="header.png" alt="Header" style="width: auto; padding-bottom: 1rem; padding-top: 1rem;" />
    </div>
      <div class="grid">
        ${this.pokemones?.map(
          p => html`
            <div class="card" @click=${() => this._select(p)}>
              <img src="${p.image}" alt="${p.name}" />
              <div><strong>${p.name}</strong></div>
              <div>${p.type}</div>
            </div>
          `
        )}
      </div>
    `;
  }

  _select(pokemon) {
    this.dispatchEvent(new CustomEvent('select', { detail: pokemon }));
  }
}

customElements.define('pokemon-list', PokemonList);
