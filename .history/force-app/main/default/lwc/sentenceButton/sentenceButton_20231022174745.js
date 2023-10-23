import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  get cssClasses() {
    return this.word.isPalindrome ? 'palindrome' : '';
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }
}
