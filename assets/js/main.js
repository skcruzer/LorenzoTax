/// When you click everywhere in the document
$(document).click(function (event) {

  /// If *navbar-collapse* is not among targets of event
  if (!$(event.target).is('.navbar-collapse *')) {

    /// Collapse every *navbar-collapse*
    $('.navbar-collapse').collapse('hide');

  }
});
// ===================== Copy Email Option =====================
// function CopyMe(text) {
//   navigator.clipboard.writeText(text)
//     .then(() => {
//       console.log(`Copied to clipboard: ${text}`);
//       alert(`Copied to clipboard: ${text}`);
//     })
//     .catch((error) => {
//       console.error(`Could not copy email address: ${error}`);
//     });
// }

