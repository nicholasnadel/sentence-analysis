import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;

  get cssClasses() {
    let classes = '';
    if (this.index === this.selectedSentenceIndex) {
      classes += 'selected ';
    }
    if (this.isPalindromeClass) {
      classes += this.isPalindromeClass;
    }
    return classes;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }
}