import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;

  get cssClasses() {
    let classes = 'selected';
    // return this.index === this.selectedSentenceIndex ? 'selected' : this.isPalindromeClass;
    // if palindrome, add palindrome class
    if (this.isPalindromeClass) {
      classes += ' palindrome';
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