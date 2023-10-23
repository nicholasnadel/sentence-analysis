import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;

  get cssClasses() {
    // return this.index === this.selectedSentenceIndex ? 'selected' : this.isPalindromeClass;
    // if selected
    if (this.index === this.selectedSentenceIndex) {
      return 'selected';
    }
    // add palindrome to selected if palindrome
    if (this.isPalindromeClass === 'palindrome') {
      return 'palindrome';
    }
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }
}
