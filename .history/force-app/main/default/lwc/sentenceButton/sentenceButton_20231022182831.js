import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  // @api isPalindrome;

  get cssClasses() {
    let classes = this.index === this.selectedSentenceIndex ? 'selected' : '';
    // if (this.isPalindrome) {
    //   classes += ' palindrome';
    // }
    return classes;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      detail: {
        index: this.index
      }
    }));
  }

} e