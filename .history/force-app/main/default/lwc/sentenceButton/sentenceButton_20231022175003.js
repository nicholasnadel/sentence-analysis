import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api selectedWordIndex;


  get wordCssClasses() {
    return this.word.isPalindrome ? 'palindrome' : '';
  }

  get sentenceCssClasses() {
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