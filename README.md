This coding exercise is centered on a Sentence Analysis tool. In the “Starter code” folder, you will find some lightning web components and an apex class, which comprise the Sentence Analysis tool. The top-level component is sentenceAnalysis. Please complete the tasks described below. A Litify engineer would be expected to complete this project in about 3 hours.
Enhancements
Please complete the following tasks around sentenceAnalysis and its related components:

1. Make it so, upon uploading a new file, the list of files automatically refreshes.
2. Make it so the lightning-file-upload component is horizontally centered within the
   sentenceAnalysis component.
3. Make it so the file-button instances are side-by-side instead of being stacked on top of
   each other.
4. After a file is selected, in the lower left part of the UI where the file contents are listed,
   make it so palindromes are shown with green text.
   a. Note: Palindrome detection should not be case-sensitive, and should disregard
   whitespace, punctuation, and other non-letter characters.
   Bug fixes
   There was also a bug discovered in the Sentence Analysis tool. Using the provided text files in the “Text file samples” folder, the steps to reproduce the bug are as follows:
5. Upload sentences.txt
6. Upload words.txt
7. Select words.txt in the UI and select the very last sentence in the list 4. Select sentences.txt in the UI
8. Notice that the page breaks and becomes unresponsive
   Please troubleshoot and fix the bug.
   New features
   A new feature was requested to be added to the Sentence Analysis tool. When a user selects a sentence in the left column, they want the right column to show a breakdown of the letters in the sentence. The UI for the breakdown should be a table with 26 rows, one for each letter of the alphabet. The table should have the following 3 columns:
9. The first column should show the letter for each row.

10. The second column should show the number of times each letter occurs in the selected sentence.
11. The third column should show the overall percentage of the sentence that the letter comprises, rounded to the nearest whole number. So for example, if the selected sentence is 9 letters long, and 3 of those letters are “L”, then the 3rd column should show “33%” for the row corresponding to the letter “L”.
    Please implement the above requirements. There is a placeholder comment in sentenceAnalysis.html indicating where in the UI the table should be placed.
