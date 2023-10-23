import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;

  get cssClasses() {
    // return this.index === this.selectedSentenceIndex ? 'selected' : this.isPalindromeClass;
    let classes = '';
    if (this.index === this.selectedSentenceIndex) {
      classes += 'selected ';
    }
    return classes += this.isPalindromeClass;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }
}