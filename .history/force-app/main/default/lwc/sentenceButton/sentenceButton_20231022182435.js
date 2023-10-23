import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindrome;

  get cssClasses() {
    // return this.index === this.selectedSentenceIndex ? 'selected' : this.isPalindromeClass;
    let classes = ' ';
    if (this.index === this.selectedSentenceIndex) {
      classes += 'selected ';
    }
    if (this.isPalindrome) {
      classes += 'palindrome ';
    }
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }

} e