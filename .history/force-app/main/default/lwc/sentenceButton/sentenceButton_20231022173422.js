import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  const isPalindromeClass = isPalindrome ? 'palindrome' : '';


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
