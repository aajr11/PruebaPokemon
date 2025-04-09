// pokemon-modal.js
import { LitElement, html, css } from 'lit';

export class PokemonModal extends LitElement {
  static properties = {
    open: { type: Boolean }
  };

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      max-width: 300px;
    }
    button {
      margin-top: 1rem;
    }
  `;

  render() {
    if (!this.open) return html``;
    return html`
      <div class="overlay" @click=${this._close}>
        <div class="modal" @click=${e => e.stopPropagation()}>
          <p>Este Pokémon está repetido. Puedes cambiarlo en el punto más cercano.</p>
          <button @click=${this._close}>Cerrar</button>
        </div>
      </div>
    `;
  }

  _close() {
    this.dispatchEvent(new CustomEvent('close'));
  }
}

customElements.define('pokemon-modal', PokemonModal);
