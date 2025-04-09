// pokemon-details.js
import { LitElement, html, css } from 'lit';

export class PokemonDetails extends LitElement {
  static properties = {
    pokemon: { type: Object }
  };

  static styles = css`
    .evolutions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .card {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
      border-radius: 8px;
    }
    img {
      width: 96px;
      height: 96px;
    }
    button {
      margin-bottom: 1rem;
    }

    .color-button{
      background-color: #ef5350;
      padding-left: 1rem;
      padding-right: 1rem;
      border: 0;
      font-size: 1.3rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-radius: 0.2rem;
      color: white;
    }
  `;

  render() {
    return html`
      <button @click=${this._goBack} class="color-button">Volver</button>
      <h2>Evoluciones de ${this.pokemon.name}</h2>
      <div class="evolutions">
        ${this.pokemon.evolutions.map(
          evo => html`
            <div class="card">
              <img src="${evo.image}" alt="${evo.name}" />
              <div><strong>${evo.name}</strong></div>
              <div>${evo.type}</div>
            </div>
          `
        )}
      </div>
    `;
  }

  _goBack() {
    this.dispatchEvent(new CustomEvent('back'));
  }
}

customElements.define('pokemon-details', PokemonDetails);
