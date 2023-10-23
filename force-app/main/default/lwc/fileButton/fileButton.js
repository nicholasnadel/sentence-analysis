import { LightningElement, api } from 'lwc';

export default class FileButton extends LightningElement {
  @api fileData = {};

  @api
  get selectedFileId() {
    return this._selectedFileId;
  }
  set selectedFileId(value) {
    this._selectedFileId = value;
    let newVariant = this.selectedFileId === this.fileData.id ? 'brand' : 'brand-outline';
    this.template.querySelector('lightning-button').variant = newVariant;
  }

  _selectedFileId;

  get label() {
    return this.fileData.title;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('fileselect', {
      detail: {
        id: this.fileData.id
      }
    }));
  }
}