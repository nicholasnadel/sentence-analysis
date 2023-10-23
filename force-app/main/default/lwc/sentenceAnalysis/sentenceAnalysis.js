import { LightningElement, wire, api } from 'lwc';
import getAllFileData from '@salesforce/apex/ContentDocumentAccessor.getAllFileData';
import { refreshApex } from '@salesforce/apex';

export default class PalindromeAnalysis extends LightningElement {
  @wire(getAllFileData, {})

  allFileData;

  acceptedFormats = ['.txt'];

  selectedFileId = null;

  selectedSentenceIndex = null;

  @api isPalindrome = false;

  @api selectedSentence;

  columns = [
    { label: 'Letter', fieldName: 'letter' },
    { label: 'Occurrences', fieldName: 'occurrences' },
    { label: 'Percentage', fieldName: 'percentage', type: 'percent' }
  ];

  connectedCallback() {
    this.template.addEventListener('fileuploaded', () => {
      this.refreshFileData();
    });
  }

  handleUploadFinished() {
    this.refreshFileData();
  }

  refreshFileData() {
    return refreshApex(this.allFileData);
  }

  get fileDataArray() {
    return this.allFileData?.data;
  }

  get sentencesToDisplay() {
    if (this.selectedFileId === null) {
      return [];
    }
    return this.fileDataArray.find(fileData => fileData.id === this.selectedFileId).content.split('\n');
  }

  get sentenceIterationItems() {
    return this.sentencesToDisplay.map((sentence, index) => {
      const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
      const isPalindrome = cleanedSentence === cleanedSentence.split('').reverse().join('');
      return { sentence, index, isPalindrome };
    });
  }

  get selectedSentence() {
    if (this.selectedSentenceIndex === null) {
      return '';
    }
    return this.sentencesToDisplay[this.selectedSentenceIndex];
  }

  get selectedSentenceLength() {
    if (this.selectedSentence === null || typeof this.selectedSentence === 'undefined') {
      return 0;
    }
    return this.selectedSentence.length;
  }

  handleFileSelect(event) {
    this.selectedFileId = event.detail.id;
    this.template.querySelectorAll('c-file-button').forEach(button => {
      button.selectedFileId = this.selectedFileId;
    });
  }

  handleSentenceSelect(event) {
    this.selectedSentenceIndex = event.detail.index;
  }

  get letterDataArray() {
    const letterCounts = {};
    const selectedSentence = this.selectedSentence.toLowerCase();

    // Initialize letterCounts with all letters of the alphabet
    for (let i = 97; i <= 122; i++) {
      const letter = String.fromCharCode(i);
      letterCounts[letter] = 0;
    }

    for (let i = 0; i < selectedSentence.length; i++) {
      const letter = selectedSentence[i];
      if (letter.match(/[a-z]/)) {
        letterCounts[letter]++;
      }
    }

    const letterDataArray = [];
    const totalLetters = selectedSentence.replace(/[^a-z]/g, '').length;

    for (let letter in letterCounts) {
      const occurrences = letterCounts[letter];
      const percentage = totalLetters === 0 ? 0 : occurrences / totalLetters;
      letterDataArray.push({ letter, occurrences, percentage: percentage.toFixed(4) });
    }

    return letterDataArray;
  }

  get columns() {
    return columns;
  }

  get isSentenceSelected() {
    return !!this.selectedSentence;
  }
}