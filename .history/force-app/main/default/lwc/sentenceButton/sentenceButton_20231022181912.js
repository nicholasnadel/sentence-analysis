import { LightningElement, api } from 'lwc';

export default class SentenceButton extends LightningElement {
  @api sentence;

  @api index;

  @api selectedSentenceIndex;

  @api isPalindromeClass;

  get cssClasses() {
    // return this.index === this.selectedSentenceIndex ? 'selected' : this.isPalindromeClass;
    // if selected
    let classes = 'selected '
    if (this.index === this.selectedSentenceIndex) {
      // if isPalindrome
      if (this.isPalindromeClass === 'palindrome') {
        classes += 'palindrome'
      }
      return classes;
    }
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sentenceselect', {
      index: this.index
    }
    }));
}
}
