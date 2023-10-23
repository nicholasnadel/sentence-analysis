import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;


  get cssClasses() {
    return this.index === this.selectedSentenceIndex ? 'selected' : '';
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }
}

  get cssClasses() {
  let classes = this.index === this.selectedSentenceIndex ? 'selected' : '';
  classes += this.isPalindromeClass ? ' palindrome' : '';
  return classes;
}
