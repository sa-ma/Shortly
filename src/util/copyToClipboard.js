export const copyToClipboard = (link, cb) => {
  const hiddenInput = document.createElement('input');
  document.body.appendChild(hiddenInput);
  hiddenInput.value = link;
  hiddenInput.select();
  document.execCommand('copy');
  cb(true);
  document.body.removeChild(hiddenInput);
};
