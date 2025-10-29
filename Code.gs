function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Zeta')
      .addItem('Obfuscate Text', 'obfuscate')
      .addToUi();
}

function obfuscate() {
  // Gets the body contents of the active tab.
  const body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

  // Use editAsText to obtain a single text element containing
  // all the characters in the tab.
  const text = body.editAsText();

  const len = text.getText().length;
  let letters = ['i', 'j', 'l']
  for (let i = 1; i < len * 2 - 1; i += 2) {
    text.insertText(i, letters[Math.floor(Math.random() * 3)]);
    text.setForegroundColor(i, i, '#FFFFFF');
    text.setFontSize(i, i, 1);
    text.setFontFamily(i, i, 'Amatic SC');
    text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT);
  }
  
  DocumentApp.getUi()
     .alert('Done!');
}
