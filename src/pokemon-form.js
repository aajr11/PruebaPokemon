// pokemon-form.js
import { LitElement, html, css } from 'lit';

export class PokemonForm extends LitElement {
  static properties = {
    pokemon: { type: Object }
  };

  static styles = css`
    form {
      margin-top: 2rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    input, label {
      display: block;
      margin-bottom: 0.5rem;
    }
  `;

  render() {
    return html`
      <form @submit=${this._prevent}>
        <h3>Editar Evoluciones de ${this.pokemon.name}</h3>
        ${this.pokemon.evolutions.map(
          (evo, index) => html`
            <fieldset>
              <legend>${evo.name}</legend>
              <label>
                Nombre:
                <input type="text" .value=${evo.name} />
              </label>
              <label>
                Tipo:a
                <input type="text" .value=${evo.type} />
              </label>
              <label>
                Imagen:
                <input type="text" .value=${evo.image} />
              </label>
              <label>
                ¿Está repetido?
                <input type="checkbox" @change=${this._showModal} />
              </label>
            </fieldset>
          `
        )}
      </form>
    `;
  }

  _prevent(e) {
    e.preventDefault();
  }

  _showModal(e) {
    if (e.target.checked) {
      this.dispatchEvent(new CustomEvent('show-modal'));
    }
  }
}

customElements.define('pokemon-form', PokemonForm);
