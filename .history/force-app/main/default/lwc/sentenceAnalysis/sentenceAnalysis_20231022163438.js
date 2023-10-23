import { LightningElement, wire, api } from 'lwc';
import getAllFileData from '@salesforce/apex/ContentDocumentAccessor.getAllFileData';
import { refreshApex } from '@salesforce/apex';


export default class PalindromeAnalysis extends LightningElement {
  @wire(getAllFileData, {})

  allFileData;
  acceptedFormats = ['.txt'];
  selectedFileId = null;

  selectedSentenceIndex = null;

  refreshFileData() {
    return refreshApex(this.allFileData);
  }

  connectedCallback() {
    this.template.addEventListener('fileuploaded', () => {
      this.refreshFileData();
    });
  }


  get fileDataArray() {
    return this.allFileData?.data;
  }

  refreshFileData() {
    return refreshApex(this.allFileData);
  }

  get sentencesToDisplay() {
    if (this.selectedFileId === null) {
      return [];
    }
    return this.fileDataArray.find(fileData => fileData.id === this.selectedFileId).content.split('\n');
  }

  get sentenceIterationItems() {
    return this.sentencesToDisplay.map((sentence, index) => ({ sentence, index }));
  }

  get selectedSentence() {
    if (this.selectedSentenceIndex === null) {
      return '';
    }
    return this.sentencesToDisplay[this.selectedSentenceIndex];
  }

  get selectedSentenceLength() {
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
}